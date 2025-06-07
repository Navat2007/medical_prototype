<script setup>
import MainInfo from "@/components/Containers/MainInfo.vue";
import ChartLoadTesting from "@/components/Charts/MetabolicSupport/ChartLoadTesting.vue";
import ChartNutrition from "@/components/Charts/MetabolicSupport/ChartNutrition.vue";
import ChartEnergy from "@/components/Charts/MetabolicSupport/ChartEnergy.vue";
import VueSpeedometer from "vue-speedometer";
import { Activity, HeartPulse, Utensils, Moon, StretchHorizontal, AlertCircle } from "lucide-vue-next";
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Метаболический профиль</h1>
        <!-- Нагрузочное тестирование -->
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div>
                <h2 class="font-medium text-2xl text-gray-900">Нагрузочное тестирование</h2>
                <p>Нагрузочное тестирование с газоанализатором</p>
            </div>
            <div class="col-span-full bg-white p-4 rounded-xl shadow-card">
                <MainInfo />
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
                <div class="md:col-span-2 bg-white rounded-xl shadow-card p-4">
                    <div class="grid gap-4 md:grid-cols-2 mb-4">
                        <div class="flex flex-col gap-4">
                            <h3 class="font-medium text-gray-900">Максимальные показатели</h3>
                            <ul class="grid md:grid-cols-2">
                                <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                                    <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                        <Activity :class="['w-4 h-4 text-muted']" />
                                        Мощность
                                    </p>
                                    <p class="font-medium text-lg text-gray-900">180 Вт</p>
                                </li>
                                <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                                    <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                        <HeartPulse :class="['w-4 h-4 text-muted']" />
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
                            <ChartLoadTesting />
                        </div>
                    </div>
                    <div class="flex gap-1 items-start p-4 rounded-lg bg-primary-100">
                        <AlertCircle :class="['flex-none w-5 h-5 text-primary-500']" />
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
                                <Activity :class="['w-4 h-4 text-muted']" />
                                Мощность
                            </p>
                            <p class="font-medium text-lg text-secondary-500">160 Вт</p>
                        </li>
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                <HeartPulse :class="['w-4 h-4 text-muted']" />
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
                        <AlertCircle :class="['flex-none w-5 h-5 text-secondary-500']" />
                        <p class="text-sm text-muted-color">Анаэробный порог (АнП) - это интенсивность, при которой начинается накопление лактата в мышцах.</p>
                    </div>
                </div>
                <!-- Показатели АэП -->
                <div class="flex flex-col gap-4 bg-white rounded-xl shadow-card p-4">
                    <h3 class="font-medium text-gray-900">Показатели АэП</h3>
                    <ul class="grid md:grid-cols-2">
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                <Activity :class="['w-4 h-4 text-muted']" />
                                Мощность
                            </p>
                            <p class="font-medium text-lg text-[#66BB6A]">110 Вт</p>
                        </li>
                        <li class="flex flex-col gap-2 pb-2 border-b border-gray-200">
                            <p class="flex items-center gap-1 text-xs text-muted-color flex-auto">
                                <HeartPulse :class="['w-4 h-4 text-muted']" />
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
                        <AlertCircle :class="['flex-none w-5 h-5 text-[#66BB6A]']" />
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
            <div class="grid md:grid-cols-3 gap-4">
                <!-- Условия теста -->
                <div class="col-span-full content-start bg-white p-4 rounded-xl shadow-card grid gap-4">
                    <h3 class="font-medium text-gray-900">Условия теста</h3>
                    <div class="grid md:grid-cols-3 gap-4 max-w-5xl">
                        <div class="flex items-center gap-3">
                            <div class="flex-shrink-0 bg-gray-100 p-2 rounded-lg">
                                <Utensils :class="['w-6 h-6 text-primary-500']" />
                            </div>
                            <div>
                                <p class="text-muted-foreground text-sm">Период от приёма пищи</p>
                                <p class="text-gray-900 font-medium">>8 часов</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex-shrink-0 bg-gray-100 p-2 rounded-lg">
                                <Moon :class="['w-6 h-6 text-primary-500']" />
                            </div>
                            <div>
                                <p class="text-muted-foreground text-sm">Период покоя</p>
                                <p class="text-gray-900 font-medium">>1 час</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex-shrink-0 bg-gray-100 p-2 rounded-lg">
                                <StretchHorizontal :class="['w-6 h-6 text-primary-500']" />
                            </div>
                            <div>
                                <p class="text-muted-foreground text-sm">Позиция при тесте</p>
                                <p class="text-gray-900 font-medium">В покое</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Субстраты -->
                <div class="col-span-2 grid md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow-card">
                    <h3 class="col-span-full font-medium text-gray-900">Субстраты</h3>
                    <div class="col-span-3">
                        <ChartEnergy />
                    </div>
                    <div class="grid gap-4">
                        <div class="flex flex-col items-center p-2 rounded-xl shadow-card bg-secondary-100">
                            <div class="flex items-center gap-1">
                                <div class="w-3 h-3 rounded-full bg-secondary-500"></div>
                                <p class="text-xs text-center text-muted-color">Липиды</p>
                            </div>
                            <p class="text-lg font-semibold text-center text-gray-900">1077</p>
                            <p class="text-xs text-center text-muted-color">ккал / 55.7%</p>
                        </div>
                        <div class="flex flex-col items-center p-3 rounded-xl shadow-card bg-[#ecffed]">
                            <div class="flex items-center gap-1">
                                <div class="w-3 h-3 rounded-full bg-[#66BB6A]"></div>
                                <p class="text-xs text-center text-muted-color">Углеводы</p>
                            </div>
                            <p class="text-lg font-semibold text-center text-gray-900">895</p>
                            <p class="text-xs text-center text-muted-color">ккал / 44.3%</p>
                        </div>
                        <div class="flex flex-col items-center p-3 rounded-xl shadow-card bg-primary-100">
                            <div class="flex items-center gap-1">
                                <div class="w-3 h-3 rounded-full bg-primary-500"></div>
                                <p class="text-xs text-center text-muted-color">Белки</p>
                            </div>
                            <p class="text-lg font-semibold text-center text-gray-900">0</p>
                            <p class="text-xs text-center text-muted-color">ккал / 0%</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-card">
                    <div class="max-w-90 mx-auto">
                        <ChartNutrition />
                    </div>
                </div>
            </div>
            <!-- Метаболизм -->
            <div class="bg-white p-4 rounded-xl shadow-card">
                <h3 class="font-medium text-gray-900 mb-4">Метаболизм</h3>
                <div class="md:flex gap-4">
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
                        <div class="flex gap-4">
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
                        </div>
                        <div class="p-3 rounded-lg bg-primary-100 max-w-lg">
                            <p class="text-xs text-primary-500">
                                RMR (Resting Metabolic Rate) - скорость метаболизма в состоянии покоя. RQ (Respiratory Quotient) - дыхательный коэффициент, отражающий тип
                                используемого субстрата.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
