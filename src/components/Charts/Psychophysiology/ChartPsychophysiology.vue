<template>
    <Bar :data="simpleData" :options="chartOptions" />
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartOptions = {
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
                size: 14,
            },
            formatter: (value) => value,
        },
    },
};
const simpleData = {
    labels: ["уровень активации ЦНС", "уровень безошибочности", "уровень быстродействия", "уровень стабильности реакции"],
    datasets: [
        {
            label: "Кол-во набранных баллов",
            data: [3, 5, 3, 5],
            backgroundColor: "#078AD2",
        },
    ],
};
</script>

<style scoped></style>
