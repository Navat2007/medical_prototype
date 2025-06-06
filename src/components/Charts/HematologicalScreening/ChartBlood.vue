<template>
    <Bar :data="chartBloodData" :options="chartBloodOptions" />
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartBloodData = {
    labels: ["Лейкоциты", "Сегментоядерные лейкоциты", "Кислая фосфатаза", "Щелочная фосфатаза", "Витамин D"],
    datasets: [
        {
            label: "",
            data: [5, 3, 7, 125, 20],
            backgroundColor: [
                "#f57c00", // оранжевый
                "#f57c00",
                "#ef5350", // красный
                "#ef5350",
                "#fbc02d",
            ],
            borderRadius: 4,
            barThickness: 20,
        },
    ],
};
const chartBloodOptions = {
    indexAxis: "y", // горизонтальный бар-чарт
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
        },
        datalabels: {
            color: "#172554",
            anchor: "end",
            align: "right",
            font: {
                weight: "bold",
                size: 12,
            },
            formatter: (value) => value,
        },
    },
    scales: {
        x: {
            beginAtZero: true,
            ticks: {
                callback: (value) => `${value}`,
            },
        },
        y: {
            ticks: {
                autoSkip: false,
                maxRotation: 0,
            },
        },
    },
};
</script>

<style scoped></style>
