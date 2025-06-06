<template>
    <div class="flex items-center justify-between p-4 rounded-xl shadow-card">
        <div>
            <div class="font-semibold text-gray-900 flex items-center gap-1">
                {{ data.name }}
                <div class="relative group inline-block text-gray-400 cursor-pointer">
                    <Info class="w-4 h-4" />
                    <div class="absolute z-10 hidden group-hover:block text-xs text-gray-700 bg-white border rounded p-2 shadow-md top-5 left-0 w-44">
                        Норма: {{ data.norm[0] }} - {{ data.norm[1] }}<br />
                        Обновлено: {{ data.updated }}
                    </div>
                </div>
            </div>
            <div class="text-xs text-gray-500">Норма: {{ data.norm[0] }}–{{ data.norm[1] }} {{ data.unit }}</div>
        </div>
        <div class="flex items-center gap-2">
            <span class="text-base font-semibold text-gray-900"> {{ data.value }} {{ data.unit }} </span>
            <component
                :is="data.value < data.norm[0] || data.value > data.norm[1] ? AlertCircle : CheckCircle2"
                :class="data.value < data.norm[0] || data.value > data.norm[1] ? 'text-red-500' : 'text-green-500'"
                class="w-5 h-5"
            />
        </div>
    </div>
</template>

<script setup>
import { CheckCircle2, AlertCircle, Info } from "lucide-vue-next";
defineProps({
    data: Object,
});
</script>
