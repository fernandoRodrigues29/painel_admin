<template>
    <div id="chart">
      <h4>Barras semicirculo</h4>
      <apexchart type="donut" height="350" :options="options" :series="series"></apexchart>
    </div>
  </template>
  
  <script>
  import VueApexCharts from 'vue-apexcharts'
  export default {
      components:{
          apexchart: VueApexCharts,
      },
      data(){
          return{
              options:{},
              series:[44,23,12,54,42]
          }
      }
  }
  </script>
  
  <style>
  
  </style>