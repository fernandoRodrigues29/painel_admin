<template>
  <div id="chart">
    <h4>Barras</h4>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
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
            series: [{
                name: "Grafico 1",
                data:[10,43,76]
            },{
                name:'Grafico 2',
                // group:"Grupo 2",
                data:[8,56,23]
            }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'bar',
              stacked: true,
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
              categories: ['Jan', 'Feb', 'Mar'],
            }
          },
        }
    }
}
</script>

<style>

</style>