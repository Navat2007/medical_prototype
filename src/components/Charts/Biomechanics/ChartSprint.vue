<template>
    <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
        <h3 class="font-medium text-gray-900 mb-6">Скорость в тесте "спринт" – 30м</h3>
        <Line :data="speedChartData" :options="chartOptions" />
        <h3 class="font-medium text-gray-900 mb-6">Ускорение в тесте "спринт" – 30м</h3>
        <Line :data="accelChartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

const labels = ["0м", "10м", "20м", "30м"];

const speedChartData = {
    labels,
    datasets: [
        {
            label: "фев-25",
            data: [0, 5.2, 7.3, 7.8],
            borderColor: "#60A5FA",
            backgroundColor: "#BFDBFE",
            tension: 0.3,
        },
        {
            label: "апр-25",
            data: [0, 5.6, 7.4, 7.9],
            borderColor: "#2563EB",
            backgroundColor: "#DBEAFE",
            tension: 0.3,
        },
    ],
};

const accelChartData = {
    labels,
    datasets: [
        {
            label: "фев-25",
            data: [0, 2.9, 1.5, 0.5],
            borderColor: "#4ADE80",
            backgroundColor: "#BBF7D0",
            tension: 0.3,
        },
        {
            label: "апр-25",
            data: [0, 2.7, 1.6, 0.6],
            borderColor: "#16A34A",
            backgroundColor: "#DCFCE7",
            tension: 0.3,
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
        datalabels: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};
</script>

<style scoped></style>
