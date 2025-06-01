<template>
    <Radar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Radar } from "vue-chartjs";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title);

const labels = ["Макс. прыжок (H, см)", "МАМ тест (Wmax., Вт/кг)", "V'O2max, мл/мин/кг", "v V'O2max, км/ч", "V'O2 АнП % от V'O2max", "v АнП, км/ч", "ЖМ, %", "ММ, %", "СЗМР, мс"];

const chartData = {
    labels,
    datasets: [
        {
            label: "переходный период",
            data: [93, 94, 88, 94, 94, 92, 99, 91, 84],
            borderDash: [5, 5],
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "orange",
            pointBackgroundColor: "orange",
        },
        {
            label: "подготовительный период",
            data: [96, 98, 87, 92, 94, 92, 95, 95, 93, 96],
            borderDash: [5, 5],
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#66BB6A",
            pointBackgroundColor: "#66BB6A",
        },
        {
            label: "соревновательный период",
            data: [95, 98, 89, 99, 94, 96, 93, 101, 97, 95],
            backgroundColor: "rgba(0,0,0,0)",
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
            position: "bottom",
        },
        title: {
            display: false,
            text: "Сравнительная радарная диаграмма",
        },
    },
    scales: {
        r: {
            min: 70,
            max: 105,
            ticks: {
                stepSize: 5,
            },
        },
    },
};
</script>
