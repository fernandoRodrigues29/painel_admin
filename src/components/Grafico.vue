<template>
    <div id="chart">
        <h1>modelos de graficos</h1>
        <GraficoBarra></GraficoBarra>
        <GraficoFunil></GraficoFunil>
        <GraficoCirculo></GraficoCirculo>
        <GraficoLinha></GraficoLinha>
    </div>
</template>

<script>
import GraficoBarra from '@/components/GraficoBarra.vue'
import GraficoFunil from '@/components/GraficoFunil.vue'
import GraficoCirculo from '@/components/GraficoSemiCirculo.vue'
import GraficoLinha from '@/components/GraficoLinha.vue'
export default {
    components:{
      GraficoBarra,
      GraficoFunil,
      GraficoCirculo,
      GraficoLinha
    }
}

</script>

<style>

</style>