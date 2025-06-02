<template>
    <div class="bg-white p-4 rounded-xl shadow-card">
        <h3 class="font-medium text-gray-900 mb-4">Распределение тренировочных нагрузок по километражу за период 04.04.25 – 23.05.25</h3>
        <div class="grid md:grid-cols-2 gap-4 items-center">
            <div>
                <Doughnut :data="chartData" :options="chartOptions" />
            </div>
            <div>
                <h4 class="text-base font-medium text-primary-500 mb-4">Средняя скорость в длительных тренировках</h4>
                <p class="text-2xl font-semibold text-primary-500">9,5 км/ч</p>
                <p class="text-gray-900 font-medium">Средняя скорость в беговых тренировках</p>
                <div class="text-2xl font-semibold text-primary-500">25,9 км/ч</div>
                <p class="text-gray-700 font-medium">Средняя скорость в велотренировках</p>
                <div class="text-2xl font-semibold text-primary-500">1:30 мин/100м</div>
                <p class="text-gray-700 font-medium">Средний темп в плавании</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const chartData = {
    labels: ["Плавание", "Бег", "Велосипед"],
    datasets: [
        {
            label: "Км",
            data: [57.6, 134, 566],
            backgroundColor: [
                "#078ad2", // blue
                "#4B5563", // gray-700
                "#78caf0", // sky-500
            ],
            borderWidth: 4,
            borderColor: "#fff",
            cutout: "60%",
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        datalabels: {
            anchor: "center",
            align: "center",
            color: "#fff",
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const value = context.raw;
                    const percent = ((value / total) * 100).toFixed(1);
                    return `${context.label}: ${value} км (${percent}%)`;
                },
            },
        },
    },
};
</script>

<style scoped></style>
