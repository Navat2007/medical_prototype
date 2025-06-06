<script setup>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const labels = [
    "IL19 rs1800872 G_T",
    "IL18RAP rs1420100 A_A",
    "FGF3 rs1893047 G_A",
    "FGF10 rs1448037 C_T",
    "MMP9 rs17576 G_G",
    "COL3A1 rs1800255 G_A",
    "GDF5 rs143383 A_A",
    "FOXP3 rs3761549 A_G",
    "COL11A1 rs1676486 G_A",
    "MYLK rs2700352 A_G",
    "FGF3 rs12574452 G_A",
    "IL10 rs4980700 G_A",
    "IGF2 rs4244808 G_G",
    "IGF2–AS rs2908007 G_G",
    "MRPL43 rs4919510 G_C",
    "MMP1 rs1570360 G_A",
    "SEMA4G rs4233949 G_G",
    "CCL2 rs2857656 G_G",
    "BGN rs12164999 G_T",
    "WTAPP1 rs1144393 C_T",
    "MIR608 rs4919510 G_C",
    "MMP9 rs17576 G_G",
    "EMILIN1 rs2289360 C_G",
    "MMP3 rs650108 A_G",
    "IL1A rs1800587 A_G",
].reverse();

const values = [0.7, 0.6, 0.5, 0.48, 0.45, 0.43, 0.38, 0.35, 0.32, 0.2, 0.1, 0.05, 0.03, 0.01, -0.01, -0.05, -0.08, -0.1, -0.13, -0.15, -0.17, -0.2, -0.22, -0.25, -0.3];

const chartData = {
    labels,
    datasets: [
        {
            label: "Коэффициенты",
            data: values,
            backgroundColor: "rgba(59,130,246,0.7)", // blue-500
            borderRadius: 4,
            barThickness: 12,
        },
    ],
};

const chartOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: (ctx) => `${ctx.dataset.label}: ${ctx.formattedValue}`,
            },
        },
        datalabels: {
            display: false,
        },
    },
    scales: {
        x: {
            title: { display: true, text: "Коэффициенты" },
            ticks: { beginAtZero: true },
        },
        y: {
            title: { display: true, text: "Переменная" },
        },
    },
};
</script>

<template>
    <div>
        <h3 class="font-medium text-gray-900 mb-2">Полигенный риск предрасположенности к травмам</h3>
        <Bar :data="chartData" :options="chartOptions" />
    </div>
</template>
