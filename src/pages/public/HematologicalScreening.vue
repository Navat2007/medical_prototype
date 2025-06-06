<script setup>
import { ref } from "vue";
import ChartBlood from "@/components/Charts/HematologicalScreening/ChartBlood.vue";
import Indicator from "@/components/Containers/Indicator.vue";
import MainInfo from "@/components/Containers/MainInfo.vue";
import { Droplet, LineChart, AlertCircle } from "lucide-vue-next";

const activeTab = ref("summary");
const tabs = [
    { value: "summary", label: "Сводка", icon: Droplet },
    { value: "history", label: "История", icon: LineChart },
];

const today = "05.06.2025";

const summary = {
    biochem: [
        {
            name: "Гемоглобин",
            value: 135,
            unit: "г/л",
            norm: [120, 160],
            updated: today,
        },
        {
            name: "Гематокрит",
            value: 39,
            unit: "%",
            norm: [36, 46],
            updated: today,
        },
        {
            name: "Железо",
            value: 16.93,
            unit: "мкмоль/л",
            norm: [12, 30],
            updated: today,
        },
        {
            name: "Ферритин",
            value: 63.9,
            unit: "нг/мл",
            norm: [50, 150],
            updated: today,
        },
        {
            name: "Кортизол",
            value: 786,
            unit: "нмоль/л",
            norm: [150, 800],
            updated: today,
        },
        {
            name: "Тестостерон",
            value: 3.56,
            unit: "нмоль/л",
            norm: [8, 38],
            updated: today,
        },
        {
            name: "АЛТ",
            value: 12,
            unit: "Ед/л",
            norm: [0, 31],
            updated: today,
        },
        {
            name: "АСТ",
            value: 13,
            unit: "Ед/л",
            norm: [0, 31],
            updated: today,
        },
        {
            name: "КФК",
            value: 141,
            unit: "Ед/л",
            norm: [20, 200],
            updated: today,
        },
        {
            name: "Мочевина",
            value: 5.2,
            unit: "ммоль/л",
            norm: [2.5, 8.3],
            updated: today,
        },
        {
            name: "Общий белок",
            value: 74,
            unit: "г/л",
            norm: [66, 87],
            updated: today,
        },
    ],
};

const dates = ["01.06.2025", "15.05.2025", "01.05.2025", "15.04.2025", "01.04.2025"];

const groupedMetrics = {
    Метаболизм: [
        { name: "Глюкоза", norm: [4.1, 5.9], unit: "ммоль/л", values: [4.5, 4.8, 5.2, 6.2, 5.1] },
        { name: "Железо", norm: [9, 30.4], unit: "мкмоль/л", values: [18.8, 21.5, 19.2, 22.4, 18.6] },
        { name: "Ферритин", norm: [10, 120], unit: "нг/мл", values: [520.8, 570.5, 422.4, 420.3, 410.1] },
        { name: "Общий белок", norm: [66, 87], unit: "г/л", values: [81, 81.4, 84.6, 88, 79] },
    ],
    Гормоны: [{ name: "Тестостерон", norm: [8, 38], unit: "нмоль/л", values: [2.1, 0.855, 0.927, 0.855, 0.855] }],
    "Печеночные ферменты": [
        { name: "АЛТ", norm: [0, 31], unit: "Ед/л", values: [12, 20, 28, 22, 26] },
        { name: "КФК", norm: [0, 200], unit: "Ед/л", values: [58, 29, 32, 1012, 72] },
    ],
};

