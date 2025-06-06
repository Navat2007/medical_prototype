<script setup>
import { computed } from "vue";

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: [],
    },
});

// Группировка по item.group
const grouped = computed(() => {
    const map = { __ungrouped: [] };
    for (const item of props.items) {
        const group = item.group || "__ungrouped";
        if (!map[group]) map[group] = [];
        map[group].push(item);
    }
    return map;
});
</script>

<template>
    <div class="w-full overflow-auto">
        <table class="min-w-full text-sm text-left border">
            <thead class="bg-gray-50">
                <tr>
                    <th class="p-2 border">Идентификатор варианта</th>
                    <th class="p-2 border">Генотип</th>
                    <th class="p-2 border">Примечание</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(groupItems, groupName) in grouped" :key="groupName">
                    <template v-if="groupName !== '__ungrouped'">
                        <tr class="bg-gray-50 font-semibold text-center">
                            <td colspan="3" class="p-2 border">{{ groupName }}</td>
                        </tr>
                    </template>
                    <tr v-for="(item, index) in groupItems" :key="groupName + '-' + index">
                        <td class="p-2 border align-top">{{ item.variant }}</td>
                        <td class="p-2 border font-bold align-top">{{ item.genotype }}</td>
                        <td class="p-2 border align-top">
                            <div v-if="item.comment">
                                {{ item.comment }}
                            </div>
                            <span v-else>-</span>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
th:nth-child(2),
td:nth-child(2) {
    white-space: nowrap;
}
</style>
