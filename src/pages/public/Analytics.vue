<script setup>

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