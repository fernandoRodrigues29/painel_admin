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
                    <div class="card-body">
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
                        <select class="form-select" id="categoria-estoque" aria-label="Default select example"  v-model="item.categoria">
                          <option selected>--Categoria--</option>
                          <option v-for="categ in categorias" :key="categ.id" :value="categ.id">{{categ.categoria}}</option>
                          
                        </select>
                      </div>
                      <div class="mb-2">
                        <label for="status-estoque" class="form-label">Status</label>
                        <select class="form-select" id="status-estoque" aria-label="Default select example"  v-model="item.status">
                          <option selected>--Status--</option>
                          <option v-for="estatus in status" :key="estatus.id" :value="estatus.id">{{estatus.status}}</option>
                        </select>
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
    export default {
      mixins:[mixinBD],
        data(){
            return{
                item:{},
                categorias:[],
                status:[]
            }
        },
        methods:{
            carregarCategorias(){
                // fetch(`http://localhost:3000/categoria`)
                // .then((response)=>response.json())
                // .then((data)=>{
                //   this.categorias = data;
                // });
                let todos = JSON.parse(this.localStorageBD);
                this.categorias = todos.categoria;
            }, 
            carregarStatus(){
                // fetch(`http://localhost:3000/status`)
                // .then((response)=>response.json())
                // .then((data)=>{
                //   this.status = data;
                // });
                let todos = JSON.parse(this.localStorageBD);
                this.status = todos.status;
            },
            async retornarIdEstoque(){
              // let id = localStorage.getItem('id');
              // const req = await fetch("http://localhost:3000/estoque");
              //   const data = await req.json();
                let todos = JSON.parse(this.localStorageBD);
                const data = todos.estoque;
                  let ultimo = data[data.length -1];
                    return ultimo.id;

            }, 
            async acao(e){
              e.preventDefault();
              
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
                    "fornacedor":"1",
                    "categoria":this.item.categoria,
                    "status":this.item.status,
                    "dataCad":`${dia} ${hora}`,
                    "dataAlt":`${dia} ${hora}`
                  } 
                  //cadastrar
                  this.cadastrarItemLocalStorage(data)
                    // const url = `http://localhost:3000/estoque`;
                      //  const req = await fetch(url,{
                      //   method:"POST",
                      //   headers:{'Content-Type':'application/json'},
                      //   body:dataJsonFormat
                      // });

                      this.$router.push('/estoque/listar');
                  }
        },
        mounted(){
          this.carregarCategorias()
          this.carregarStatus()
        }
    }
</script>

<style>
    .btnlargo{
        width: 100% !important;
    }
</style>