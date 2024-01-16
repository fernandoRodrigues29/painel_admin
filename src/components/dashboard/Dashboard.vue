<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <div class="layout-page">
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="row justify-content-center mt-3">
              <div class="col-md-12 col-lg-12">
                <div class="row justify-content-center">
                  <div class="col-md-7 col-lg-7">
                    <div class="card">
                      <div class="d-flex align-items-end row">
                        <div class="col-sm-7">
                          <div class="card-body">
                            <h5 class="card-title text-primary">
                              Notificações 🎉
                            </h5>
                            <p class="mb-4">
                              Você tem
                              <span class="fw-bold">Tantos</span> itens cadastrados no sistema.
                            </p>
                            <router-link to="/estoque/listar" class="btn btn-sm btn-outline-primary">Estoque</router-link>
                          </div>
                        </div>
                        <div class="col-sm-5 text-center text-sm-left">
                          <div class="card-body pb-0 px-0 px-md-4">
                            <img
                              src="assets/img/illustrations/man-with-laptop-light.png"
                              height="140"
                              alt="View Badge User"
                              data-app-dark-img="illustrations/man-with-laptop-dark.png"
                              data-app-light-img="illustrations/man-with-laptop-light.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 col-lg-">
                    <div class="row">
                      <div class="col-md-6 col-lg-6 mt-2">
                        <div class="card">
                          <div class="card-body">
                            <div
                              class="card-title d-flex align-items-start justify-content-between"
                            >
                              <span class="fw-semibold d-block mb-1"
                                >Status</span
                              >
                              <h3 class="card-title mb-2">{{cStatus}}%</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 mt-2">
                        <div class="card">
                          <div class="card-body">
                            <div
                              class="card-title d-flex align-items-start justify-content-between"
                            >
                              <span class="fw-semibold d-block mb-1"
                                >Categoria</span
                              >
                              <h3 class="card-title mb-2">{{cCategoria}}%</h3>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 mt-2">
                        <div class="card">
                          <div class="card-body">
                            <div
                              class="card-title d-flex align-items-start justify-content-between"
                            >
                              <span class="fw-semibold d-block mb-1"
                                >Items</span
                              >
                              <h3 class="card-title mb-2">{{cItens}}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 mt-2">
                        <div class="card">
                          <div class="card-body">
                            <div
                              class="card-title d-flex align-items-start justify-content-between"
                            >
                              <span class="fw-semibold d-block mb-1"
                                >Ocupação</span
                              >
                              <h3 class="card-title mb-2">{{cOculp}}%</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mt-3">
              <div class="col-md-3 col-lg-3">
                <div class="card">
                  <div
                    class="card-header d-flex align-items-center justify-content-between"
                  >
                    <h5 class="card-title m-0 me-2">Itens Cadastrados</h5>
                    <div class="dropdown">
                      <button
                        class="btn p-0"
                        type="button"
                        id="transactionID"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="transactionID"
                      >
                        <a class="dropdown-item" href="javascript:void(0);"
                          >Last 28 Days</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          >Last Month</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          >Last Year</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <ul class="p-0 m-0">
                      <li class="d-flex mb-4 pb-1" v-for="item in listaProdutos" :key="item.id">
                        <div class="avatar flex-shrink-0 me-3">
                          <img
                            src="assets/img/icons/unicons/wallet.png"
                            alt="User"
                            class="rounded"
                          />
                        </div>
                        <div
                          class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2"
                        >
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"
                              >{{item.descricao}}</small
                            >
                            <h6 class="mb-0">{{item.nome}}</h6>
                          </div>
                          <!-- <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0">+82.6</h6>
                            <span class="text-muted">USD</span>
                          </div> -->
                        </div>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-9 col-lg-9">
                <div class="card">
                  <div class="card-body">
                    <GraficoBarra></GraficoBarra>
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

import GraficoBarra from "@/components/GraficoBarra.vue";
import GraficoLinha from "@/components/GraficoLinha.vue";
export default {
  mixins:[mixinBD],
  data() {
    return {
        listaProdutos:[],
        barrMes:[],
        contadorNum:0,
        cStatus:0,
        cCategoria:0,
        cItens:0,
        cOculp:0,
    };
  },
  methods:{
    async carregarListadeProdutos(){
      if(this.localStorageBD !== null){
        let todos = JSON.parse(this.localStorageBD)
          this.listaProdutos = todos.estoque;
      }
        // const req = await fetch("http://localhost:3000/estoque");
        //   const data = await req.json();
            // this.listaProdutos = data;
            // console.log('lista:',data)
    },
    async carregarDadosGrafMes(){
        // const req = await fetch("http://localhost:3000/grafico");
        //   const data = await req.json();
        if(this.localStorageBD !== null){
          let todos = JSON.parse(this.localStorageBD);
          const data = todos.grafico;
          this.barrMes = data[0].barra_mes;
        }
    }
   ,contadorStatus(){
      if(this.cStatus < 40)
      {
        setTimeout(()=>{
          this.cStatus += 1 ;
          this.contadorStatus()
        },25);
      }
   }   
   ,contadorCategoria(){
      if(this.cCategoria < 20)
      {
        setTimeout(()=>{
          this.cCategoria += 1 ;
          this.contadorCategoria()
        },25);
      }
   }
   ,contadorItens(){
      if(this.cItens < 120)
      {
        setTimeout(()=>{
          this.cItens += 1 ;
          this.contadorItens()
        },25);
      }
   }
   ,contadorOculp(){
      if(this.cOculp < 23)
      {
        setTimeout(()=>{
          this.cOculp += 1 ;
          this.contadorOculp()
        },25);
      }
   }

  },
  components: {
    GraficoLinha,
    GraficoBarra,
  },
  created(){
    this.contadorStatus();
    this.contadorCategoria();
    this.contadorItens();
    this.contadorOculp();
  },
  mounted(){
    this.carregarListadeProdutos();
    this.carregarDadosGrafMes();
  }
};
</script>

<style></style>
