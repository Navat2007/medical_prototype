<script setup>
import ReadinessChart from "../../components/Charts/HematologicalScreening/ReadinessChart.vue";
import ScoreCell from "../../components/ScoreCell.vue";
import WellbeingRadar from "../../components/Charts/HematologicalScreening/WellbeingRadar.vue";
import iconAten from "@assets/icons/14.svg";

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
        <h1 class="text-3xl font-medium text-primary-500">Гематологический скрининг</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div class="grid md:grid-cols-3 gap-2">
                <div class="bg-white p-4 rounded-xl shadow-card">
                    <WellbeingRadar :data="[8, 9, 9, 8, 8, 8]" />
                </div>
                <div class="bg-white p-4 rounded-xl shadow-card col-span-2 grid grid-cols-3 md:grid-cols-5 gap-4">
                    <ReadinessChart label="Общее состояние" :value="76" color="#66bb6a" class="col-span-2 row-span-2" />
                    <ReadinessChart label="Усталость" :value="7" color="#eab308" />
                    <ReadinessChart label="Качество сна" :value="8" color="#66bb6a" />
                    <ReadinessChart label="Время сна" :value="8" color="#66bb6a" />
                    <ReadinessChart label="Болезненность мышц" :value="7" color="#eab308" class="row-start-2 col-start-3" />
                    <ReadinessChart label="Настроение" :value="8" color="#66bb6a" class="row-start-2 col-start-4" />
                    <ReadinessChart label="Индекс готовности" :value="9" color="#66bb6a" class="row-start-2 col-start-5" />
                </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h2 class="font-medium text-gray-900">Динамика показателей за неделю</h2>
                <div class="w-full overflow-auto">
                    <table class="table-auto w-full text-sm border border-gray-300">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="border px-2 py-1 font-normal">Дата</th>
                                <th class="border px-2 py-1 font-normal">Усталость</th>
                                <th class="border px-2 py-1 font-normal">Качество сна</th>
                                <th class="border px-2 py-1 font-normal">Время сна</th>
                                <th class="border px-2 py-1 font-normal">Болезненность мышц</th>
                                <th class="border px-2 py-1 font-normal">Настроение</th>
                                <th class="border px-2 py-1 font-normal">Уверенность стресса</th>
                                <th class="border px-2 py-1 font-normal">Оценка</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="entry in data" :key="entry.date">
                                <td class="border text-center py-2 text-gray-900">{{ entry.date }}</td>
                                <td class="border text-center py-2 text-gray-900">
                                    <ScoreCell :value="entry.fatigue" />
                                </td>
                                <td class="border text-center py-2 text-gray-900">
                                    <ScoreCell :value="entry.sleepQuality" />
                                </td>
                                <td class="border text-center py-2 text-gray-900">
                                    <ScoreCell :value="entry.sleepDuration" />
                                </td>
                                <td class="border text-center py-2 text-gray-900">
                                    <ScoreCell :value="entry.musclePain" />
                                </td>
                                <td class="border text-center py-2 text-gray-900">
                                    <ScoreCell :value="entry.mood" />
                                </td>
                                <td class="border text-center py-2 text-gray-900">
                                    <ScoreCell :value="entry.stressResilience" />
                                </td>
                                <td class="border text-center py-2 text-gray-900">
                                    <p class="font-medium">
                                        <ScoreCell :value="entry.score.toFixed(1)" />
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul class="flex flex-wrap gap-2 text-sm">
                    <li><span class="inline-block w-6">0–1</span> <span class="text-red-600 bg-red-200 rounded-lg px-1">Очень плохо</span></li>
                    <li><span class="inline-block w-6">2–3</span> <span class="text-red-500 bg-secondary-100 rounded-lg px-1">Плохо</span></li>
                    <li><span class="inline-block w-6">4–5</span> <span class="text-gray-500 bg-gray-100 rounded-lg px-1">Нейтрально</span></li>
                    <li><span class="inline-block w-6">6–7</span> <span class="text-yellow-500 bg-yellow-100 rounded-lg px-1">Хорошо</span></li>
                    <li><span class="inline-block w-6">8–9</span> <span class="text-green-500 bg-green-100 rounded-lg px-1">Очень хорошо</span></li>
                    <li><span class="inline-block w-6">10</span> <span class="text-green-600 bg-green-200 rounded-lg px-1">Отлично</span></li>
                </ul>
                <div class="flex gap-1 items-start p-4 rounded-lg bg-primary-100">
                    <iconAten class="w-5 h-5 text-muted text-primary-500" />
                    <p class="text-sm text-muted-color">
                        <span class="font-semibold mb-2"> Формула расчета </span> <br />
                        Общий балл = (Усталость × 1.2 + Качество сна × 1.2 + Время сна × 1 + Болезненность мышц × 1.8 + Настроение × 1 + Уверенность в стрессе × 1) / диапазон
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
