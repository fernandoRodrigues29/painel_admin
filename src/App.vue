<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>

    <!-- <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          
          <Logo></Logo>
          
          <div class="menu-inner-shadow"></div>
          
          <Menu></Menu>
          
        </aside>
        <div class="layout-page">
          <Pesquisa></Pesquisa>
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              
              <router-view/>
              
            </div>
         </div>               
      </div>
    </div>
</div> -->
  </div>
</template>

<script>
// //template
//   import Menu from '@/components/principal/Menu.vue';
//   import Logo from '@/components/principal/Logo.vue';
//   import Pesquisa from '@/components/principal/Pesquisa.vue';
// //css e js
//   import "@/assets/assets/vendor/fonts/boxicons.css";
//   import "@/assets/assets/vendor/css/core.css";
//   import "@/assets/assets/vendor/css/theme-default.css";
//   import "@/assets/assets/css/demo.css";
//   import "@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";

//   import "@/assets/assets/vendor/libs/jquery/jquery.js";
//   import "@/assets/assets/vendor/libs/popper/popper.js";
//   import "@/assets/assets/vendor/js/bootstrap.js";
//   import "@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js";
//   import "@/assets/assets/vendor/js/menu.js";
//   import "@/assets/assets/vendor/libs/apex-charts/apexcharts.js";

    export default {
      name:'Inicial',
      components:{
        // Menu,
        // Logo,
        // Pesquisa
      },
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

