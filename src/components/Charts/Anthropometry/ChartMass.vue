<template>
    <Doughnut :data="chartMassData" :options="chartMassOptions" />
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const chartMassData = {
    labels: ["Масса мышц, в %", "Масса жира, в %"],
    datasets: [
        {
            data: [45.6, 18.9],
            backgroundColor: ["#078ad2", "#d32f2f"],
            borderWidth: 0,
            cutout: "50%",
        },
    ],
};
const chartMassOptions = {
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
                weight: "500",
                size: 12,
            },
            formatter: (value) => value,
        },
    },
};
</script>

<style scoped></style>
