<script setup>
import MainInfo from "@/components/Containers/MainInfo.vue";
import iconBody from "@assets/images/body.svg";
import ChartSkinfold from "@/components/Charts/Anthropometry/ChartSkinfold.vue";
import ChartMass from "@/components/Charts/Anthropometry/ChartMass.vue";
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Антропометрия</h1>
        <!-- Антропометрия -->
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div class="grid md:grid-cols-5 gap-4">
                <div class="col-span-4 bg-white p-4 rounded-xl shadow-card">
                    <MainInfo />
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
                    <ChartMass />
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
                <ChartSkinfold />
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
                        <iconBody width="100" class="flex-none" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
