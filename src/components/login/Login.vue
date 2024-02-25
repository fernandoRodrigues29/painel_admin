<template>
      <div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <!-- Register -->
          <div class="card">
            <div class="card-body">
              <!-- Logo -->
              <div class="app-brand justify-content-center">
                <a href="index.html" class="app-brand-link gap-2">
                  <span class="app-brand-logo demo">
                    <!-- coleque um svg aqui ! -->
                  </span>
                  <span class="app-brand-text demo text-body fw-bolder">Area Administrativa</span>
                  <p>
                  </p>
                </a>
              </div>
              <!-- /Logo -->
              <h4 class="mb-2">Login</h4>
              <p class="mb-4"></p>
              <p>
                {{ usuario }}
                {{ senha }}
              </p>
              <form id="formAuthentication" class="mb-3"  method="POST">
                <div class="mb-3">
                  <label for="email" class="form-label">Email or Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    value="usuario@teste.com"
                    v-model="usuario"
                    autofocus
                  />
                </div>
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Password</label>
                    <a href="auth-forgot-password-basic.html">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div class="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                      value="123"
                      v-model="senha"
                    />
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember-me" />
                    <label class="form-check-label" for="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-grid w-100" type="submit" @click.prevent="navegar()">Acesso</button>
                </div>
              </form>

              <p class="text-center d-none">
                <span>New on our platform?</span>
                <a href="auth-register-basic.html">
                  <span>Create an account</span>
                </a>
              </p>
            </div>
          </div>
          <!-- /Register -->
        </div>
      </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
//partes

import "@/assets/assets/vendor/fonts/boxicons.css";
import "@/assets/assets/vendor/css/core.css";
import "@/assets/assets/vendor/css/theme-default.css";
import "@/assets/assets/css/demo.css";
import "@/assets/assets/vendor/css/pages/page-auth.css";
import "@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";

import "@/assets/assets/vendor/libs/jquery/jquery.js";
import "@/assets/assets/vendor/libs/popper/popper.js";
import "@/assets/assets/vendor/js/bootstrap.js";
import "@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js";
import "@/assets/assets/vendor/js/menu.js";
import "@/assets/assets/vendor/libs/apex-charts/apexcharts.js";

//importar mixin
import mixinBD from '@/components/banco_dados/basededados.js'

export default {
    name:'Principal',
    mixins:[mixinBD],
    data(){
      return{
       url:'http://localhost/APICardapioLaravel/public/api/login',
       usuario:'usuario@email.com',
       senha:'123'
      }
    },
    methods:{
        async navegar(){
            // this.$router.push('/');
            const data ={
              usuario:this.usuario,
              senha:this.senha
            };
            // this.comunicacaoComApi(data);
          //  this.teste();
          this.login(data);
        },
        login(data){
                      const opcoes ={
                        method:"POST",
                        headers:{ "Content-type":"application/json"},
                        body:JSON.stringify(data)
                      };
                      fetch(this.url,opcoes)
                      .then(response=>response.json())
                      .then((data)=>{
                          localStorage.setItem('chave_acesso_admEstoque',JSON.stringify(data.access_token));
                          this.$router.push('/');
                      });
        },
        async comunicacaoComApi(data){
              const dataJsonFormat = JSON.stringify(data); 
                    const req = await fetch(this.url,{
                        method:"POST",
                        headers:{'Content-Type':'application/json'},
                        body:dataJsonFormat
                      });
                      console.log('retorno:',req);
        },
        teste(){
                      const opcoes ={
                        method:"POST",
                        headers:{ "Content-type":"application/json"},
                        body:JSON.stringify({produto:'vindo do frontend'})
                      };
                      fetch("http://localhost/APICardapioLaravel/public/api/testando",opcoes)
                      .then(response=>response.json())
                      .then((data)=>{
                        console.log('retorno dados:',data);
                      });
        }
    },
    components:{
      
    },
}
</script>

<style>

</style>