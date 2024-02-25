export default {
    data(){
        return {
            localStorageBD:null,
            dados:[],
            id_estoque:0
        }
    },
    methods:{
        EnviarDados(url,data,verbo){
            let  token  = localStorage.getItem('chave_acesso_admEstoque');
            if(token){
                token = token.replace('"','');
                
                const opcoes ={
                  method:`${verbo}`,
                  headers:{ 
                    "Content-type":"application/json",
                    Authorization: `Bearer ${token}`
                },
                  body:JSON.stringify(data)
                };
                fetch(url,opcoes)
                .then(response=>response.json())
                .then((data)=>{
                    console.log('Dados retornados:',data);
                });
            }
        },
        async fetchRetornoDados(url){
            let  token  = localStorage.getItem('chave_acesso_admEstoque');
            // if(!token) throw new Error("Sem Token de Acesso");
            if(token){
                token = token.replace('"','');
                
                    const headers = {
                        headers:{ Authorization: `Bearer ${token}`}
                    };
                        const req = await fetch(url,headers);
                            const rs = await req.json();
                            if(rs == undefined || rs.status == 'Token is Expired'){
                                    this.sairSistema();
                            }
                                return rs;
            }
        },
        async carregarBD(){
            //estoque
            const estoques = await this.fetchRetornoDados("http://localhost/APICardapioLaravel/public/api/estoque");
            const categorias = await this.fetchRetornoDados("http://localhost/APICardapioLaravel/public/api/categorias");
            const fornecedores = await this.fetchRetornoDados("http://localhost/APICardapioLaravel/public/api/fornecedores");
            const status = await this.fetchRetornoDados("http://localhost/APICardapioLaravel/public/api/status");
            const graficos = await this.fetchRetornoDados("http://localhost/APICardapioLaravel/public/api/graficos");

                const rs = {
                    "estoque":estoques,
                    "categoria":categorias,
                    "fornecedor":fornecedores,
                    "status":status,
                    "grafico":graficos
                };
                   
                    localStorage.setItem('basedadosestoque',JSON.stringify(rs));
                        this.localStorageBD = JSON.stringify(rs);
                            console.log('controle:',rs);
        },
        async carregarBaseDados(){
            await this.carregarBD();
        },
        async cadastrarItemLocalStorage(dados){
            await this.carregarBaseDados();
                let db = JSON.parse(this.localStorageBD);
                    db.estoque.push(dados);
                        localStorage.setItem('basedadosestoque',JSON.stringify(db));
                         console.log('cadastrado novo');
        },
        async cadastrarItemBD(url,data){
            const verbo = 'POST'
            this.EnviarDados(url,data,verbo)
           
        },
        async resgatarDadosPorId(identicado){
            let db = JSON.parse(this.localStorageBD);
            console.log('base de dados editar',db)
            if(db !== null){
                let elemento = db.estoque.filter(el=>{
                    if(el.id == identicado){
                        return el
                    }
                  });
                    return elemento;
            }
            return null;  
        },
        async resgatarIndexPorId(identicado){
            let db = JSON.parse(this.localStorageBD);
              const indice = db.estoque.findIndex(el=> el.id === identicado);
                return indice;
        },
        async atualizarItem(dados){
            let todos = JSON.parse(this.localStorageBD);
                const indice = await this.resgatarIndexPorId(dados.id);
                    todos.estoque[indice] = dados;
                        localStorage.setItem('basedadosestoque',JSON.stringify(todos));
        },
        async excluirItem(id){
            const data = {'idt':id};
            const url =`http://localhost/APICardapioLaravel/public/api/estoque/${id}`;
            const verbo = "DELETE";

            this.EnviarDados(url,data,verbo)
            // let todos = JSON.parse(this.localStorageBD);
            //     const indice = await this.resgatarIndexPorId(id);
            //         todos.estoque.splice(indice,1);
            //            localStorage.setItem('basedadosestoque',JSON.stringify(todos));
        },
        async sairSistema(){
            localStorage.removeItem('basedadosestoque');
            localStorage.removeItem('chave_acesso_admEstoque');
        }

    },
    created(){
        this.carregarBaseDados();
    }
}