<template>
  <div class="w-full text-center">
    <p class="text-sm font-medium mb-6 text-gray-900">
      Среднее время реакции (СВР), мс
    </p>

    <div class="relative h-4 rounded-full bg-gradient-to-l from-blue-400 via-green-400 via-yellow-400 to-red-500">
      <!-- Индикатор -->
      <div
          class="absolute -top-6 text-sm font-semibold text-gray-900"
          :style="{
          left: `calc(${positionPercent}% - 12px)`
        }"
      >
        {{ value }}
      </div>

      <!-- Маркер-точка -->
      <div
          class="absolute w-3 h-3 rounded-full bg-white"
          :style="{
          top: '50%',
          transform: 'translateY(-50%)',
          left: `calc(${positionPercent}% - 6px)`
        }"
      ></div>
    </div>

    <!-- Подписи шкалы -->
    <div class="flex justify-between text-xs text-gray-600 mt-2">
      <span v-for="step in steps" :key="step">{{ step }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  steps: {
    type: Array,
    required: true,
    default: []
  },
  value: {
    type: Number,
    required: true,
    default: 0
  }
});
const max = props.steps[0];

// позиция от 0 до 100% (учитываем обратную ось)
const positionPercent = ((max - props.value) / max) * 100
</script>
