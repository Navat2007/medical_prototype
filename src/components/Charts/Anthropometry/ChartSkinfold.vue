<template>
    <div class="bg-white rounded-xl shadow-card p-4">
        <h3 class="font-medium text-gray-900">Кожно-жировые складки</h3>
        <Bar :data="chartSkinfoldData" :options="chartSkinfoldOptions" />
    </div>
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartSkinfoldData = {
    labels: ["на спине под лапаткой", "на трицепсе", "на бицепсе", "на предплечье", "на животе", "на бедре", "на голени", "на груди (у мужчин)"],
    datasets: [
        {
            label: "Толщина (мм)",
            data: [6.5, 14, 5.5, 4.5, 8.0, 10.5, 12, "-"],
            backgroundColor: "#D32F2F",
        },
    ],
};
const chartSkinfoldOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
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
