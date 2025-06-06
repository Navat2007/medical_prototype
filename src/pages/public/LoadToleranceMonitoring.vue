<script setup>
import MainInfo from "@/components/Containers/MainInfo.vue";
import ReadinessChart from "@/components/Charts/HematologicalScreening/ReadinessChart.vue";
import ScoreCell from "@/components/ScoreCell.vue";
import { AlertCircle } from "lucide-vue-next";

const data = [
    { date: "29.05.2025", fatigue: 7, sleepQuality: 8, sleepDuration: 7, musclePain: 6, mood: 8, stressResilience: 7, score: 7.2 },
    { date: "30.05.2025", fatigue: 6, sleepQuality: 7, sleepDuration: 8, musclePain: 7, mood: 7, stressResilience: 8, score: 7.1 },
    { date: "31.05.2025", fatigue: 8, sleepQuality: 9, sleepDuration: 8, musclePain: 5, mood: 9, stressResilience: 8, score: 7.8 },
    { date: "01.06.2025", fatigue: 5, sleepQuality: 6, sleepDuration: 6, musclePain: 8, mood: 6, stressResilience: 6, score: 6.2 },
    { date: "02.06.2025", fatigue: 7, sleepQuality: 8, sleepDuration: 9, musclePain: 6, mood: 8, stressResilience: 9, score: 7.6 },
    { date: "03.06.2025", fatigue: 7, sleepQuality: 9, sleepDuration: 8, musclePain: 6, mood: 8, stressResilience: 7, score: 7.3 },
    { date: "04.06.2025", fatigue: 6, sleepQuality: 8, sleepDuration: 8, musclePain: 7, mood: 8, stressResilience: 7, score: 7.4 },
    { date: "05.06.2025", fatigue: 7, sleepQuality: 9, sleepDuration: 8, musclePain: 5, mood: 9, stressResilience: 8, score: 7.6 },
];
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Контроль переносимости нагрузки</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div class="bg-white p-4 rounded-xl shadow-card">
                <MainInfo />
            </div>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-xl shadow-card grid grid-cols-2 md:grid-cols-5 gap-4">
                    <ReadinessChart label="Общее состояние" :value="76" color="#66bb6a" class="col-span-2 row-span-2" />
                    <ReadinessChart label="Усталость" :value="7" color="#eab308" />
                    <ReadinessChart label="Качество сна" :value="8" color="#66bb6a" />
                    <ReadinessChart label="Время сна" :value="8" color="#66bb6a" />
                    <ReadinessChart label="Болезненность мышц" :value="7" color="#eab308" class="" />
                    <ReadinessChart label="Настроение" :value="8" color="#66bb6a" class="" />
                    <ReadinessChart label="Уровень стресса" :value="9" color="#66bb6a" class="" />
                </div>
                <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                    <ul class="flex flex-wrap gap-4 mb-4">
                        <li class="basis-50"><span class="inline-block w-10">0–1</span> <span class="text-red-600 bg-red-200 rounded-lg text-sm px-2 py-0.5">Очень плохо</span></li>
                        <li class="basis-50"><span class="inline-block w-10">2–3</span> <span class="text-red-500 bg-secondary-100 rounded-lg text-sm px-2 py-0.5">Плохо</span></li>
                        <li class="basis-50">
                            <span class="inline-block w-10">4–5</span> <span class="text-gray-500 bg-gray-100 rounded-lg text-sm px-2 py-0.5">Нейтрально</span>
                        </li>
                        <li class="basis-50">
                            <span class="inline-block w-10">6–7</span> <span class="text-yellow-500 bg-yellow-100 rounded-lg text-sm px-2 py-0.5">Хорошо</span>
                        </li>
                        <li class="basis-50">
                            <span class="inline-block w-10">8–9</span> <span class="text-green-500 bg-green-100 rounded-lg text-sm px-2 py-0.5">Очень хорошо</span>
                        </li>
                        <li class="basis-50"><span class="inline-block w-10">10</span> <span class="text-green-600 bg-green-200 rounded-lg text-sm px-2 py-0.5">Отлично</span></li>
                    </ul>
                    <div class="flex gap-2 p-4 rounded-lg bg-primary-100 mt-auto">
                        <AlertCircle :class="['w-6 h-6 flex-none text-primary-500']" />
                        <div>
                            <p class="font-medium text-gray-900">Формула расчета</p>
                            <p class="text-sm">
                                Общий балл по шкале 0–100%: 100 × (Усталость + 1,2 × Качество сна + Время сна + 1,8 × Болезненность мышц + Настроение + Уверенность в стрессе) /
                                диапазон 64,8
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h2 class="font-medium text-gray-900">Динамика показателей за неделю</h2>
                <div class="w-full overflow-auto">
                    <table class="min-w-full text-sm text-left border">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="p-2 border">Дата</th>
                                <th class="p-2 border">Усталость</th>
                                <th class="p-2 border">Качество сна</th>
                                <th class="p-2 border">Время сна</th>
                                <th class="p-2 border">Болезненность мышц</th>
                                <th class="p-2 border">Настроение</th>
                                <th class="p-2 border">Уверенность стресса</th>
                                <th class="p-2 border">Оценка</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="entry in data" :key="entry.date">
                                <td class="p-2 border text-center text-gray-900">{{ entry.date }}</td>
                                <td class="p-2 border text-center text-gray-900">
                                    <ScoreCell :value="entry.fatigue" />
                                </td>
                                <td class="p-2 border text-center text-gray-900">
                                    <ScoreCell :value="entry.sleepQuality" />
                                </td>
                                <td class="p-2 border text-center text-gray-900">
                                    <ScoreCell :value="entry.sleepDuration" />
                                </td>
                                <td class="p-2 border text-center text-gray-900">
                                    <ScoreCell :value="entry.musclePain" />
                                </td>
                                <td class="p-2 border text-center text-gray-900">
                                    <ScoreCell :value="entry.mood" />
                                </td>
                                <td class="p-2 border text-center text-gray-900">
                                    <ScoreCell :value="entry.stressResilience" />
                                </td>
                                <td class="p-2 border text-center text-gray-900">
                                    <p class="font-bold">
                                        <ScoreCell :value="entry.score" />
                                    </p>
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
