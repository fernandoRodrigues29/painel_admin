export default {
    data(){
        return {
            localStorageBD:null,
            dados:[],
            id_estoque:0
        }
    },
    methods:{
        async carregarBaseDados(){
            if(localStorage.getItem('basedadosestoque') === null){
                const rs = await fetch('db/basedados.json');
                    const db = await rs.json();
                    localStorage.setItem('basedadosestoque',JSON.stringify(db));
                    this.localStorageBD = db;
            }else{
                this.localStorageBD = localStorage.getItem('basedadosestoque');
            }
        },
        async cadastrarItemLocalStorage(dados){
            await this.carregarBaseDados();
                let db = JSON.parse(this.localStorageBD);
                    db.estoque.push(dados);
                        localStorage.setItem('basedadosestoque',JSON.stringify(db));
                         console.log('cadastrado novo');
        },
        async resgatarDadosPorId(identicado){
            let db = JSON.parse(this.localStorageBD);
              const elemento = db.estoque.filter(el=>{
                return el.id === identicado
              });
                return elemento;
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
            let todos = JSON.parse(this.localStorageBD);
                const indice = await this.resgatarIndexPorId(id);
                    todos.estoque.splice(indice,1);
                       localStorage.setItem('basedadosestoque',JSON.stringify(todos));
        }

    },
    created(){
        this.carregarBaseDados();
    }
}