function deviationColor(value, norm) {
    const [low, high] = norm;
    if (value < low) return "text-red-500";
    if (value > high) return "text-red-500";
    return "text-gray-800";
}
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Гематологический скрининг</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div class="bg-white p-4 rounded-xl shadow-card">
                <MainInfo />
            </div>
            <!-- Общий анализ крови -->
            <div class="md:col-span-4 flex flex-col gap-4 bg-white p-4 rounded-xl shadow-card">
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col">
                            <div class="flex flex-wrap justify-between items-baseline">
                                <span class="text-sm text-muted-color">лейкоцитов, /литр</span>
                                <div class="flex items-center gap-1 ml-auto">
                                    <span class="text-base font-semibold text-[#F59E0B]">3,91 10*9</span>
                                    <span class="text-xs text-muted-color"> (норма 4.01 - 9.75) </span>
                                </div>
                            </div>
                            <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-[#F59E0B]" style="width: 60%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex flex-wrap justify-between items-baseline">
                                <span class="text-sm text-muted-color">сегментоядерных лейкоцитов, /литр</span>
                                <div class="flex items-center gap-1 ml-auto">
                                    <span class="text-base font-semibold text-[#F59E0B]">1,66 10*9</span>
                                    <span class="text-xs text-muted-color"> (норма 1.92 - 6.44) </span>
                                </div>
                            </div>
                            <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-[#F59E0B]" style="width: 60%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex flex-wrap justify-between items-baseline">
                                <span class="text-sm text-muted-color">кислая фосфатаза,  Ед/л</span>
                                <div class="flex items-center gap-1 ml-auto">
                                    <span class="text-base font-semibold text-[#EF5350]">07.5</span>
                                    <span class="text-xs text-muted-color"> (норма 0 - 6.5) </span>
                                </div>
                            </div>
                            <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-[#EF5350]" style="width: 90%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex flex-wrap justify-between items-baseline">
                                <span class="text-sm text-muted-color">Щелочная фосфатаза,  Ед/л</span>
                                <div class="flex items-center gap-1 ml-auto">
                                    <span class="text-base font-semibold text-[#EF5350]">128</span>
                                    <span class="text-xs text-muted-color"> (норма 55-124) </span>
                                </div>
                            </div>
                            <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-[#EF5350]" style="width: 90%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex flex-wrap justify-between items-baseline">
                                <span class="text-sm text-muted-color">Витамин Д</span>
                                <div class="flex items-center gap-1 ml-auto">
                                    <span class="text-base font-semibold text-[#F59E0B]">18.9</span>
                                    <span class="text-xs text-muted-color"> (норма более 25 нг/мл) </span>
                                </div>
                            </div>
                            <div class="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-[#F59E0B]" style="width: 60%"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ChartBlood />
                    </div>
                </div>
            </div>
            <!-- Гормональный профиль -->
            <div class="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-card">
                <h3 class="font-medium text-gray-900">Гормональный профиль</h3>
                <div class="flex items-center justify-between p-4 rounded-lg bg-secondary-100 border border-secondary-300">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 flex items-center justify-center rounded-md bg-secondary-200">
                            <AlertCircle :class="['w-6 h-6 text-secondary-500']" />
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
            <div class="bg-white rounded-xl shadow-card p-4">
                <div class="mb-6 flex flex-wrap gap-2">
                    <button
                        v-for="tab in tabs"
                        :key="tab.value"
                        @click="activeTab = tab.value"
                        :class="[
                            'flex items-center px-3 py-1 rounded-full text-sm transition-all',
                            activeTab === tab.value ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700',
                        ]"
                    >
                        <component :is="tab.icon" class="w-4 h-4 mr-2" />
                        {{ tab.label }}
                    </button>
                </div>

                <div v-if="activeTab === 'summary'">
                    <div class="grid md:grid-cols-3 gap-2">
                        <Indicator v-for="marker in summary.biochem" :key="marker.name" :data="marker" />
                    </div>
                </div>

                <div v-else-if="activeTab === 'history'">
                    <div class="flex flex-col gap-4">
                        <div v-for="(group, groupLabel) in groupedMetrics" :key="groupLabel">
                            <h2 class="font-medium text-lg text-gray-900 mb-4">{{ groupLabel }}</h2>
                            <div class="w-full overflow-auto">
                                <table class="min-w-full text-sm text-left border">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th class="p-2 border text-left">Показатель</th>
                                            <th v-for="date in dates" :key="date" class="p-2 border text-right">{{ date }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in group" :key="item.name">
                                            <td class="p-2 border text-left">
                                                <p class="font-bold">{{ item.name }}</p>
                                                <span class="text-gray-400 text-xs">({{ item.norm[0] }}–{{ item.norm[1] }} {{ item.unit }})</span>
                                            </td>
                                            <td v-for="(val, i) in item.values" :key="i" class="p-2 border text-right" :class="deviationColor(val, item.norm)">
                                                {{ val }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
th,
td {
    white-space: nowrap;
}
</style>
