<template>
    <Radar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Radar } from "vue-chartjs";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title);

const labels = ["ММ", "МПК", "МАМ", "ПРЫЖКИ", "СЗМР", "ПЗМР"];

const chartData = {
    labels,
    datasets: [
        {
            label: "МОДЕЛЬ",
            data: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
            borderDash: [5, 5],
            borderColor: "#ccc",
            backgroundColor: "rgba(0,0,0,0)",
            pointBackgroundColor: "#ccc",
        },
        {
            label: "апр-25",
            data: [1.03, 1.03, 0.96, 1.03, 1.03, 0.73],
            borderColor: "#ace1ff",
            backgroundColor: "rgba(0,0,0,0)",
            pointBackgroundColor: "#ace1ff",
        },
        {
            label: "май-25",
            data: [0.99, 0.97, 1.13, 0.83, 0.97, 0.82],
            borderColor: "#078AD2",
            backgroundColor: "rgba(0,0,0,0)",
            pointBackgroundColor: "#078AD2",
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
        title: {
            display: true,
            text: "Спортсмен",
        },
    },
    scales: {
        r: {
            min: 0,
            max: 1.2,
            ticks: {
                stepSize: 0.2,
            },
            pointLabels: {
                font: {
                    size: 12,
                },
            },
        },
    },
};
</script>
