<script setup>
import RadarComparison from "@components/Charts/Analytics/RadarComparison.vue";
import AthleteRadar from "@components/Charts/Analytics/AthleteRadar.vue";
import FinalRadar from "@components/Charts/Analytics/FinalRadar.vue";
import RadarHenotip from "@components/Charts/Analytics/RadarHenotip.vue";
import iconFio from "@assets/icons/10.svg";
import iconSpo from "@assets/icons/09.svg";
import iconMed from "@assets/icons/08.svg";
import iconHei from "@assets/icons/06.svg";
import iconCheck from "@assets/icons/18.svg";
import VueSpeedometer from "vue-speedometer";
</script>

<template>
  <main class="flex-1 flex flex-col gap-5">
    <h1 class="text-3xl font-medium text-primary-500">Аналитика</h1>
    <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-3 gap-4">
      <!-- Информация -->
      <div class="col-span-full bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
            <iconFio class="w-6 h-6 text-primary-500"/>
          </div>
          <div>
            <p class="text-muted-foreground text-sm">ФИО:</p>
            <p class="text-gray-900 font-medium">Иванов Алексей Сергеевич</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
            <iconSpo class="w-6 h-6 text-primary-500"/>
          </div>
          <div>
            <p class="text-muted-foreground text-sm">Вид спорта:</p>
            <p class="text-gray-900 font-medium">Гимнастика</p>
          </div>
          <div>
            <p class="text-muted-foreground text-sm">Разряд:</p>
            <p class="text-gray-900 font-medium">МС</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
            <iconMed class="w-6 h-6 text-primary-500"/>
          </div>
          <div>
            <p class="text-muted-foreground text-sm">Дата рождения:</p>
            <p class="text-gray-900 font-medium">05.05.2005 (20 лет)</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
            <iconHei class="w-6 h-6 text-primary-500"/>
          </div>
          <div>
            <p class="text-muted-foreground text-sm">Рост:</p>
            <p class="text-gray-900 font-medium">163 см</p>
          </div>
          <div>
            <p class="text-muted-foreground text-sm">Вес:</p>
            <p class="text-gray-900 font-medium">55,4 кг</p>
          </div>
        </div>
      </div>
      <div>
        <FinalRadar/>
      </div>
      <div>
        <RadarComparison/>
      </div>
      <div>
        <AthleteRadar/>
      </div>
    </div>
    <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
      <div class="flex flex-col gap-4 items-center">
        <span>Декабрь 2023</span>
        <VueSpeedometer
            :value="105"
            :minValue="0"
            :maxValue="150"
            :segments="5"
            :segmentColors="['#ff9999', '#f4b183', '#ffe699', '#a9d18e', '#99ccff']"
            :customSegmentLabels="[
                {
                    text: 'Низко',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
                {
                    text: 'Средне',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
                {
                    text: 'Хорошо',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
                {
                    text: 'Отлично',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
                {
                    text: 'Превосходно',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
            ]"
        />
      </div>

      <div class="flex flex-col gap-4 items-center">
        <span>Апрель 2025</span>
        <VueSpeedometer
            :value="80"
            :minValue="0"
            :maxValue="150"
            :segments="5"
            :segmentColors="['#ff9999', '#f4b183', '#ffe699', '#a9d18e', '#99ccff']"
            :customSegmentLabels="[
                {
                    text: 'Низко',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
                {
                    text: 'Средне',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
                {
                    text: 'Хорошо',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
                {
                    text: 'Отлично',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
                {
                    text: 'Превосходно',
                    position: 'INSIDE',
                    color: '#555',
                    fontSize: '9px',
                },
            ]"
        />
      </div>
    </div>
  </main>
</template>
