<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import ChartJump from "@/components/Charts/Biomechanics/ChartJump.vue";
import ChartJumpHeight from "@/components/Charts/Biomechanics/ChartJumpHeight.vue";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ChartSprint from "@/components/Charts/Biomechanics/ChartSprint.vue";
import iconFio from "@assets/icons/10.svg";
import iconSpo from "@assets/icons/09.svg";
import iconMed from "@assets/icons/08.svg";
import iconHei from "@assets/icons/06.svg";
import path_titles from "@assets/images/path_titles.svg";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Биомеханика</h1>
        <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
            <h2 class="col-span-full font-medium text-2xl text-gray-900">Прыжки</h2>
            <!-- Информация -->
            <div class="col-span-full bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <iconFio class="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">ФИО:</p>
                        <p class="text-gray-900 font-medium">Иванов Алексей Сергеевич</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <iconSpo class="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Вид спорта:</p>
                        <p class="text-gray-900 font-medium">Лёгкая атлетика</p>
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Разряд:</p>
                        <p class="text-gray-900 font-medium">МС</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <iconMed class="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Дата рождения:</p>
                        <p class="text-gray-900 font-medium">05.05.2005 (20 лет)</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <iconHei class="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Рост:</p>
                        <p class="text-gray-900 font-medium">163 см</p>
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Вес:</p>
                        <p class="text-gray-900 font-medium">55,4 кг</p>
                    </div>
                </div>
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
