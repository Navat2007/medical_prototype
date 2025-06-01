<script setup>
import iconFio from "@assets/icons/10.svg";
import iconSpo from "@assets/icons/09.svg";
import iconMed from "@assets/icons/08.svg";
import iconHei from "@assets/icons/06.svg";
import iconTime from "@assets/icons/11.svg";
import iconFood from "@assets/icons/12.svg";
import iconPos from "@assets/icons/13.svg";
import iconAten from "@assets/icons/14.svg";
import iconMosh from "@assets/icons/15.svg";
import iconMet from "@assets/icons/04.svg";
import iconAtom from "@assets/icons/16.svg";
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Молекулярная медицина</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <!-- Информация -->
            <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
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
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <div class="flex flex-wrap items-center gap-3 mb-4">
                    <div class="text-sm text-muted-color mr-2">Типы генотипов:</div>
                    <div class="flex items-center">
                        <span class="inline-block w-3 h-3 rounded-full bg-primary-500 mr-1"></span>
                        <span class="text-sm">Типичный</span>
                    </div>
                    <div class="flex items-center">
                        <span class="inline-block w-3 h-3 rounded-full bg-orange-500 mr-1"></span>
                        <span class="text-sm">Гетерозиготный</span>
                    </div>
                    <div class="flex items-center">
                        <span class="inline-block w-3 h-3 rounded-full bg-secondary-500 mr-1"></span>
                        <span class="text-sm">Редкий/Риск</span>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b border-border">
                                <th class="text-left py-3 text-muted font-medium">Маркер</th>
                                <th class="text-left py-3 text-muted font-medium">Генотип</th>
                                <th class="text-left py-3 text-muted font-medium">Функция</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <iconAtom class="w-6 h-6 mr-2 text-primary-500" />
                                        <div>
                                            <span class="font-medium">ACTN3</span>
                                            <span class="text-muted-color ml-1">rs1815739</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-primary-500 bg-primary-100">CC</span>
                                </td>
                                <td class="py-3 text-muted-foreground">Скоростно-силовые показатели</td>
                            </tr>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <iconAtom class="w-6 h-6 mr-2 text-primary-500" />
                                        <div>
                                            <span class="font-medium">ACE</span>
                                            <span class="text-muted-color ml-1">rs4646994</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-orange-500 bg-orange-100">ID</span>
                                </td>
                                <td class="py-3 text-muted-foreground">Выносливость/сила</td>
                            </tr>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <iconAtom class="w-6 h-6 mr-2 text-primary-500" />
                                        <div>
                                            <span class="font-medium">PPARA</span>
                                            <span class="text-muted-color ml-1">rs4253778</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-orange-500 bg-orange-100">GC</span>
                                </td>
                                <td class="py-3 text-muted-foreground">Выносливость</td>
                            </tr>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <iconAtom class="w-6 h-6 mr-2 text-primary-500" />
                                        <div>
                                            <span class="font-medium">PPARGC1A</span>
                                            <span class="text-muted-color ml-1">rs8192678</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-orange-500 bg-orange-100">Gly/Ser</span>
                                </td>
                                <td class="py-3 text-muted-foreground">Аэробная выносливость</td>
                            </tr>
                            <tr class="border-b border-border last:border-0">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <iconAtom class="w-6 h-6 mr-2 text-primary-500" />
                                        <div>
                                            <span class="font-medium">AMPD1</span>
                                            <span class="text-muted-color ml-1">(rs17602729)</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm text-primary-500 bg-primary-100">CC</span>
                                </td>
                                <td class="py-3 text-muted-foreground">Восстановление после нагрузок</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
