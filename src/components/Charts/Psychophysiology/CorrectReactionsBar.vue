<template>
  <div class="w-full text-center">
    <p class="text-sm font-medium text-gray-700 mb-2">
      Число правильных реакций, шт.
    </p>

    <!-- Контейнер полосы -->
    <div class="relative h-6 bg-white rounded-full overflow-hidden border border-primary-300">
      <!-- Штриховка -->
      <div
          class="absolute top-0 right-0 h-full w-[5%] bg-[repeating-linear-gradient(45deg,_#E1F5FE_0px,_#E1F5FE_2px,_transparent_2px,_transparent_4px)]"
          :style="{ left: `${(value / max) * 100}%` }"
      ></div>

      <!-- Синяя заливка -->
      <div
          class="h-full bg-primary-500 text-white text-sm font-semibold text-right pr-2 flex items-center justify-end"
          :style="{ width: `${(value / max) * 100}%` }"
      >
        {{ value }}
      </div>
    </div>

    <!-- Шкала -->
    <div class="flex justify-between text-xs text-gray-500 mt-1">
      <span v-for="step in steps" :key="step">{{ step }}</span>
    </div>
  </div>
</template>

<script setup>
const value = 19
const max = 20
const steps = [0, 5, 10, 15, 20]
</script>
