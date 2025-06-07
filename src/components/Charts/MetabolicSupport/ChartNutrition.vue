<template>
    <div class="relative w-full">
        <Doughnut :data="chartNutritionData" :options="chartNutritionOptions" />
        <div class="absolute inset-0 flex flex-col items-center justify-center mb-10">
            <p class="text-xl font-medium text-gray-900">1156</p>
            <span class="ml-1 text-sm text-gray-600">ккал</span>
        </div>
    </div>
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartNutritionData = {
    labels: ["Белки 13%", "Жиры 32%", "Углеводы 54.7%"],
    datasets: [
        {
            data: [13, 32, 54.7],
            backgroundColor: ["#3b4cca", "#f45b69", "#4caf50"],
            borderWidth: 0,
            cutout: "70%",
        },
    ],
};
const chartNutritionOptions = {
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
