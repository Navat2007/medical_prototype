<script setup>
import RadarComparison from "@components/Charts/Analytics/RadarComparison.vue";
import AthleteRadar from "@components/Charts/Analytics/AthleteRadar.vue";
import FinalRadar from "@components/Charts/Analytics/FinalRadar.vue";

</script>

<template>
  <main class="flex-1 flex flex-col gap-5">
    <h1 class="text-3xl font-medium text-primary-500">Аналитика</h1>
    <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
      <RadarComparison />
      <AthleteRadar />
      <FinalRadar />
    </div>
  </main>
</template>