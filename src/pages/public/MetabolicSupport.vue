<script setup>
import { onMounted, ref } from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar } from "vue-chartjs";
import iconFio from "@assets/icons/10.svg";
import iconSpo from "@assets/icons/09.svg";
import iconMed from "@assets/icons/08.svg";
import iconWei from "@assets/icons/07.svg";
import iconHei from "@assets/icons/06.svg";
import iconBody from "@assets/images/body.svg";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const menuItems = ref([
    { label: "Профиль" },
    { label: "Метаболический профиль", class: "font-semibold bg-blue-100" },
    { label: "Молекулярная медицина" },
    { label: "Психофизиология" },
    { label: "Биомеханика" },
]);

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
    },
};

const bodyCompositionData = {
    labels: ["Мышечная масса", "Жировая масса", "Остальное"],
    datasets: [
        {
            data: [45.6, 18.9, 35.5],
            backgroundColor: ["#3B82F6", "#EF4444", "#CBD5E1"],
            hoverOffset: 4,
        },
    ],
};

const skinfoldData = {
    labels: ["на спине под лапаткой", "на трицепсе", "на бицепсе", "на предплечье", "на животе", "на бедре", "на голени", "на груди (у мужчин)"],
    datasets: [
        {
            label: "Толщина (мм)",
            data: [6.5, 14, 5.5, 4.5, 8.0, 10.5, 12, "-"],
            backgroundColor: "#D32F2F",
        },
    ],
};
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Метаболический профиль</h1>
        <!-- Антропометрия -->
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div>
                <h2 class="font-medium text-2xl text-gray-900">Антропометрия</h2>
                <p>Анализ состава тела (метод калиперометрии)</p>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <Icon size="24">
                            <iconFio class="text-primary-500" />
                        </Icon>
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">ФИО:</p>
                        <p class="text-gray-900 font-medium">Иванов Алексей Сергеевич</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <Icon size="24">
                            <iconSpo class="text-primary-500" />
                        </Icon>
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Вид спорта:</p>
                        <p class="text-gray-900 font-medium">Гимнастика</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <Icon size="24">
                            <iconMed class="text-primary-500" />
                        </Icon>
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Дата рождения:</p>
                        <p class="text-gray-900 font-medium">05.05.2005 (20 лет)</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <Icon size="24">
                            <iconHei class="text-primary-500" />
                        </Icon>
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Рост:</p>
                        <p class="text-gray-900 font-medium">163 см</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <Icon size="24">
                            <iconWei class="text-primary-500" />
                        </Icon>
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Вес:</p>
                        <p class="text-gray-900 font-medium">55,4 кг</p>
                    </div>
                </div>
            </div>
            <div class="grid gap-4 grid-cols-2 md:grid-cols-4">
                <div class="bg-white rounded-xl shadow-card px-5 py-3 p-4 border-l-4 border-primary-500">
                    <p class="text-sm text-muted mb-2">Индекс массы тела, ИМТ</p>
                    <div class="flex items-end gap-1">
                        <span class="text-2xl font-medium text-gray-900">20</span>
                        <span class="text-sm text-muted-foreground"></span>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-card px-5 py-3 p-4 border-l-4 border-secondary-500">
                    <p class="text-sm text-muted mb-2">Сумма всех складок</p>
                    <div class="flex items-end gap-1">
                        <span class="text-2xl font-medium text-gray-900">70</span>
                        <span class="text-sm text-muted-foreground">мм</span>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-card px-5 py-3 p-4 border-l-4 border-primary-500">
                    <p class="text-sm text-muted mb-2">Масса мышц</p>
                    <div class="flex items-end gap-1">
                        <span class="text-2xl font-medium text-gray-900">25.3</span>
                        <span class="text-sm text-muted-foreground">кг</span>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-card px-5 py-3 p-4 border-l-4 border-secondary-500">
                    <p class="text-sm text-muted mb-2">Масса жира</p>
                    <div class="flex items-end gap-1">
                        <span class="text-2xl font-medium text-gray-900">4.8</span>
                        <span class="text-sm text-muted-foreground">кг</span>
                    </div>
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
                <div class="bg-white rounded-xl shadow-card px-5 py-3 p-4">
                    <h3 class="font-medium text-gray-900">Кожно-жировые складки</h3>
                    <Bar :data="skinfoldData" :options="chartOptions" />
                </div>
                <div class="bg-white rounded-xl shadow-card px-5 py-3 p-4">
                    <h3 class="font-medium text-gray-900">Обхваты</h3>
                    <div class="flex gap-4 justify-between">
                        <ul class="basis-8/12">
                            <li class="flex items-center gap-2 px-2 py-4 border-b border-gray-200">
                                <span class="w-2 h-2 bg-primary-500 inline-block rounded-full flex-none"></span>
                                <p class="text-muted-color flex-auto">Плечо</p>
                                <p class="font-medium">24,8 см</p>
                            </li>
                            <li class="flex items-center gap-2 px-2 py-4 border-b border-gray-200">
                                <span class="w-2 h-2 bg-[#0729D2] inline-block rounded-full flex-none"></span>
                                <p class="text-muted-color flex-auto">Предплечье</p>
                                <p class="font-medium">22,5 см</p>
                            </li>
                            <li class="flex items-center gap-2 px-2 py-4 border-b border-gray-200">
                                <span class="w-2 h-2 bg-[#D32F2F] inline-block rounded-full flex-none"></span>
                                <p class="text-muted-color flex-auto">Бедро</p>
                                <p class="font-medium">52,5 см</p>
                            </li>
                            <li class="flex items-center gap-2 px-2 py-4 border-b border-gray-200">
                                <span class="w-2 h-2 bg-[#D38F2F] inline-block rounded-full flex-none"></span>
                                <p class="text-muted-color flex-auto">Голень</p>
                                <p class="font-medium">36 см</p>
                            </li>
                        </ul>
                        <iconBody class="flex-none" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Нагрузочное тестирование -->
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div>
                <h2 class="font-medium text-2xl text-gray-900">Нагрузочное тестирование</h2>
                <p>Нагрузочное тестирование с газоанализатором</p>
            </div>
        </div>
        <!-- Диетология -->
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div>
                <h2 class="font-medium text-2xl text-gray-900">Диетология</h2>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
