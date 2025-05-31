<script setup>
import {onMounted, ref} from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { Pie, Bar } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

const menuItems = ref([
  { label: 'Профиль' },
  { label: 'Метаболический профиль', class: 'font-semibold bg-blue-100' },
  { label: 'Молекулярная медицина' },
  { label: 'Психофизиология' },
  { label: 'Биомеханика' }
]);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
};

const bodyCompositionData = {
  labels: ['Мышечная масса', 'Жировая масса', 'Остальное'],
  datasets: [
    {
      data: [45.6, 18.9, 35.5],
      backgroundColor: ['#3B82F6', '#EF4444', '#CBD5E1'],
      hoverOffset: 4
    }
  ]
};

const skinfoldData = {
  labels: ['Лопатка', 'Трицепс', 'Бицепс', 'Предплечье', 'Живот', 'Бедро', 'Голень'],
  datasets: [
    {
      label: 'Толщина (мм)',
      data: [6.5, 14, 5.5, 4.5, 8, 19, 12],
      backgroundColor: '#60A5FA'
    }
  ]
};
</script>

<template>
  <!-- Main Content -->
  <main class="flex-1 overflow-y-auto p-6">
    <h1 class="text-3xl font-bold text-red-600 mb-6">Метаболический профиль</h1>
    <p-tabView>
      <p-tabPanel header="Антропометрия">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p-card>
            <template #title>Таблица показателей</template>
            <template #content>
              <p>ИМТ: 20</p>
              <p>Мышечная масса: 45.6%</p>
              <p>Жировая масса: 18.9%</p>
              <p>Масса мышц: 25.3 кг</p>
              <p>Масса жира: 4.8 кг</p>
              <p>Сумма кожных складок: 70 мм</p>
            </template>
          </p-card>
          <p-card>
            <template #title>График состава тела</template>
            <template #content>
              <Pie :data="bodyCompositionData" :options="chartOptions" />
            </template>
          </p-card>
          <p-card>
            <template #title>Кожно-жировые складки</template>
            <template #content>
              <Bar :data="skinfoldData" :options="chartOptions" />
            </template>
          </p-card>
        </div>
      </p-tabPanel>
      <p-tabPanel header="Нагрузочное тестирование">
        <p-card class="mb-4">
          <template #title>Максимальные показатели</template>
          <template #content>
            <p>Потребление O₂ (абс): 54.4 л/мин</p>
            <p>Потребление O₂ (отн): 39 мл/мин/кг</p>
            <p>ЧСС макс: 178 уд/мин</p>
          </template>
        </p-card>
      </p-tabPanel>
      <p-tabPanel header="Диетология">
        <p-card class="mb-4">
          <template #title>Метаболизм и питание</template>
          <template #content>
            <p>Калорийность: 1156 ккал</p>
            <p>Жиры: 32%</p>
            <p>Углеводы: 54.7%</p>
            <p>Белки: 13%</p>
            <p>RMR: 1972 ккал/день — Быстрый метаболизм</p>
            <p>RQ: 0.84 — Утилизация жиров и углеводов</p>
          </template>
        </p-card>
      </p-tabPanel>
    </p-tabView>
  </main>
</template>

<style scoped>

</style>