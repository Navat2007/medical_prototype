<script setup>
import {onMounted, ref} from "vue";

const chartData = ref();
const chartOptions = ref();
const chartRadarData = ref();
const chartRadarOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
      }
    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: textColor
        }
      }
    }
  };
};

const setRadarChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        borderColor: documentStyle.getPropertyValue('--p-gray-400'),
        pointBackgroundColor: documentStyle.getPropertyValue('--p-gray-400'),
        pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
        pointHoverBackgroundColor: textColor,
        pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        borderColor: documentStyle.getPropertyValue('--p-pink-400'),
        pointBackgroundColor: documentStyle.getPropertyValue('--p-pink-400'),
        pointBorderColor: documentStyle.getPropertyValue('--p-pink-400'),
        pointHoverBackgroundColor: textColor,
        pointHoverBorderColor: documentStyle.getPropertyValue('--p-pink-400'),
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };
};
const setRadarChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      r: {
        grid: {
          color: textColorSecondary
        }
      }
    }
  };
}

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();

  chartRadarData.value = setRadarChartData();
  chartRadarOptions.value = setRadarChartOptions();
});
</script>

<template>
  <!-- Main Content -->
  <main class="flex-1 overflow-y-auto p-6">
    <h1 class="text-3xl font-bold text-red-600 mb-6">Метаболический профиль</h1>

    <Tabs value="0" scrollable>
      <TabList>
        <Tab value="0" class="flex gap-2">Антропометрия</Tab>
        <Tab value="1" class="flex gap-2">Нагрузочное тестирование</Tab>
        <Tab value="2" class="flex gap-2">Диетология</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <Card>
            <template #title>Показатели</template>
            <template #content>
              <p>ИМТ: 20</p>
              <p>Доля мышечной массы: 45.6%</p>
              <p>Доля жировой массы: 18.9%</p>
              <p>Сумма кожно-жировых складок: 70 мм</p>

              <Divider type="dashed" />
              <div class="card flex justify-center">
                <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
              </div>
              <Divider type="dashed" />
              <div class="card flex justify-center">
                <Chart type="radar" :data="chartRadarData" :options="chartRadarOptions" class="w-full md:w-[30rem]" />
              </div>
            </template>
          </Card>
        </TabPanel>
        <TabPanel value="1">
          <Card>
            <template #title>Максимальные показатели</template>
            <template #content>
              <p>Потребление O₂ (абс): 54.4 л/мин</p>
              <p>Потребление O₂ (отн): 39 мл/мин/кг</p>
              <p>ЧСС макс: 178 уд/мин</p>
            </template>
          </Card>
        </TabPanel>
        <TabPanel value="2">
          <Card>
            <template #title>Метаболизм и питание</template>
            <template #content>
              <p>Калорийность: 1156 ккал</p>
              <p>Жиры: 32%</p>
              <p>Углеводы: 54.7%</p>
              <p>Белки: 13%</p>
              <p>RMR: 1972 ккал/день — Быстрый метаболизм</p>
              <p>RQ: 0.84 — Утилизация жиров и углеводов</p>
            </template>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </main>
</template>

<style scoped>

</style>