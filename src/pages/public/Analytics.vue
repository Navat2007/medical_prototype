<script setup>
import RadarComparison from "@components/Charts/Analytics/RadarComparison.vue";
import AthleteRadar from "@components/Charts/Analytics/AthleteRadar.vue";
import FinalRadar from "@components/Charts/Analytics/FinalRadar.vue";
import RadarHenotip from "@components/Charts/Analytics/RadarHenotip.vue";
import iconFio from "@assets/icons/10.svg";
import iconSpo from "@assets/icons/09.svg";
import iconMed from "@assets/icons/08.svg";
import iconHei from "@assets/icons/06.svg";
import iconCheck from "@assets/icons/18.svg";
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Аналитика</h1>
        <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-3 gap-4">
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
                        <p class="text-gray-900 font-medium">Гимнастика</p>
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
            <div><FinalRadar /></div>
            <div>
                <RadarComparison />
            </div>
            <div><AthleteRadar /></div>
        </div>
        <div class="grid gap-4 bg-white p-4 rounded-xl shadow-card">
            <h2 class="font-medium text-2xl text-gray-900">Сводка по генетическому анализу</h2>
            <div class="grid md:grid-cols-5 gap-4">
                <div class="col-span-4 bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                    <h3 class="font-medium text-gray-900">Анализируемые генетические варианты</h3>
                    <ul class="grid md:grid-cols-3">
                        <li class="col-span-full flex flex-col gap-2 py-2 border-b border-gray-200">
                            <span class="text-sm">Всего проанализировано:</span>
                            <p class="font-medium text-lg text-gray-900">112 вариантов</p>
                        </li>
                        <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                            <div class="flex items-center">
                                <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                                <span class="text-sm">Значимых аллелей:</span>
                            </div>
                            <p class="font-medium text-lg text-primary-500">28</p>
                        </li>
                        <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                            <div class="flex items-center">
                                <span class="inline-block w-2 h-2 rounded-full bg-[#66BB6A] mr-1"></span>
                                <span class="text-sm">Благоприятных:</span>
                            </div>
                            <p class="font-medium text-lg text-[#66BB6A]">18</p>
                        </li>
                        <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                            <div class="flex items-center">
                                <span class="inline-block w-2 h-2 rounded-full bg-secondary-500 mr-1"></span>
                                <span class="text-sm">Неблагоприятных:</span>
                            </div>
                            <p class="font-medium text-lg text-secondary-500">10</p>
                        </li>
                    </ul>
                    <div class="col-span-full flex gap-1 items-start p-4 rounded-lg bg-[#ecffed]">
                        <iconCheck class="w-7 h-7 text-muted text-[#66BB6A]" />
                        <p class="text-sm text-muted-color">
                            <span class="font-medium text-base block">Не обнаружено патогенных вариантов.</span>
                            В геноме спортсмена не обнаружено клинически значимых патогенных вариантов, связанных со спортивной деятельностью.
                        </p>
                    </div>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                    <h3 class="font-medium text-gray-900">Генетический профиль</h3>
                    <div>
                        <RadarHenotip />
                    </div>
                </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h3 class="font-medium text-gray-900">Технический отчет</h3>
                <ul class="">
                    <li class="flex items-center gap-2 py-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                        <p class="text-muted-color">Метод исследования:</p>
                        <p class="font-medium text-gray-900">полногеномное секвенирование (Whole Genome Sequencing)</p>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                        <p class="text-muted-color">Количество нуклеотидов:</p>
                        <p class="font-medium text-gray-900">≥90 млрд</p>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                        <p class="text-muted-color">Тип прочтения:</p>
                        <p class="font-medium text-gray-900">150 п.н., парно-концевое</p>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                        <p class="text-muted-color">Качество выходных данных секвенирования:</p>
                        <p class="font-medium text-gray-900">≥90% Q20, ≥80% Q30</p>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>
