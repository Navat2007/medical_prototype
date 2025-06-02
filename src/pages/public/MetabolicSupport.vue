<script setup>
import { onMounted, ref } from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar, Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import VueSpeedometer from "vue-speedometer";
import iconFio from "@assets/icons/10.svg";
import iconSpo from "@assets/icons/09.svg";
import iconMed from "@assets/icons/08.svg";
import iconHei from "@assets/icons/06.svg";
import iconBody from "@assets/images/body.svg";
import iconTime from "@assets/icons/11.svg";
import iconFood from "@assets/icons/12.svg";
import iconPos from "@assets/icons/13.svg";
import iconAten from "@assets/icons/14.svg";
import iconMosh from "@assets/icons/15.svg";
import iconMet from "@assets/icons/04.svg";

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
        datalabels: {
            color: "#172554",
            anchor: "end",
            align: "top",
            font: {
                weight: "bold",
                size: 12,
            },
            formatter: (value) => value,
        },
    },
};

const chartSkinfoldData = {
    labels: ["на спине под лапаткой", "на трицепсе", "на бицепсе", "на предплечье", "на животе", "на бедре", "на голени", "на груди (у мужчин)"],
    datasets: [
        {
            label: "Толщина (мм)",
            data: [6.5, 14, 5.5, 4.5, 8.0, 10.5, 12, "-"],
            backgroundColor: "#D32F2F",
        },
    ],
};
const chartSkinfoldOptions = {
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
                weight: "bold",
                size: 10,
            },
            formatter: (value) => value,
        },
    },
};

const chartMassData = {
    labels: ["Масса мышц, в %", "Масса жира, в %"],
    datasets: [
        {
            data: [25.3, 4.8],
            backgroundColor: ["#078ad2", "#d32f2f"],
            borderWidth: 0,
            cutout: "50%",
        },
    ],
};
const chartMassOptions = {
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
                weight: "bold",
                size: 10,
            },
            formatter: (value) => value,
        },
    },
};

const chartNutritionData = {
    labels: ["Белки", "Жиры", "Углеводы"],
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
                weight: "bold",
                size: 10,
            },
            formatter: (value) => value,
            display: false,
        },
    },
};

const chartLoadTestingData = {
    labels: ["Абсолютное", "Относительное"],
    datasets: [
        {
            label: "",
            data: [2.44, 0.39],
            backgroundColor: ["#4CAF50", "#2196F3"],
        },
    ],
};
const chartLoadTestingOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            max: 4.2,
            ticks: {
                callback: function (value) {
                    return value + " мл/мин/кг";
                },
                stepSize: 0.5,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        datalabels: {
            color: "#FFF",
            anchor: "center",
            align: "center",
            font: {
                weight: "bold",
                size: 10,
            },
            formatter: (value) => value,
        },
    },
};

