<template>
    <div class="layout-wrapper layout-content-navbar">
       <div class="layout-container">
         <div class="layout-page">
           <div class="content-wrapper">
             <div class="container-xxl flex-grow-1 container-p-y">
               <div class="row">
                 <div class="col-md-12">
                   <div class="card mb-4">
                     <h5 class="card-header">Listar Item</h5>
                     <div class="card-body">
                        <div class="mt-2 mb-2 d-flex justify-content-between">
                          <div class="col-md-3 col-3">
                                 <router-link to="/estoque/cadastro" class="btn btn-outline-primary btnlargo btn-lg" type="button" id="button-addon1" >Add Item</router-link>
                          </div>
                          <div class="col-md-3 col-3 text-right">
                            <div class="input-group">
                            
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Pesquisa"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                v-model="pesquisa"
                                @keydown.enter="pesquisar()"
                                @keyup="pesquisar()"
                              />
                              <button class="btn btn-outline-primary" type="button" id="button-addon2" 
                              @click="pesquisar"
                              >
                                <i class="bx bx-search "></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          
                        </div>
                        <div v-if="lista.length == 0">
                          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>
                        <div v-else class="table-responsive text-nowrap">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Item</th>
                                <th>Descrição</th>
                                <th class="d-none">Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody class="table-border-bottom-0 corpo-tabela">
                             
                              <tr class="table-default" v-for="item in lista" :key="item.id">

                                <td><i class="fab fa-sketch fa-lg text-warning me-3"></i> 
                                  <router-link class="item-nome" :to="`/estoque/editar/${item.id}`"><strong>{{item.nome}}</strong></router-link>
                                </td>
                                <td>{{item.descricao}}</td>
                                <td class="d-none">
                                  <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-popup="tooltip-custom"
                                      data-bs-placement="top"
                                      class="avatar avatar-xs pull-up"
                                      title="Lilian Fuller"
                                    >
                                      <img src="assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-popup="tooltip-custom"
                                      data-bs-placement="top"
                                      class="avatar avatar-xs pull-up"
                                      title="Sophia Wilkerson"
                                    >
                                      <img src="assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                                    </li>
                                    <li
                                      data-bs-toggle="tooltip"
                                      data-popup="tooltip-custom"
                                      data-bs-placement="top"
                                      class="avatar avatar-xs pull-up"
                                      title="Christina Parker"
                                    >
                                      <img src="assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                                    </li>
                                  </ul>
                                </td>
                                <td><span class="badge bg-label-primary me-1">{{item.status}}</span></td>
                                <td>
                                  <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                      <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                      <router-link class="dropdown-item" :to="`/estoque/editar/${item.id}`"
                                        ><i class="bx bx-edit-alt me-1"></i> Edit</router-link>
                                        <button class="dropdown-item" @click.prevent="excluir(item.id)">
                                          <i class="bx bx-trash me-1"></i> Delete
                                        </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
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
     //importar mixin
     import mixinBD from '@/components/banco_dados/basededados.js';
     export default {
         name:'itemlista',
         mixins:[mixinBD],
         data(){
             return{
                 items:[{}],
                 lista:[],
                 pesquisa:''
             }
         },
         methods:{
             excluir(identificador){
                this.excluirItem(identificador);
                  const indice = this.lista.findIndex(el=> el.id === identificador);
                    this.lista.splice(indice,1);
              //trocar fetch
             }, 
             acao(){
                 alert('que legal, está funcioanado!');
             },
             async carregarStatus(){
                let todos = JSON.parse(this.localStorageBD);
               if(todos != null){
                 let data = todos.status;
                     return data;
               }
               return null;
             },
             async carregar(){
              const statusMapa = await this.carregarStatus();
                let todos = JSON.parse(this.localStorageBD);
                  if(todos !== null){
                    let data = todos.estoque;
                        if( data){
                            data.map((estoque)=>{
                              statusMapa.map((el)=>{
                                if(estoque.status == el.id){
                                  estoque.status=el.status;
                                }
                              });
                            });
  
                            console.log('todos data:',data);  
                            this.lista = data;
                        }
                  }
              
             },
             async pesquisar(){
                
                  if(this.pesquisa.length === 0){
                    this.carregar();
                  }
                  if(this.pesquisa.length > 1){
                      this.lista = this.lista.filter((e)=> {
                        if(e.nome.includes(this.pesquisa)){
                          return e
                        }
                      });
                  }
             }


         },
         watch:{
          localStorageBD(valor){
            this.carregar();
          }
        },
         created(){
             this.carregar();
         }
     }
 </script>
 
 <style>
     .btnlargo{
         width: 100% !important;
     }
     .corpo-tabela{
      height: 10vh;
     }
     /**item lista */
     .item-lista{
      color: rgb(128, 128, 128);
     }
     

 </style>