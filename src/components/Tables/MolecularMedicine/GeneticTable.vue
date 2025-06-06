<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: [],
    },
});
</script>

<template>
    <div class="w-full overflow-auto">
        <table class="min-w-full text-sm text-left border">
            <thead class="bg-gray-50">
                <tr>
                    <th class="p-2 border">Ген</th>
                    <th class="p-2 border">Генотип</th>
                    <th class="p-2 border">Экзон</th>
                    <th class="p-2 border">Замена АК</th>
                    <th class="p-2 border">Примечание</th>
                    <th class="p-2 border">Частота</th>
                    <th class="p-2 border">Баллы</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.gene">
                    <td class="p-2 border italic">{{ item.gene }}</td>
                    <td class="p-2 border font-bold">{{ item.genotype }}</td>
                    <td class="p-2 border">{{ item.exon || "-" }}</td>
                    <td class="p-2 border">{{ item.aaChange || "-" }}</td>
                    <td class="p-2 border">{{ item.comment || "-" }}</td>
                    <td class="p-2 border">{{ item.freq || "-" }}</td>
                    <td class="p-2 border">
                        <div class="flex gap-1">
                            <span v-for="n in 3" :key="n" class="w-2 h-2 rounded-full" :class="n <= item.score ? 'bg-blue-600' : 'bg-gray-200'" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
