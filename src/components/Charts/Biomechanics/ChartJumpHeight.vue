<template>
    <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
        <Bar :data="chartJumpHeighData" :options="chartJumpHeighOptions" />
    </div>
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar, Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartJumpHeighData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
        {
            label: "12.03.2025",
            data: [14, 24, 24, 25, 25, 25, 25, 24, 24, 25],
            backgroundColor: "transparent",
            borderColor: "#D32F2F",
            borderWidth: 1,
            grouped: false,
        },
        {
            label: "25.05.2025",
            data: [14, 20, 24, 24, 25, 25, 25, 24, 24, 25],
            backgroundColor: "#3B82F6",
            grouped: false,
        },
    ],
};
const chartJumpHeighOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
        },
        datalabels: {
            color: "#172554",
            anchor: "end",
            align: "top",
            font: {
                weight: "bold",
                size: 12,
            },
            formatter: (value) => value,
            display: function (context) {
                return context.dataset.label === "Дата";
            },
        },
        tooltip: {
            callbacks: {
                label: (context) => `${context.dataset.label}: ${context.raw} см`,
            },
        },
    },
    scales: {
        y: {
            title: {
                display: true,
                text: "Высота прыжка, см",
            },
            suggestedMax: 30,
            ticks: {
                stepSize: 5,
            },
        },
        x: {
            title: {
                display: true,
                text: "Номер прыжка",
            },
        },
    },
};
</script>

<style scoped></style>
