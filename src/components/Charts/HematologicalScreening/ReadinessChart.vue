<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps({
    value: Number,
    color: String,
    label: String,
});

const chartData = {
    labels: [""],
    datasets: [
        {
            data: [props.value, 10 - props.value],
            backgroundColor: [props.color, "#e5e7eb"], // Tailwind: gray-200
            borderWidth: 0,
        },
    ],
};

const chartOptions = {
    cutout: "80%",
    plugins: {
        tooltip: { enabled: false },
        legend: { display: false },
        datalabels: {
            display: false,
        },
    },
};
</script>

<template>
    <div class="flex flex-col items-center gap-1">
        <div class="relative w-full">
            <Doughnut :data="chartData" :options="chartOptions" />
            <div class="absolute inset-0 flex items-center justify-center text-xl font-medium text-gray-900">
                {{ value }}
            </div>
        </div>
        <div class="text-sm text-center text-gray-600">{{ label }}</div>
    </div>
</template>
