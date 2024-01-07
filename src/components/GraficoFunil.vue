<template>
    <div id="chart">
      <h4>Barras funil</h4>
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
                  name: "Grafico funil",
                  data:[10,43,76,12,45,24]
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
              plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                    barHeight: '80%',
                    isFunnel: true,
                },
              },
              dataLabels: {
                enabled: true,
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
                },
                dropShadow: {
                    enabled: true,
                },
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Product Trends by Month',
                align: 'middle'
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar','abr','mai','jun'],
              }
            },
          }
      }
  }
  </script>
  
  <style>
  
  </style>