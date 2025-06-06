<script setup>
import RadarComparison from "@components/Charts/Analytics/RadarComparison.vue";
import AthleteRadar from "@components/Charts/Analytics/AthleteRadar.vue";
import FinalRadar from "@components/Charts/Analytics/FinalRadar.vue";
import ChartTrainingZones from "@/components/Charts/Analytics/ChartTrainingZones.vue";
import VueSpeedometer from "vue-speedometer";
import ChartDistanceDistribution from "@/components/Charts/Analytics/ChartDistanceDistribution.vue";
import MainInfo from "@/components/Containers/MainInfo.vue";
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Аналитика</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <h2 class="col-span-full font-medium text-2xl text-gray-900">Основные спортивные показатели</h2>
            <div class="col-span-full bg-white p-4 rounded-xl shadow-card">
                <MainInfo />
            </div>
            <div class="grid md:grid-cols-3 gap-4">
                <FinalRadar />
                <RadarComparison />
                <AthleteRadar />
            </div>
            <div class="bg-white p-4 rounded-xl shadow-card flex justify-around gap-4">
                <div class="flex flex-col gap-4 items-center">
                    <h3 class="font-medium text-gray-900">Декабрь 2023</h3>
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
                    <h3 class="font-medium text-gray-900">Апрель 2025</h3>
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
            <div class="grid md:grid-cols-2 gap-4">
                <ChartTrainingZones />
                <ChartDistanceDistribution />
            </div>
        </div>
    </main>
</template>
