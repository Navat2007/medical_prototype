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

const labels = ["ММ", "МПК", "МАМ", "ПРЫЖКИ", "СЗМР", "ПЗМР"]

const chartData = {
  labels,
  datasets: [
    {
      label: 'МОДЕЛЬ',
      data: [1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
      borderDash: [5, 5],
      borderColor: '#888',
      backgroundColor: 'rgba(136,136,136,0.05)',
      pointBackgroundColor: '#888'
    },
    {
      label: 'апр-25',
      data: [1.03, 1.03, 0.96, 1.03, 1.03, 0.73],
      borderColor: '#60A5FA',
      backgroundColor: 'rgba(96,165,250,0.2)',
      pointBackgroundColor: '#60A5FA'
    },
    {
      label: 'май-25',
      data: [0.99, 0.97, 1.13, 0.83, 0.97, 0.82],
      borderColor: '#2563EB',
      backgroundColor: 'rgba(37,99,235,0.2)',
      pointBackgroundColor: '#2563EB'
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
      display: true,
      text: 'Спортсмен'
    }
  },
  scales: {
    r: {
      min: 0,
      max: 1.2,
      ticks: {
        stepSize: 0.2
      },
      pointLabels: {
        font: {
          size: 12
        }
      }
    }
  }
}
</script>
