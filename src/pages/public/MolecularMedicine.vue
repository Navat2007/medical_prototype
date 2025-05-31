<script setup>

</script>

<template>
  <main class="flex-1 p-6">
    <h1 class="text-2xl font-bold text-blue-700 mb-4">Метаболический профиль</h1>

    <div class="bg-white p-4 rounded shadow-sm">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 mb-4">
        <div><strong>ФИО:</strong><br />Иванов Алексей Сергеевич</div>
        <div><strong>Вид спорта:</strong><br />Гимнастика</div>
        <div><strong>Дата рождения:</strong><br />05.05.2005 (20 лет)</div>
        <div><strong>Рост:</strong><br />163 см</div>
        <div><strong>Вес:</strong><br />55,4 кг</div>
        <div><strong>ИМТ:</strong><br /><span class="text-blue-600 font-bold text-lg">20</span></div>
        <div><strong>Сумма складок:</strong><br /><span class="text-red-600 font-bold text-lg">70 мм</span></div>
        <div><strong>Масса мышц:</strong><br />25,3 кг</div>
        <div><strong>Масса жира:</strong><br />4,8 кг</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 class="font-semibold mb-2">Кожно-жировые складки</h2>
          <img src="https://via.placeholder.com/400x200?text=Bar+Chart" class="rounded border" />
        </div>
        <div>
          <h2 class="font-semibold mb-2">Обхваты</h2>
          <img src="https://via.placeholder.com/200x300?text=Body+Outline" class="rounded border mx-auto" />
          <ul class="mt-2 text-sm space-y-1">
            <li>🔵 Плечо: 24,8 см</li>
            <li>🔵 Предплечье: 22,5 см</li>
            <li>🔴 Бедро: 52,5 см</li>
            <li>🟠 Голень: 36 см</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>