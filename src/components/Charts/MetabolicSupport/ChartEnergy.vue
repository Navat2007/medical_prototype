<template>
    <Bar :data="chartEnergyData" :options="chartEnergyOptions" />
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartEnergyData = {
    labels: ["Энергетическое обеспечение (ккал)"],
    datasets: [
        {
            label: "Липиды",
            data: [1077], // Пример данных для липидов
            backgroundColor: "#d32f2f", // Красный цвет для липидов
            stack: "stack1",
        },
        {
            label: "Углеводы",
            data: [895], // Пример данных для углеводов
            backgroundColor: "#66bb6a", // Синий цвет для углеводов
            stack: "stack1",
        },
    ],
};
const chartEnergyOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
        },
        datalabels: {
            color: "#FFF",
            anchor: "center",
            align: "center",
            font: {
                weight: "bold",
                size: 12,
            },
            formatter: (value) => value,
        },
    },
};
</script>

<style scoped></style>
