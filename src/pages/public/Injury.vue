<script setup>
import MainInfo from "../../components/Containers/Admin/MainInfo.vue";
import injuryBody from "@assets/images/injury-body.png";
import { AlertTriangle, TrendingUp, Clock, Stethoscope } from "lucide-vue-next";
import iconAten from "@assets/icons/14.svg";

const stats = [
    { label: "Всего травм", icon: AlertTriangle, color: "text-primary-500", border: "border-primary-500", value: 4 },
    { label: "Активные", icon: TrendingUp, color: "text-secondary-500", border: "border-secondary-500", value: 1 },
    { label: "Хронические", icon: Clock, color: "text-orange-500", border: "border-orange-500", value: 1 },
    { label: "Операций", icon: Stethoscope, color: "text-purple-500", border: "border-purple-500", value: 1 },
];

const injuries = [
    {
        date: "20.03.2025",
        location: "—",
        diagnosis: "—",
        severity: "—",
        status: "Восстановление",
        surgery: "Требуется",
        rehab: "8–12 недель",
        progress: 65,
        complication: null,
    },
    {
        date: "02.01.2025",
        location: "Левая лодыжка",
        diagnosis: "Растяжение боковых связок",
        severity: "Лёгкая",
        status: "Восстановлена",
        surgery: "Не требуется",
        rehab: "4–6 недель",
        progress: 100,
        complication: null,
    },
    {
        date: "18.11.2024",
        location: "Поясница",
        diagnosis: "Хроническое мышечное напряжение",
        severity: "Лёгкая",
        status: "Хроническая",
        surgery: "Не требуется",
        rehab: "2–3 недели",
        progress: null,
        complication: "Ограниченная подвижность (в прошлом)",
    },
    {
        date: "05.09.2024",
        location: "Правое плечо",
        diagnosis: "Импинджмент синдром",
        severity: "Тяжёлая",
        status: "Восстановлена",
        surgery: "Не требуется",
        rehab: "12–16 недель",
        progress: 100,
        complication: "Отёк (в прошлом)",
    },
];
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Травматизм</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div class="bg-white p-4 rounded-xl shadow-card max-w-3xl">
                <MainInfo />
            </div>
            <div class="bg-white rounded-xl shadow-card p-4 flex flex-col gap-4 max-w-3xl">
                <h2 class="font-medium text-gray-900">Карта состояния спортсмена</h2>
                <div class="flex gap-3 p-4 rounded-lg bg-green-100">
                    <div class="w-10 h-10 flex items-center justify-center rounded-md bg-green-200">
                        <iconAten class="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <div class="text-sm text-muted-color">У спортсмена отмечается текущая боль в области:</div>
                        <p class="text-lg font-medium text-gray-900">
                            Задняя поверхность правого бедра <span class="inline-block rounded-lg text-sm px-2 py-0.5 bg-green-200 text-green-800">Легкая боль</span>
                        </p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div>
                        <img :src="injuryBody" class="max-w-sm" />
                    </div>
                    <div class="flex flex-col justify-center gap-3 text-xs text-gray-600">
                        <p class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span>Легкая боль</p>
                        <p class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>Средняя боль</p>
                        <p class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>Сильная боль</p>
                    </div>
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-4">
                <div v-for="item in stats" :key="item.label" :class="['bg-white rounded-xl shadow-card p-4 border-l-4', item.border]">
                    <div class="flex gap-2 items-center mb-2">
                        <component :is="item.icon" :class="['w-6 h-6', item.color]" />
                        <p class="text-2xl font-medium text-gray-900">{{ item.value }}</p>
                    </div>
                    <p class="text-sm text-muted">{{ item.label }}</p>
                </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h2 class="font-medium text-gray-900">История</h2>
                <div class="w-full overflow-auto">
                    <table class="table-auto w-full text-sm border border-gray-300">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="border px-2 py-1 font-normal">Дата</th>
                                <th class="border px-2 py-1 font-normal">Локация</th>
                                <th class="border px-2 py-1 font-normal">Диагноз</th>
                                <th class="border px-2 py-1 font-normal">Тяжесть</th>
                                <th class="border px-2 py-1 font-normal">Статус</th>
                                <th class="border px-2 py-1 font-normal">Операция</th>
                                <th class="border px-2 py-1 font-normal">Реабилитация</th>
                                <th class="border px-2 py-1 font-normal">Прогресс</th>
                                <th class="border px-2 py-1 font-normal">Осложнения</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(i, index) in injuries" :key="index" class="border-t hover:bg-gray-50">
                                <td class="border text-center px-2 py-1 text-gray-900">{{ i.date }}</td>
                                <td class="border text-center px-2 py-1 text-gray-900">{{ i.location }}</td>
                                <td class="border text-center px-2 py-1 text-gray-900">{{ i.diagnosis }}</td>
                                <td class="border text-center px-2 py-1">
                                    <span
                                        v-if="i.severity !== '—'"
                                        :class="[
                                            'px-2 py-1 rounded-lg text-xs',
                                            i.severity === 'Лёгкая'
                                                ? 'bg-green-100 text-green-800'
                                                : i.severity === 'Тяжёлая'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-gray-100 text-gray-600',
                                        ]"
                                    >
                                        {{ i.severity }}
                                    </span>
                                </td>
                                <td class="border text-center px-2 py-1">
                                    <span
                                        :class="['text-xs', i.status === 'Восстановлена' ? 'text-green-600' : i.status === 'Хроническая' ? 'text-orange-500' : 'text-primary-600']"
                                    >
                                        {{ i.status }}
                                    </span>
                                </td>
                                <td class="border text-center px-2 py-1">{{ i.surgery }}</td>
                                <td class="border text-center px-2 py-1">{{ i.rehab }}</td>
                                <td class="border text-center px-2 py-1">
                                    <div v-if="i.progress !== null" class="w-24">
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="h-2 bg-primary-500 rounded-full" :style="{ width: i.progress + '%' }"></div>
                                        </div>
                                        <div class="text-xs mt-1 text-gray-500">{{ i.progress }}%</div>
                                    </div>
                                    <span v-else class="text-gray-400 text-xs">—</span>
                                </td>
                                <td class="border text-center px-2 py-1">
                                    <span v-if="i.complication">{{ i.complication }}</span>
                                    <span v-else class="text-gray-400 text-xs">—</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