const chartBloodData = {
    labels: ["Лейкоциты", "Сегментоядерные лейкоциты", "Кислая фосфатаза", "Щелочная фосфатаза", "Витамин D"],
    datasets: [
        {
            label: "",
            data: [5, 3, 7, 125, 20],
            backgroundColor: [
                "#f57c00", // оранжевый
                "#f57c00",
                "#ef5350", // красный
                "#ef5350",
                "#fbc02d",
            ],
            borderRadius: 4,
            barThickness: 20,
        },
    ],
};
const chartBloodOptions = {
    indexAxis: "y", // горизонтальный бар-чарт
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
        },
        datalabels: {
            color: "#172554",
            anchor: "end",
            align: "right",
            font: {
                weight: "bold",
                size: 12,
            },
            formatter: (value) => value,
        },
    },
    scales: {
        x: {
            beginAtZero: true,
            ticks: {
                callback: (value) => `${value}`,
            },
        },
        y: {
            ticks: {
                autoSkip: false,
                maxRotation: 0,
            },
        },
    },
};

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

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Метаболический профиль</h1>
        <!-- Антропометрия -->
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div>
                <h2 class="font-medium text-2xl text-gray-900">Антропометрия</h2>
                <p>Анализ состава тела (метод калиперометрии)</p>
            </div>
            <div class="grid md:grid-cols-5 gap-4">
                <!-- Информация -->
                <div class="col-span-4 bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
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
                <div class="col-span-4 grid gap-4 grid-cols-2 md:grid-cols-4">
                    <div class="bg-white rounded-xl shadow-card p-4 border-l-4 border-primary-500">
                        <p class="text-sm text-muted mb-2">Индекс массы тела, ИМТ</p>
                        <div class="flex items-end gap-1">
                            <span class="text-2xl font-medium text-gray-900">20</span>
                            <span class="text-sm text-muted-foreground"></span>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-card p-4 border-l-4 border-secondary-500">
                        <p class="text-sm text-muted mb-2">Сумма всех складок</p>
                        <div class="flex items-end gap-1">
                            <span class="text-2xl font-medium text-gray-900">70</span>
                            <span class="text-sm text-muted-foreground">мм</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-card p-4 border-l-4 border-primary-500">
                        <p class="text-sm text-muted mb-2">Масса мышц</p>
                        <div class="flex items-end gap-1">
                            <span class="text-2xl font-medium text-gray-900">25.3</span>
                            <span class="text-sm text-muted-foreground">кг</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-card p-4 border-l-4 border-secondary-500">
                        <p class="text-sm text-muted mb-2">Масса жира</p>
                        <div class="flex items-end gap-1">
                            <span class="text-2xl font-medium text-gray-900">4.8</span>
                            <span class="text-sm text-muted-foreground">кг</span>
                        </div>
                    </div>
                </div>
                <!-- График процента -->
                <div class="row-start-1 row-span-2 col-start-5 col-span-2 bg-white rounded-xl shadow-card p-4 flex flex-col items-center">
                    <Doughnut :data="chartMassData" :options="chartMassOptions" />
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
                <div class="bg-white rounded-xl shadow-card p-4">
                    <h3 class="font-medium text-gray-900">Кожно-жировые складки</h3>
                    <Bar :data="chartSkinfoldData" :options="chartSkinfoldOptions" />
                </div>
                <div class="bg-white rounded-xl shadow-card p-4">
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
            <!-- Протокол нагрузки -->
            <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white rounded-xl shadow-card p-4">
                    <h3 class="font-medium text-gray-900">Протокол нагрузки</h3>
                    <ul class="">
                        <li class="flex items-center gap-2 py-2 border-b border-gray-200">
                            <p class="text-muted-color flex-auto">Нагрузочное устройство</p>
                            <p class="font-medium">велоэргометр</p>
                        </li>
                        <li class="flex items-center gap-2 py-2 border-b border-gray-200">
                            <p class="text-muted-color flex-auto">Вид протокола</p>
                            <p class="font-medium">ступенчатый</p>
                        </li>
                        <li class="flex items-center gap-2 py-2 border-b border-gray-200">
                            <p class="text-muted-color flex-auto">Начальная мощность</p>
                            <p class="font-medium">70 Вт</p>
                        </li>
                        <li class="flex items-center gap-2 py-2 border-b border-gray-200">
                            <p class="text-muted-color flex-auto">Прирост мощности</p>
                            <p class="font-medium">10 Вт</p>
                        </li>
                        <li class="flex items-center gap-2 py-2 border-b border-gray-200">
                            <p class="text-muted-color flex-auto">Продолжительность ступени</p>
                            <p class="font-medium">1 мин</p>
                        </li>
                    </ul>
                </div>
                <!-- Максимальные показатели -->
                <div class="col-span-2 bg-white rounded-xl shadow-card p-4">
                    <div class="grid gap-4 md:grid-cols-2 mb-4">
                        <div class="flex flex-col gap-4">
                            <h3 class="font-medium text-gray-900">Максимальные показатели</h3>
                            <ul class="grid md:grid-cols-2">
                                <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                                    <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                        <iconMosh class="w-4 h-4 text-muted" />
                                        Мощность
                                    </p>
                                    <p class="font-medium text-lg text-gray-900">180 Вт</p>
                                </li>
                                <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                                    <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                        <iconMet class="w-4 h-4 text-muted" />
                                        ЧСС
                                    </p>
                                    <p class="font-medium text-lg text-gray-900">178 уд/мин</p>
                                </li>
                            </ul>
                            <h3 class="font-medium text-gray-900">Потребление O₂</h3>
                            <ul class="grid md:grid-cols-2">
                                <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                                    <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">Абсолютное</p>
                                    <p class="font-medium text-lg text-gray-900">2.44 л/мин</p>
                                </li>
                                <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                                    <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">Относительное</p>
                                    <p class="font-medium text-lg text-gray-900">39 мл/мин/кг</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Bar :data="chartLoadTestingData" :options="chartLoadTestingOptions" />
                        </div>
                    </div>
                    <div class="flex gap-1 items-start p-4 rounded-lg bg-primary-100">
                        <iconAten class="w-5 h-5 text-muted text-primary-500" />
                        <p class="text-sm text-muted-color">Относительное потребление O₂ (мл/мин/кг) позволяет сравнивать аэробную мощность спортсменов разного веса.</p>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
                <!-- Показатели АнП -->
                <div class="flex flex-col gap-4 bg-white rounded-xl shadow-card p-4">
                    <h3 class="font-medium text-gray-900">Показатели АнП</h3>
                    <ul class="grid md:grid-cols-2">
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                <iconMosh class="w-4 h-4 text-muted" />
                                Мощность
                            </p>
                            <p class="font-medium text-lg text-secondary-500">160 Вт</p>
                        </li>
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                <iconMet class="w-4 h-4 text-muted" />
                                ЧСС
                            </p>
                            <p class="font-medium text-lg text-secondary-500">167 уд/мин</p>
                        </li>
                    </ul>
                    <h3 class="font-medium text-gray-900">Потребление O₂</h3>
                    <ul class="grid md:grid-cols-2">
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">Абсолютное</p>
                            <p class="font-medium text-lg text-secondary-500">2.1 л/мин</p>
                        </li>
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">Относительное</p>
                            <p class="font-medium text-lg text-secondary-500">34.5 мл/мин/кг</p>
                        </li>
                    </ul>
                    <div class="flex gap-1 items-start p-4 rounded-lg bg-secondary-100">
                        <iconAten class="w-5 h-5 text-muted text-secondary-500" />
                        <p class="text-sm text-muted-color">Анаэробный порог (АнП) - это интенсивность, при которой начинается накопление лактата в мышцах.</p>
                    </div>
                </div>
                <!-- Показатели АэП -->
                <div class="flex flex-col gap-4 bg-white rounded-xl shadow-card p-4">
                    <h3 class="font-medium text-gray-900">Показатели АэП</h3>
                    <ul class="grid md:grid-cols-2">
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                <iconMosh class="w-4 h-4 text-muted" />
                                Мощность
                            </p>
                            <p class="font-medium text-lg text-[#66BB6A]">110 Вт</p>
                        </li>
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                <iconMet class="w-4 h-4 text-muted" />
                                ЧСС
                            </p>
                            <p class="font-medium text-lg text-[#66BB6A]">130 уд/мин</p>
                        </li>
                    </ul>
                    <h3 class="font-medium text-gray-900">Потребление O₂</h3>
                    <ul class="grid md:grid-cols-2">
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">Абсолютное</p>
                            <p class="font-medium text-lg text-[#66BB6A]">1.4 л/мин</p>
                        </li>
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">Относительное</p>
                            <p class="font-medium text-lg text-[#66BB6A]">25.5 мл/мин/кг</p>
                        </li>
                    </ul>
                    <div class="flex gap-1 items-start p-4 rounded-lg bg-[#ecffed]">
                        <iconAten class="w-5 h-5 text-muted text-[#66BB6A]" />
                        <p class="text-sm text-muted-color">Аэробный порог (АэП) - это интенсивность, выше которой метаболизм начинает смещаться от аэробного к анаэробному.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Диетология -->
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div>
                <h2 class="font-medium text-2xl text-gray-900">Диетология</h2>
                <p>Анализ нутриентов, метаболизма и лабораторных показателей</p>
            </div>
            <div class="grid md:grid-cols-5 gap-4">
                <!-- Общий анализ крови -->
                <div class="col-span-4 flex flex-col gap-4 bg-white p-4 rounded-xl shadow-card">
                    <h3 class="row-span-full font-medium text-gray-900">Общий анализ крови</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col">
                                <div class="flex justify-between items-baseline">
                                    <span class="text-sm text-muted-color">лейкоцитов, /литр</span>
                                    <div class="flex items-center gap-1">
                                        <span class="text-base font-semibold text-[#F59E0B]">3,91 10*9</span>
                                        <span class="text-xs text-muted-color"> (норма 4.01 - 9.75) </span>
                                    </div>
                                </div>
                                <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div class="h-full bg-[#F59E0B]" style="width: 60%"></div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex justify-between items-baseline">
                                    <span class="text-sm text-muted-color">сегментоядерных лейкоцитов, /литр</span>
                                    <div class="flex items-center gap-1">
                                        <span class="text-base font-semibold text-[#F59E0B]">1,66 10*9</span>
                                        <span class="text-xs text-muted-color"> (норма 1.92 - 6.44) </span>
                                    </div>
                                </div>
                                <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div class="h-full bg-[#F59E0B]" style="width: 60%"></div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex justify-between items-baseline">
                                    <span class="text-sm text-muted-color">кислая фосфатаза,  Ед/л</span>
                                    <div class="flex items-center gap-1">
                                        <span class="text-base font-semibold text-[#EF5350]">07.5</span>
                                        <span class="text-xs text-muted-color"> (норма 0 - 6.5) </span>
                                    </div>
                                </div>
                                <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div class="h-full bg-[#EF5350]" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex justify-between items-baseline">
                                    <span class="text-sm text-muted-color">Щелочная фосфатаза,  Ед/л</span>
                                    <div class="flex items-center gap-1">
                                        <span class="text-base font-semibold text-[#EF5350]">128</span>
                                        <span class="text-xs text-muted-color"> (норма 55-124) </span>
                                    </div>
                                </div>
                                <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div class="h-full bg-[#EF5350]" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex justify-between items-baseline">
                                    <span class="text-sm text-muted-color">Витамин Д</span>
                                    <div class="flex items-center gap-1">
                                        <span class="text-base font-semibold text-[#F59E0B]">18.9</span>
                                        <span class="text-xs text-muted-color"> (норма более 25 нг/мл) </span>
                                    </div>
                                </div>
                                <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div class="h-full bg-[#F59E0B]" style="width: 60%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <Bar :data="chartBloodData" :options="chartBloodOptions" />
                        </div>
                    </div>
                </div>
                <!-- Метаболизм -->
                <div class="col-span-1 bg-white p-4 rounded-xl shadow-card">
                    <Doughnut :data="chartNutritionData" :options="chartNutritionOptions" />
                    <div class="labels">
                        <div><strong>Калорийность:</strong> 1156 ккал</div>
                        <div><span class="dot protein"></span> Белки: 13%</div>
                        <div><span class="dot fat"></span> Жиры: 32%</div>
                        <div><span class="dot carbs"></span> Углеводы: 54.7%</div>
                    </div>
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-5">
                <!-- Метаболизм по метаболографа -->
                <div class="col-span-3 bg-white p-4 rounded-xl shadow-card">
                    <h3 class="row-span-full font-medium text-gray-900 mb-4">Метаболизм по метаболографа</h3>
                    <div class="grid gap-4 md:grid-cols-2">
                        <div>
                            <VueSpeedometer
                                :value="1972"
                                :minValue="0"
                                :maxValue="3000"
                                :segments="3"
                                :segmentColors="['#FEF1F1', '#E1F5FE', '#E1F5FE']"
                                :customSegmentLabels="[
                                    {
                                        text: 'Медленный',
                                        position: 'INSIDE',
                                        color: '#555',
                                    },
                                    {
                                        text: 'Средний',
                                        position: 'INSIDE',
                                        color: '#555',
                                    },
                                    {
                                        text: 'Быстрый',
                                        position: 'INSIDE',
                                        color: '#555',
                                    },
                                ]"
                            />
                        </div>
                        <div class="flex flex-col gap-4">
                            <div>
                                <div class="text-sm text-muted-color">RMR</div>
                                <div class="flex items-baseline">
                                    <span class="text-2xl font-semibold text-primary-500">1972</span>
                                    <span class="ml-1 text-sm text-[#6B7280]">ккал/день</span>
                                </div>
                                <div class="text-xs text-primary-500">Быстрый метаболизм</div>
                            </div>
                            <div>
                                <div class="text-sm text-muted-color">RQ</div>
                                <div class="flex items-baseline">
                                    <span class="text-2xl font-semibold text-primary-500">0.84</span>
                                </div>
                                <div class="text-xs text-primary-500">утилизация жиров и углеводов</div>
                            </div>
                            <div class="p-3 rounded-lg bg-primary-100">
                                <p class="text-xs text-primary-500">
                                    RMR (Resting Metabolic Rate) - скорость метаболизма в состоянии покоя. RQ (Respiratory Quotient) - дыхательный коэффициент, отражающий тип
                                    используемого субстрата.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Субстраты -->
                <div class="col-span-2 flex flex-col gap-4 bg-white p-4 rounded-xl shadow-card">
                    <h3 class="row-span-full font-medium text-gray-900">Субстраты</h3>
                    <div class="">
                        <Bar :data="chartEnergyData" :options="chartEnergyOptions" />
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="flex flex-col items-center p-3 rounded-xl shadow-card bg-secondary-100">
                            <div class="w-3 h-3 rounded-full mb-1 bg-secondary-500"></div>
                            <p class="text-xs text-center text-muted-color">Липиды</p>
                            <p class="text-lg font-semibold text-center text-gray-900">1077</p>
                            <p class="text-xs text-center text-muted-color">ккал / 55.7%</p>
                        </div>
                        <div class="flex flex-col items-center p-3 rounded-xl shadow-card bg-[#ecffed]">
                            <div class="w-3 h-3 rounded-full mb-1 bg-[#66BB6A]"></div>
                            <p class="text-xs text-center text-muted-color">Углеводы</p>
                            <p class="text-lg font-semibold text-center text-gray-900">895</p>
                            <p class="text-xs text-center text-muted-color">ккал / 44.3%</p>
                        </div>
                        <div class="flex flex-col items-center p-3 rounded-xl shadow-card bg-primary-100">
                            <div class="w-3 h-3 rounded-full mb-1 bg-primary-500"></div>
                            <p class="text-xs text-center text-muted-color">Белки</p>
                            <p class="text-lg font-semibold text-center text-gray-900">0</p>
                            <p class="text-xs text-center text-muted-color">ккал / 0%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
                <!-- Гормональный профиль -->
                <div class="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-card">
                    <h3 class="font-medium text-gray-900">Гормональный профиль</h3>
                    <div class="flex items-center justify-between p-4 rounded-lg bg-secondary-100 border border-secondary-300">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 flex items-center justify-center rounded-md bg-secondary-200">
                                <iconAten class="w-6 h-6 text-secondary-500" />
                            </div>
                            <div>
                                <div class="text-sm text-muted-color">B-CrossLaps</div>
                                <div class="flex items-baseline">
                                    <span class="text-xl font-semibold text-secondary-500">1.23</span>
                                    <span class="ml-1 text-sm text-muted-color">ng/ml</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-xs text-muted-color">Норма</div>
                            <div class="text-sm text-muted-color">0.01–0.941</div>
                        </div>
                    </div>
                    <div class="p-4 rounded-lg bg-gray-100">
                        <p class="text-sm text-muted-color">
                            B-CrossLaps (CTX) - маркер резорбции костной ткани. Повышенный уровень может указывать на ускоренную костную резорбцию и риск потери костной массы.
                        </p>
                    </div>
                </div>
                <!-- Условия теста -->
                <div class="content-start bg-white p-4 rounded-xl shadow-card grid gap-4">
                    <h3 class="font-medium text-gray-900">Условия теста</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="flex items-center gap-3">
                            <div class="flex-shrink-0 bg-gray-100 p-2 rounded-lg">
                                <iconTime class="w-6 h-6 text-primary-500" />
                            </div>
                            <div>
                                <p class="text-muted-foreground text-sm">Период от приёма пищи</p>
                                <p class="text-gray-900 font-medium">>8 часов</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex-shrink-0 bg-gray-100 p-2 rounded-lg">
                                <iconFood class="w-6 h-6 text-primary-500" />
                            </div>
                            <div>
                                <p class="text-muted-foreground text-sm">Период покоя</p>
                                <p class="text-gray-900 font-medium">>1 час</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex-shrink-0 bg-gray-100 p-2 rounded-lg">
                                <iconPos class="w-6 h-6 text-primary-500" />
                            </div>
                            <div>
                                <p class="text-muted-foreground text-sm">Позиция при тесте</p>
                                <p class="text-gray-900 font-medium">В покое</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
