<template>
    <div class="flex items-center justify-between px-4 py-2 border rounded">
        <div>
            <div class="font-medium text-gray-800">{{ data.name }}</div>
            <div class="text-xs text-gray-500">Норма: {{ data.norm }}</div>
        </div>
        <div :class="[data.inRange ? 'text-green-600' : 'text-red-500', 'text-sm font-semibold']">
            {{ data.value }} <span class="text-gray-400">{{ data.unit }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: Object,
});
</script>
