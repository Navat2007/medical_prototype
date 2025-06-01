<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar, Doughnut } from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
    },
};

const jumpData = {
    labels: ["Из приседа, см", "С подседом, см", "Максимальный, см"],
    datasets: [
        {
            label: "высота, см",
            data: [34, 40, 47],
            backgroundColor: "#078AD2",
        },
    ],
};

const jumpHeighData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
        {
            labels: "Номер прыжка",
            dataset: [
                {
                    label: "Дата",
                    data: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
                    backgroundColor: "#078AD2",
                },
                {
                    label: "Было",
                    data: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
                    backgroundColor: "#D32F2F",
                },
            ],
        },
    ],
};
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Биомеханика</h1>
        <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h3 class="font-medium text-gray-900">Прыжки</h3>
                <Bar :data="jumpData" :options="chartOptions" />
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h3 class="font-medium text-gray-900">Высота прыжка, см</h3>
                <Bar :data="jumpHeighData" :options="chartOptions" />
            </div>
        </div>
    </main>
</template>

<style scoped></style>
