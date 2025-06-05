<script setup>
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "vue-chartjs";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const props = defineProps({
    data: {
        type: Array,
        required: true,
        default: () => [8, 9, 9, 8, 8, 8], // Усталость, Качество сна, Время сна, Мышцы, Настроение, Стресс
    },
});

const chartData = {
    labels: ["Усталость", "Качество сна", "Время сна", "Болезненность мышц", "Настроение", "Уверенность в стрессе"],
    datasets: [
        {
            label: "Показатели",
            data: props.data,
            backgroundColor: "rgba(59, 130, 246, 0.2)", // blue-500 / 20%
            borderColor: "rgba(59, 130, 246, 1)", // blue-500
            pointBackgroundColor: "rgba(59, 130, 246, 1)",
            borderWidth: 2,
            fill: true,
            tension: 0.3,
        },
    ],
};

const chartOptions = {
    responsive: true,
    scales: {
        r: {
            angleLines: { color: "#e5e7eb" }, // gray-200
            grid: { color: "#e5e7eb" },
            pointLabels: {
                font: { size: 12 },
                color: "#1f2937", // gray-800
            },
            suggestedMin: 0,
            suggestedMax: 10,
            ticks: {
                stepSize: 2,
                color: "#9ca3af", // gray-400
                backdropColor: "transparent",
                font: { size: 10 },
            },
        },
    },
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.formattedValue}`,
            },
        },
    },
};
</script>

<template>
    <Radar :data="chartData" :options="chartOptions" />
</template>
