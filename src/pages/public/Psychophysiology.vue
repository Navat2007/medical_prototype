<script setup>
import ReactionGauge from "@/components/Charts/Psychophysiology/ReactionGauge.vue";
import CorrectReactionsBar from "@/components/Charts/Psychophysiology/CorrectReactionsBar.vue";
import ChartPsychophysiology from "@/components/Charts/Psychophysiology/ChartPsychophysiology.vue";
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Психофизиология</h1>
        <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
            <h2 class="col-span-full font-medium text-2xl text-gray-900">Оценка сенсомоторных реакций</h2>
            <div class="col-span-full bg-white p-4 rounded-xl shadow-card">
                <MainInfo />
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h3 class="font-medium text-gray-900">Простая зрительно-моторная реакция</h3>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-border">
                                <th class="text-left py-2 text-muted font-medium">Параметр</th>
                                <th class="text-left py-2 text-muted font-medium">Показатель</th>
                                <th class="text-left py-2 text-muted font-medium">Норма</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <span class="font-medium">ВР</span>
                                    <span class="text-muted-color ml-1">(мс)</span>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-[#66BB6A] bg-[#ecffed]">214</span>
                                </td>
                                <td class="py-3 text-muted-foreground">200-260</td>
                            </tr>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <span class="font-medium">Показатель</span>
                                    <span class="text-muted-color ml-1">(мс)</span>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-[#66BB6A] bg-[#ecffed]">31</span>
                                </td>
                                <td class="py-3 text-muted-foreground">35-50</td>
                            </tr>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <span class="font-medium">Ошибки</span>
                                    <span class="text-muted-color ml-1">(кол-во)</span>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-[#66BB6A] bg-[#ecffed]">0</span>
                                </td>
                                <td class="py-3 text-muted-foreground">3-5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ChartPsychophysiology />
                <ReactionGauge :steps="[400, 350, 300, 250, 200, 150, 100, 50, 0]" :value="214" />
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h3 class="font-medium text-gray-900">Сложная зрительно-моторная реакция</h3>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-border">
                                <th class="text-left py-2 text-muted font-medium">Параметр</th>
                                <th class="text-left py-2 text-muted font-medium">Показатель</th>
                                <th class="text-left py-2 text-muted font-medium">Норма</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <span class="font-medium">ВР</span>
                                    <span class="text-muted-color ml-1">(мс)</span>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-[#66BB6A] bg-[#ecffed]">324</span>
                                </td>
                                <td class="py-3 text-muted-foreground">340-390</td>
                            </tr>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <span class="font-medium">Показатель</span>
                                    <span class="text-muted-color ml-1">(мс)</span>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-[#66BB6A] bg-[#ecffed]">69</span>
                                </td>
                                <td class="py-3 text-muted-foreground">30-60</td>
                            </tr>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <span class="font-medium">Ошибки</span>
                                    <span class="text-muted-color ml-1">(кол-во)</span>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-[#66BB6A] bg-[#ecffed]">1</span>
                                </td>
                                <td class="py-3 text-muted-foreground">0-1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <CorrectReactionsBar />
                <ReactionGauge :steps="[900, 800, 700, 600, 500, 400, 300, 200, 100, 0]" :value="324" />
            </div>
        </div>
    </main>
</template>

<style scoped></style>
