<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import ChartJump from "@/components/Charts/Biomechanics/ChartJump.vue";
import ChartJumpHeight from "@/components/Charts/Biomechanics/ChartJumpHeight.vue";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartSprint from "@/components/Charts/Biomechanics/ChartSprint.vue";
import path_titles from "@assets/images/path_titles.svg";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Биомеханика</h1>
        <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
            <h2 class="col-span-full font-medium text-2xl text-gray-900">Прыжки</h2>
            <div class="col-span-full bg-white p-4 rounded-xl shadow-card">
                <MainInfo />
            </div>
            <ChartJump />
            <ChartJumpHeight />
            <ChartSprint />
            <div class="bg-white p-4 rounded-xl shadow-card gap-4">
                <h3 class="font-medium text-gray-900 mb-6">Фазы стартового ускорения</h3>
                <path_titles class="w-full h-auto" />
            </div>
        </div>
    </main>
</template>

<style scoped></style>
