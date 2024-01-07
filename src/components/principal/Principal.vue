<template>
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <!-- logo -->
          <Logo></Logo>
          <!-- logo -->
          <div class="menu-inner-shadow"></div>
          <!-- menu lateral -->
          <Menu></Menu>
          <!-- menu lateral -->
        </aside>
        <div class="layout-page">
          <Pesquisa></Pesquisa>
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <!-- principal -->
              <router-view/>
              <!-- principal -->
            </div>
         </div>               
      </div>
    </div>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
//partes
//menu
import Menu from '@/components/principal/Menu.vue';
import Logo from '@/components/principal/Logo.vue';
import Pesquisa from '@/components/principal/Pesquisa.vue';
//partes


//graficos
import GraficoBarra from '@/components/GraficoBarra.vue'
import GraficoFunil from '@/components/GraficoFunil.vue'
import GraficoCirculo from '@/components/GraficoSemiCirculo.vue'
import GraficoLinha from '@/components/GraficoLinha.vue'

import "@/assets/assets/vendor/fonts/boxicons.css";
import "@/assets/assets/vendor/css/core.css";
import "@/assets/assets/vendor/css/theme-default.css";
import "@/assets/assets/css/demo.css";
import "@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";

import "@/assets/assets/vendor/libs/jquery/jquery.js";
import "@/assets/assets/vendor/libs/popper/popper.js";
import "@/assets/assets/vendor/js/bootstrap.js";
import "@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js";
import "@/assets/assets/vendor/js/menu.js";
import "@/assets/assets/vendor/libs/apex-charts/apexcharts.js";



export default {
    name:'Principal',
    data(){
      return{
        series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          },
      }
    },
    components:{
      //   apexchart: VueApexCharts,
      //   GraficoBarra,
      // GraficoFunil,
      // GraficoCirculo,
      // GraficoLinha,
      Menu,
      Logo,
      Pesquisa
    },
}
</script>

<style>

</style>