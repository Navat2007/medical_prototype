<script setup>
const supplements = [
    {
        category: "Витаминно-минеральный комплекс",
        name: "Спортивные мультивитамины",
        dose: "1 капсула в день",
        duration: "3 месяца",
    },
    {
        category: "Углеводные гели",
        name: "Arena Gel",
        dose: "1 упаковка каждые 30–45 минут во время нагрузки",
        duration: "во время длительных тренировок или соревнований",
    },
    {
        category: "Протеины",
        name: "Сывороточный протеин",
        dose: "30 г белка за приём 1 раз в день",
        duration: "3 месяца",
    },
    {
        category: "Адаптогены",
        name: "Адаптоген X",
        dose: "2 капсулы / день",
        duration: "3 месяца",
    },
    {
        category: "Эрогенные средства",
        name: "Кофеин",
        dose: "4 мг/кг",
        duration: "За 60 минут до соревновательного старта",
    },
    {
        category: "Лекарственные препараты",
        name: "Фортедетрим",
        dose: "10000 МЕ",
        duration: "1 раз в 5 дней, 3 месяца",
    },
];
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Программа фармакологической поддержки</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div class="bg-white p-4 rounded-xl shadow-card">
                <MainInfo />
            </div>
            <h2 class="font-medium text-gray-900">Препараты</h2>
            <div class="w-full overflow-auto">
                <table class="min-w-full text-sm text-left border">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="p-2 border text-left">Категория</th>
                            <th class="p-2 border text-left">Название</th>
                            <th class="p-2 border text-left">Дозировка</th>
                            <th class="p-2 border text-left">Продолжительность приёма</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in supplements" :key="i" class="border-t hover:bg-gray-50">
                            <td class="p-2 border font-bold">{{ item.category }}</td>
                            <td class="p-2 border">{{ item.name }}</td>
                            <td class="p-2 border">{{ item.dose }}</td>
                            <td class="p-2 border">{{ item.duration }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
