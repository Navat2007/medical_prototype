<script setup>
import iconFio from "@assets/icons/10.svg";
import iconSpo from "@assets/icons/09.svg";
import iconMed from "@assets/icons/08.svg";
import iconHei from "@assets/icons/06.svg";
</script>

<template>
    <div class="grid md:grid-cols-2 gap-4 max-w-4xl">
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
                <p class="text-gray-900 font-medium">Лёгкая атлетика</p>
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
</template>
