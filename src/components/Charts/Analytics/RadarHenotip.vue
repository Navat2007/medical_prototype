<template>
    <Radar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Radar } from "vue-chartjs";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title);

const labels = ["Выносливость", "Сила", "Структура", "Питание", "Травмы", "Психология"];

const chartData = {
    labels,
    datasets: [
        {
            data: [75, 60, 65, 50, 40, 90],
            backgroundColor: "rgba(7, 138, 210, 0.2)",
            borderColor: "#078AD2",
            pointBackgroundColor: "#078AD2",
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        datalabels: { display: false },
        legend: {
            display: false,
        },
        title: {
            display: false,
            text: "Сравнительная радарная диаграмма",
        },
    },
    scales: {
        r: {
            min: 0,
            max: 100,
            ticks: {
                stepSize: 25,
            },
        },
    },
};
</script>
