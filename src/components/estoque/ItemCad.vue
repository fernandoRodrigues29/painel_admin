<template>
   <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <div class="layout-page">
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="row">
                <div class="col-md-12">
                  <div class="card mb-4">
                    <h5 class="card-header">Cadastar Item</h5>
                    <div class="row align-items-start">
                      <div class="col-md-3">
                       
                      </div>
                    </div>
                    <div class="card-body conteiner-well">
                      <div class="whell-page" v-if="whellSpin">
                          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                      </div>
                      <form method="POST" @submit.prevent="acao($event)">
                      <div class="mb-2">
                        <label for="nome-estoque" class="form-label">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nome-estoque"
                          placeholder="Nome"
                          aria-describedby="defaultFormControlHelp"
                          v-model="item.nome"
                        />
                      </div>
                      <div class="mb-2">
                        <label for="descricao-estoque" class="form-label">Descricao</label>
                        <input
                          type="text"
                          class="form-control"
                          id="descricao-estoque"
                          placeholder="descricao"
                          aria-describedby="defaultFormControlHelp"
                          v-model="item.descricao"
                        />
                      </div>
                      <div class="mb-2">
                        <label for="categoria-estoque" class="form-label">Categoria</label>
                        <searchFilter 
                          :lista="categorias" 
                          idValue="id" 
                          valorValue="categoria" 
                          @receberObjeto="pegarObjetoCategoria"/>
                      </div>
                      <div class="mb-2">
                        <label for="status-estoque" class="form-label">Status</label>
                        <searchFilter 
                          :lista="lstatus" 
                          idValue="id" 
                          valorValue="status" 
                          @receberObjeto="pegarObjetoStatus"/>

                      </div>
                      <div class="mt-3">
                        <button class="btn btn-outline-primary btnlargo btn-lg" type="submit" id="button-addon1">Cadastrar</button>
                      </div>
                      <div class="mt-3">
                        <router-link to="/estoque/listar" class="btn btn-outline-warning btnlargo btn-lg"> Voltar </router-link>
                      </div>
                    </form>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
         </div>               
      </div>
    </div>
</div>
</template>

<script>
 import mixinBD from '@/components/banco_dados/basededados.js';
 import searchFilter from '@/components/formularios/SearchFilter.vue';

    export default {
      mixins:[mixinBD],
        data(){
            return{
                item:{},
                categorias:[],
                lstatus:[],
                whellSpin:false,
                listaArr: [
                    { id:1, cidade:"São Paulo" },
                    { id:2, cidade:"Rio de Janeiro" },
                    { id:3, cidade:"Belo Horizonte" },
                    { id:4, cidade:"Espirito Santo" },
                    { id:5, cidade:"Santos" },
                    { id:6, cidade:"Guarulhos" },
                    { id:7, cidade:"Campos" },
                    { id:8, cidade:"Campinas" },
                    { id:9, cidade:"São Bernardo" },
                    { id:10, cidade:"Três Marias" },
                ],
            }
        },
        watch:{
          localStorageBD(){
            this.carregarCategorias();
            this.carregarStatus();
          }
        },
        methods:{
            pegarObjeto(data){
              //onde vai receber os dados para update
              console.log('data retornando',data);
            },
            pegarObjetoCategoria(data){
              this.item.categoria = data.id;
            },
            pegarObjetoStatus(data){
              this.item.status = data.id;
            },
            carregarCategorias(){
                let todos = JSON.parse(this.localStorageBD);
                if(todos !== null){
                    this.categorias = todos.categoria;
                  }
            }, 
           carregarStatus(){
                let todos = JSON.parse(this.localStorageBD);
                if(todos !== null){
                  this.lstatus = todos.status;
                }
            },
            async retornarIdEstoque(){
                let todos = JSON.parse(this.localStorageBD);
                const data = todos.estoque;
                  let ultimo = data[data.length -1];
                    return ultimo.id;

            }, 
            async acao(e){
              e.preventDefault();
              this.whellSpin=true;
              const dataehora = new Date();
              const dia = dataehora.toLocaleDateString();
              const hora = dataehora.toLocaleTimeString();

              //retornar o ultimo id
              let ultimo_id = await this.retornarIdEstoque();
                ultimo_id = parseInt(ultimo_id)+1;
                  //construir data
                  const data  = {
                    "id":parseInt(ultimo_id),
                    "nome":this.item.nome,
                    "descricao":this.item.descricao,
                    "quantidade":1,
                    "fornecedor":1,
                    "categoria":this.item.categoria,
                    "status":this.item.status,
                    "dataCad":`${dia} ${hora}`,
                    "dataAlt":`${dia} ${hora}`
                  } 
                  console.log("Dados para serem inseridos no estoque:",data);
                  const url = 'http://localhost/APICardapioLaravel/public/api/estoque';
                    this.cadastrarItemBD(url,data);
                    this.whellSpin=false;
                      //redirecionar  
                       this.$router.push('/estoque/listar');
                  }
        },
        async created(){
          this.carregarCategorias();
          this.carregarStatus()
        },
        components:{
          searchFilter
        }
    }
</script>

<style>
    .btnlargo{
        width: 100% !important;
    }
</style>