<template>
  <Radar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
)

const labels = [
  "Макс. прыжок", "МАМ тест", "VO2max", "v VO2max", "VO2 АнП",
  "v АнП, км/ч", "ЖМ, %", "ММ, %", "СЗМР, мс", "СРП, баллы"
]

const chartData = {
  labels,
  datasets: [
    {
      label: 'переходный период',
      data: [93, 94, 88, 94, 94, 92, 99, 91, 84, 93],
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      borderColor: 'orange',
      pointBackgroundColor: 'orange'
    },
    {
      label: 'подготовительный период',
      data: [96, 98, 87, 92, 94, 92, 95, 95, 93, 96],
      backgroundColor: 'rgba(30, 144, 255, 0.2)',
      borderColor: 'dodgerblue',
      pointBackgroundColor: 'dodgerblue'
    },
    {
      label: 'соревновательный период',
      data: [95, 98, 89, 99, 94, 96, 93, 101, 97, 95],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'crimson',
      pointBackgroundColor: 'crimson'
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: false,
      text: 'Сравнительная радарная диаграмма'
    }
  },
  scales: {
    r: {
      min: 70,
      max: 105,
      ticks: {
        stepSize: 5
      }
    }
  }
}
</script>
