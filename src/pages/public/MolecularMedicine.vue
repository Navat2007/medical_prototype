<script setup>
import iconAtom from "@assets/icons/16.svg";
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Молекулярная медицина</h1>
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
    </main>
</template>

<style scoped></style>
