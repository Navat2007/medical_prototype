<template>
    <Bar :data="chartLoadTestingData" :options="chartLoadTestingOptions" />
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartLoadTestingData = {
    labels: ["Абсолютное", "Относительное"],
    datasets: [
        {
            label: "",
            data: [2.44, 0.39],
            backgroundColor: ["#4CAF50", "#2196F3"],
        },
    ],
};
const chartLoadTestingOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            max: 4.2,
            ticks: {
                callback: function (value) {
                    return value + " мл/мин/кг";
                },
                stepSize: 0.5,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        datalabels: {
            color: "#FFF",
            anchor: "center",
            align: "center",
            font: {
                weight: "bold",
                size: 10,
            },
            formatter: (value) => value,
        },
    },
};
</script>

<style scoped></style>
