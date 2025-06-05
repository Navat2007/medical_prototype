<script setup>
import { computed } from "vue";
const props = defineProps({ value: Number });

const color = computed(() => {
    if (props.value >= 7.5) return "text-green-500 bg-green-100";
    if (props.value >= 6) return "text-yellow-500 bg-yellow-100";
    return "text-secondary-500 bg-secondary-100";
});
</script>

<template>
    <p :class="[color, 'inline-block rounded-lg px-2']">{{ value }}</p>
</template>
