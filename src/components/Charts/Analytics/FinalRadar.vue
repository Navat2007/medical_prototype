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
  "Мышечная масса",
  "Макс. потребление кислорода",
  "Аэробный порог",
  "Прыжок",
  "ЗМР",
  "ПЗМР"
]

const chartData = {
  labels,
  datasets: [
    {
      label: 'Ряд 1',
      data: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: '#3B82F6',
      pointBackgroundColor: '#3B82F6'
    },
    {
      label: 'Ряд 2',
      data: [1.0, 0.73, 1.03, 0.96, 1.03, 1.03],
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: '#F59E0B',
      pointBackgroundColor: '#F59E0B'
    },
    {
      label: 'Ряд 3',
      data: [1.04, 0.82, 0.83, 1.13, 0.97, 0.99],
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: '#6B7280',
      pointBackgroundColor: '#6B7280'
    },
    {
      label: 'Ряд 4',
      data: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: '#FACC15',
      pointBackgroundColor: '#FACC15'
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
      text: 'Заголовок диаграммы'
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
