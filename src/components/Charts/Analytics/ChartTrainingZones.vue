<template>
    <div class="bg-white p-4 rounded-xl shadow-card">
        <h3 class="font-medium text-gray-900 mb-4">Распределение тренировочных нагрузок по зонам интенсивности (04.04.25 – 23.05.25)</h3>
        <Bar :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const zoneLabels = ["Зона 5 (>189 уд/мин)", "Зона 4 (180–189 уд/мин)", "Зона 3 (153–180 уд/мин)", "Зона 2 (126–153 уд/мин)", "Зона 1 (<126 уд/мин)"];

const timeData = [1.27, 2.22, 17.02, 12.15, 5.68];
const totalTime = timeData.reduce((a, b) => a + b, 0);
const percentData = timeData.map((val) => ((val / totalTime) * 100).toFixed(1));

const chartData = {
    labels: zoneLabels,
    datasets: [
        {
            label: "Время (часы)",
            data: timeData,
            backgroundColor: [
                "#F87171", // red-400
                "#FBBF24", // yellow-400
                "#FACC15", // yellow-300
                "#A3E635", // lime-400
                "#60A5FA", // blue-400
            ],
            borderRadius: 6,
            barThickness: 28,
        },
    ],
};

const chartOptions = {
    responsive: true,
    indexAxis: "y",
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    const value = context.raw;
                    const h = Math.floor(value);
                    const m = Math.floor((value - h) * 60);
                    const s = Math.round(((value - h) * 60 - m) * 60);
                    return `Время: ${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
                },
            },
        },
        datalabels: {
            anchor: "end",
            align: "right",
            formatter: function (value, context) {
                const percent = percentData[context.dataIndex];
                const h = Math.floor(value);
                const m = Math.floor((value - h) * 60);
                const s = Math.round(((value - h) * 60 - m) * 60);
                return `${percent}%\n${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
            },
            color: "#172554",
            font: {
                weight: "400",
            },
        },
    },
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: "Продолжительность (в часах)",
            },
        },
        y: {
            ticks: {
                color: "#172554",
                font: {
                    weight: "400",
                },
            },
        },
    },
};
</script>

<style scoped></style>
