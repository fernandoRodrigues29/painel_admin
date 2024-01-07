<template>
  <div class="layout-wrapper layout-content-navbar">
     <div class="layout-container">
       <div class="layout-page">
         <div class="content-wrapper">
           <div class="container-xxl flex-grow-1 container-p-y">
             <div class="row">
               <div class="col-md-12">
                 <div class="card mb-4">
                   <h5 class="card-header">Editar Item</h5>
                   <div class="card-body">
                    <div class="row">
                     
                      <div class="col-md-3 col-3">
                        <router-link to="/estoque/listar" class="btn btn-outline-info"> Voltar </router-link>
                      </div>
                    </div> 
                    <form @submit.prevent="acao">
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
                       <button class="btn btn-outline-primary btnlargo btn-lg" type="button" id="button-addon1" @click.prevent="acao">Atualizar</button>
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
           async resgatarDado(){
            const id = this.$route.params.id;
            // const data = await this.retornarEstoqueId(id);
              const rs = await this.resgatarDadosPorId(id)
                const data = rs[0]; 
                    this.item.id=data.id;
                    this.item.nome=data.nome;
                    this.item.descricao=data.descricao;
                    this.item.quantidade=data.quantidade;
                    this.item.fornecedor=data.fornecedor;
                    this.item.categoria=data.categoria;
                    this.item.status=data.status;
                    this.item.dataCad=data.dataCad;
                    this.item.dataAlt=data.dataAlt;
           },
           carregarCategorias(){
              //  fetch(`http://localhost:3000/categoria`)
              //  .then((response)=>response.json())
              //  .then((data)=>{
              //    this.categorias = data;
              //  });
                let todos = JSON.parse(this.localStorageBD);
                  this.categorias = todos.categoria;
           }, 
           carregarStatus(){
              //  fetch(`http://localhost:3000/status`)
              //  .then((response)=>response.json())
              //  .then((data)=>{
              //    this.status = data;
              //  });
                let todos = JSON.parse(this.localStorageBD);
                  this.status = todos.status;
           },
           async retornarEstoqueId(id){
                const data = await this.resgatarDadosPorId(id)
                    // const url = `http://localhost:3000/estoque/${id_esqtoque}`;
                    //    const req = await fetch(url);
                    //       const data = await req.json();

                            return data;
           },
           async retornarEstoqueTodos(){
                     const url = `http://localhost:3000/estoque`;
                       const req = await fetch(url);
                          const data = await req.json();
                            return data;
           },
           async retornarIdEstoque(){
            const data = await this.retornarEstoqueTodos(); 
            let ultimo = data[data.length -1];
                   return ultimo.id;
           }, 
           async acao(){
             //e.preventDefault();
             const dataehora = new Date();
             const dia = dataehora.toLocaleDateString();
             const hora = dataehora.toLocaleTimeString();
                 //construir data
                 const data  = {
                   "id":this.item.id,
                   "nome":this.item.nome,
                   "descricao":this.item.descricao,
                   "quantidade":1,
                   "fornacedor":"1",
                   "categoria":this.item.categoria,
                   "status":this.item.status,
                   "dataCad":this.item.dataCad,
                   "dataAlt":`${dia} ${hora}`
                 } 
                 //usando o local storage 
                      this.atualizarItem(data);
                      this.$router.push('/estoque/listar');


                      // console.log('elemento indice aqui resgatado',todos.estoque[indice]);
                        // this.$router.push('/estoque/listar');
                 // const data = rs[0]; 
                    // this.item.id=data.id;
                    // this.item.nome=data.nome;
                    // this.item.descricao=data.descricao;
                    // this.item.quantidade=data.quantidade;
                    // this.item.fornecedor=data.fornecedor;
                    // this.item.categoria=data.categoria;
                    // this.item.status=data.status;
                    // this.item.dataCad=data.dataCad;
                    // this.item.dataAlt=data.dataAlt;
                 
                 
                 //  const dataJsonFormat = JSON.stringify(data);
                  //  console.log(dataJsonFormat);

                   //PUT    /posts/1
                   //enviar para o aquivo

                    //  fetch(`http://localhost:3000/estoque/${this.item.id}`,{
                    //    method:"PUT",
                    //    headers:{
                    //      'Content-Type':'application/json'
                    //    },
                    //    body:dataJsonFormat
                    //  });
                    //   this.$router.push('/estoque/listar');
                 }
       },
       async mounted(){
         await this.resgatarDado();
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