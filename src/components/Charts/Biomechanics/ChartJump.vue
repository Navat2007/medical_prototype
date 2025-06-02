<template>
    <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
        <Bar :data="chartJumpData" :options="chartJumpOptions" />
    </div>
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar, Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartJumpData = {
    labels: ["Из приседа, см", "С подседом, см", "Максимальный, см"],
    datasets: [
        {
            label: "высота, см",
            data: [34, 40, 47],
            backgroundColor: ["#172554", "#078AD2", "#D32F2F"],
        },
    ],
};
const chartJumpOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
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
    },
};
</script>

<style scoped></style>
