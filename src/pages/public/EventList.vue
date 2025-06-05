<script setup>
const events = [
    {
        date: "20.04.2025",
        title: "УМО",
        time: "09:00",
        place: "Адрес",
        type: "Медосмотр",
        status: "Прошло",
    },
    {
        date: "25.04.2025",
        title: "ЭКО",
        time: "10:15",
        place: "Стадион",
        type: "Спорт",
        status: "Прошло",
    },
    {
        date: "27.04.2025",
        title: "Гематологический скрининг",
        time: "07:00",
        place: "каб. 212",
        type: "Медицинское",
        status: "Прошло",
    },
    {
        date: "27.04.2025",
        title: "Антропометрия",
        time: "07:15",
        place: "комн. 156",
        type: "Диагностика",
        status: "Прошло",
    },
    {
        date: "03.05.2025",
        title: "Диетолог",
        time: "12:20",
        place: "Холл",
        type: "Консультация",
        status: "Прошло",
    },
    {
        date: "03.05.2025",
        title: "Психолог",
        time: null,
        place: null,
        type: "Консультация",
        status: "Прошло",
    },
];

const typeColors = {
    Медосмотр: "bg-blue-100 text-blue-800",
    Спорт: "bg-green-100 text-green-800",
    Медицинское: "bg-purple-100 text-purple-800",
    Диагностика: "bg-yellow-100 text-yellow-800",
    Консультация: "bg-gray-100 text-gray-800",
};
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Лист событий</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <div class="bg-white border rounded-lg shadow-sm overflow-auto">
                <table class="min-w-full text-sm text-left">
                    <thead class="bg-gray-50 text-gray-600">
                        <tr>
                            <th class="px-4 py-2">Дата</th>
                            <th class="px-4 py-2">Время</th>
                            <th class="px-4 py-2">Событие</th>
                            <th class="px-4 py-2">Тип</th>
                            <th class="px-4 py-2">Место</th>
                            <th class="px-4 py-2">Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(event, i) in events" :key="i" class="border-t hover:bg-gray-50">
                            <td class="px-4 py-2 text-gray-700">{{ event.date }}</td>
                            <td class="px-4 py-2 text-gray-700">{{ event.time || "—" }}</td>
                            <td class="px-4 py-2 text-gray-800 font-medium">{{ event.title }}</td>
                            <td class="px-4 py-2">
                                <span class="rounded-full text-sm px-2 py-0.5" :class="typeColors[event.type] || 'bg-gray-100 text-gray-600'">
                                    {{ event.type }}
                                </span>
                            </td>
                            <td class="px-4 py-2 text-gray-600">{{ event.place || "—" }}</td>
                            <td class="px-4 py-2">
                                <span class="rounded-full text-gray-600 text-sm px-2 py-0.5 bg-gray-100" v-if="event.status === 'Прошло'">Прошло</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
