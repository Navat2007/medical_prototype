<script setup>
import { ref } from "vue";
import iconFio from "@assets/icons/10.svg";
import iconSpo from "@assets/icons/09.svg";
import iconMed from "@assets/icons/08.svg";
import iconHei from "@assets/icons/06.svg";
import { Activity, Dumbbell, Bone, Apple, AlertCircle, Brain } from "lucide-vue-next";
import GeneticTable from "@components/Tables/MolecularMedicine/GeneticTable.vue";
import RadarHenotip from "@components/Charts/Analytics/RadarHenotip.vue";
import VueSpeedometer from "vue-speedometer";

const activeTab = ref("endurance");

const tabs = [
    { value: "endurance", label: "Выносливость", icon: Activity },
    { value: "power", label: "Сила", icon: Dumbbell },
    { value: "structure", label: "Прочность", icon: Bone },
    { value: "nutrition", label: "Питание", icon: Apple },
    { value: "injuries", label: "Травмы", icon: AlertCircle },
    { value: "psychology", label: "Психология", icon: Brain },
];

const items = {
    "Сила (прочность)": [
        {
            gene: "ACTG1",
            genotype: "AA",
            exon: "-",
            aaChange: "-",
            comment: "Соответствует прочности",
            freq: "0,29%",
            score: 2,
        },
        {
            gene: "ADPGK-AS1",
            genotype: "CG",
            exon: "-",
            aaChange: "n.2534+2534C>G",
            comment: "гетерозигота",
            freq: "0,57%",
            score: 1,
        },
        {
            gene: "GBF1",
            genotype: "AA",
            exon: "-",
            aaChange: "c.2560-64G>A",
            comment: "Соответствует прочности",
            freq: "0,6%",
            score: 2,
        },
        {
            gene: "MLN",
            genotype: "GG",
            exon: "-",
            aaChange: "-",
            comment: "Соответствует прочности",
            freq: "0,59%",
            score: 2,
        },
        {
            gene: "MMS22L",
            genotype: "CC",
            exon: "-",
            aaChange: "n.431+11995T>C",
            comment: "Не соответствует прочности",
            freq: "-",
            score: 0,
        },
    ],
    "Питание и ожирение": [
        {
            gene: "BDNF",
            genotype: "AA",
            exon: "-",
            aaChange: "c.3+16973A>T",
            comment: "Склонность к избыточной массе тела",
            freq: "0,82%",
            score: 2,
        },
        {
            gene: "FTO",
            genotype: "TA",
            exon: "-",
            aaChange: "c.46-23525T>A",
            comment: "гетерозигота",
            freq: "0,41%",
            score: 1,
        },
        {
            gene: "CYP1A2",
            genotype: "AA",
            exon: "-",
            aaChange: "c.-9-154C>A",
            comment: "Быстрый метаболизатор кофеина",
            freq: "0,67%",
            score: 2,
        },
        {
            gene: "MCM6",
            genotype: "GA",
            exon: "-",
            aaChange: "c.1917+326C>T",
            comment: "Неполная непереносимость лактозы",
            freq: "0,4%",
            score: 1,
        },
        {
            gene: "MCM6",
            genotype: "CT",
            exon: "-",
            aaChange: "c.1362+117G>A",
            comment: "Неполная непереносимость лактозы",
            freq: "0,4%",
            score: 1,
        },
    ],
    "Спортивные травмы": [
        {
            gene: "GDF5",
            genotype: "AA",
            exon: "-",
            aaChange: "c.-275C>T",
            comment: "Склонность к травмам",
            freq: "0,48%",
            score: 2,
        },
        {
            gene: "VEGFA",
            genotype: "AC",
            exon: "-",
            aaChange: "g.43768652 A>C",
            comment: "гетерозигота",
            freq: "0,6%",
            score: 1,
        },
        {
            gene: "SUPT3H",
            genotype: "AG",
            exon: "-",
            aaChange: "c.*53-453T>C",
            comment: "гетерозигота",
            freq: "0,27%",
            score: 1,
        },
        {
            gene: "GNL3",
            genotype: "GA",
            exon: "3",
            aaChange: "p.R39Q",
            comment: "гетерозигота",
            freq: "0,34%",
            score: 1,
        },
        {
            gene: "MCF2L",
            genotype: "GG",
            exon: "-",
            aaChange: "c.279-5076A>G",
            comment: "Не соответствует ОА",
            freq: "0,12%",
            score: 0,
        },
    ],
    "Психологические особенности": [
        {
            gene: "DRD2",
            genotype: "AA",
            exon: "-",
            aaChange: "g.113475529 T>TG",
            comment: "Приверженность к занятию спортом",
            freq: "0,48%",
            score: 1,
        },
    ],
    Выносливость: [
        {
            gene: "ADRB1",
            genotype: "AG",
            exon: "1",
            aaChange: "p.S49G",
            comment: "гетерозигота",
            freq: "0,154%",
            score: 1,
        },
        {
            gene: "ADRB3",
            genotype: "AG",
            exon: "1",
            aaChange: "p.W64R",
            comment: "гетерозигота",
            freq: "-",
            score: 1,
        },
        {
            gene: "BDKRB2",
            genotype: "CT",
            exon: "-",
            aaChange: "Upstream",
            comment: "гетерозигота",
            freq: "0,395%",
            score: 1,
        },
        {
            gene: "IL6",
            genotype: "GG",
            exon: "-",
            aaChange: "Upstream",
            comment: "соответствует выносливости",
            freq: "0,71%",
            score: 2,
        },
        {
            gene: "IL15RA",
            genotype: "GG",
            exon: "4",
            aaChange: "p.N182T",
            comment: "соответствует выносливости",
            freq: "0,55%",
            score: 2,
        },
        {
            gene: "KCNJ11",
            genotype: "СС",
            exon: "1",
            aaChange: "p.K23E",
            comment: "соответствует выносливости",
            freq: "0,71%",
            score: 2,
        },
        {
            gene: "NOS3",
            genotype: "GG",
            exon: "8",
            aaChange: "p.D298E",
            comment: "соответствует выносливости",
            freq: "0,76%",
            score: 2,
        },
        {
            gene: "PPARD",
            genotype: "TT",
            exon: "8",
            aaChange: "c.*1762C>T",
            comment: "соответствует выносливости",
            freq: "0,67%",
            score: 2,
        },
        {
            gene: "SLC2A4",
            genotype: "AA",
            exon: "1",
            aaChange: "c.-162G>A",
            comment: "соответствует выносливости",
            freq: "0,49%",
            score: 2,
        },
        {
            gene: "NOS3",
            genotype: "TT",
            exon: "-",
            aaChange: "c.-51-762C>T",
            comment: "соответствует выносливости",
            freq: "0,3%",
            score: 2,
        },
    ],
    "Сила (мощность)": [
        {
            gene: "AGT",
            genotype: "AG",
            exon: "2",
            aaChange: "p.M259T",
            comment: "гетерозигота",
            freq: "0,578%",
            score: 1,
        },
        {
            gene: "CNDP1",
            genotype: "AG",
            exon: "12",
            aaChange: "c.*339A>G",
            comment: "гетерозигота",
            freq: "-",
            score: 1,
        },
        {
            gene: "ADRB3",
            genotype: "AG",
            exon: "1",
            aaChange: "p.W64R",
            comment: "гетерозигота",
            freq: "0,09%",
            score: 1,
        },
        {
            gene: "AQP1",
            genotype: "СС",
            exon: "4",
            aaChange: "c.*578G>C",
            comment: "соответствует силе",
            freq: "0,51%",
            score: 2,
        },
        {
            gene: "ACTN3",
            genotype: "СТ",
            exon: "15",
            aaChange: "p.R577X",
            comment: "гетерозигота",
            freq: "0,38%",
            score: 1,
        },
        {
            gene: "MTRR",
            genotype: "GG",
            exon: "2",
            aaChange: "p.I22M",
            comment: "соответствует силе",
            freq: "0,45%",
            score: 2,
        },
    ],
};
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Молекулярная медицина</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <h2 class="font-medium text-2xl text-gray-900">Сводка по генетическому анализу</h2>
            <!-- Информация -->
            <div class="bg-white p-4 rounded-xl shadow-card grid md:grid-cols-2 gap-4">
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <iconFio class="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">ФИО:</p>
                        <p class="text-gray-900 font-medium">Иванов Алексей Сергеевич</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <iconSpo class="w-6 h-6 text-primary-500" />
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
                        <iconMed class="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                        <p class="text-muted-foreground text-sm">Дата рождения:</p>
                        <p class="text-gray-900 font-medium">05.05.2005 (20 лет)</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 bg-primary-100 p-2 rounded-lg">
                        <iconHei class="w-6 h-6 text-primary-500" />
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
            <div class="grid md:grid-cols-3 gap-4">
                <div class="col-span-2 bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                    <h3 class="font-medium text-gray-900">Анализируемые генетические варианты</h3>
                    <p class="border-b border-gray-200 pb-2">
                        <span class="text-sm text-muted-color block mb-1">При проведении анализа были выявлены следующие патогенные варианты нуклеотидной последовательности:</span>
                        <span class="text-gray-900 font-medium"
                            >«Заболевания сердечно-сосудистой системы», «заболевания опорно-двигательного аппарата и соединительной ткани», «эндокринные заболевания»</span
                        >
                    </p>
                    <div>
                        <h3 class="font-medium text-gray-900">Патогенные варианты нуклеотидной последовательности</h3>
                        <p class="text-gray-600 text-sm mb-2">Являющиеся вероятной причиной заболевания</p>
                        <table class="table-auto w-full text-sm border border-gray-300">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border px-2 py-1 font-normal">Ген</th>
                                    <th class="border px-2 py-1 font-normal">Положение (GRCh38/hg38)</th>
                                    <th class="border px-2 py-1 font-normal">Генотип</th>
                                    <th class="border px-2 py-1 font-normal">Экзон</th>
                                    <th class="border px-2 py-1 font-normal">Вариант</th>
                                    <th class="border px-2 py-1 font-normal">Эффект</th>
                                    <th class="border px-2 py-1 font-normal">Частота*</th>
                                    <th class="border px-2 py-1 font-normal">Класс патогенности**</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="8" class="border text-center py-2 text-gray-900">Не обнаружено</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Вероятно патогенные варианты</h3>
                        <p class="text-gray-600 text-sm mb-2">Возможная причина заболевания</p>
                        <table class="table-auto w-full text-sm border border-gray-300">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border px-2 py-1 font-normal">Ген</th>
                                    <th class="border px-2 py-1 font-normal">Положение (GRCh38/hg38)</th>
                                    <th class="border px-2 py-1 font-normal">Генотип</th>
                                    <th class="border px-2 py-1 font-normal">Экзон</th>
                                    <th class="border px-2 py-1 font-normal">Вариант</th>
                                    <th class="border px-2 py-1 font-normal">Эффект</th>
                                    <th class="border px-2 py-1 font-normal">Частота*</th>
                                    <th class="border px-2 py-1 font-normal">Класс патогенности**</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="8" class="text-center py-2 text-gray-500">Не обнаружено</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 class="font-medium text-gray-900">Варианты неопределённого значения, имеющие возможное отношение к фенотипу</h3>
                        <table class="table-auto w-full text-sm border border-gray-300 mb-2">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border px-2 py-1 font-normal">Ген</th>
                                    <th class="border px-2 py-1 font-normal">Положение (GRCh38/hg38)</th>
                                    <th class="border px-2 py-1 font-normal">Генотип</th>
                                    <th class="border px-2 py-1 font-normal">Экзон</th>
                                    <th class="border px-2 py-1 font-normal">Вариант</th>
                                    <th class="border px-2 py-1 font-normal">Эффект</th>
                                    <th class="border px-2 py-1 font-normal">Частота*</th>
                                    <th class="border px-2 py-1 font-normal">Класс патогенности**</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="8" class="text-center py-2 text-gray-500">Не обнаружено</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-muted-color">* Частоты аллелей приведены по базе gnomAD (выборка до 141456 человек)</p>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                    <h3 class="font-medium text-gray-900">Генетический профиль</h3>
                    <div>
                        <RadarHenotip />
                    </div>
                </div>
            </div>
            <!-- Таблица -->
            <div class="bg-white rounded-xl shadow-card p-4">
                <div class="mb-6 flex flex-wrap gap-2">
                    <button
                        v-for="tab in tabs"
                        :key="tab.value"
                        @click="activeTab = tab.value"
                        :class="[
                            'flex items-center px-3 py-1 rounded-full text-sm transition-all',
                            activeTab === tab.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700',
                        ]"
                    >
                        <component :is="tab.icon" class="w-4 h-4 mr-2" />
                        {{ tab.label }}
                    </button>
                </div>

                <div v-if="activeTab === 'endurance'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с выносливостью, определяют эффективность аэробного метаболизма, плотность капилляров и митохондрий, а также способность к транспорту
                        кислорода.
                    </p>
                    <GeneticTable :items="items['Выносливость']" />
                </div>

                <div v-else-if="activeTab === 'power'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с силовыми качествами, влияют на тип мышечных волокон, скорость сокращения мышц и способность развивать взрывную силу.
                    </p>
                    <GeneticTable :items="items['Сила (мощность)']" />
                </div>

                <div v-else-if="activeTab === 'structure'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные со структурной прочностью, определяют качество соединительной ткани, гибкость и устойчивость к механическим нагрузкам.
                    </p>
                    <GeneticTable :items="items['Сила (прочность)']" />
                </div>

                <div v-else-if="activeTab === 'nutrition'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с метаболизмом пищевых веществ, влияют на усвоение питательных веществ, склонность к накоплению жира и пищевые потребности.
                    </p>
                    <GeneticTable :items="items['Питание и ожирение']" />

                    <div class="flex flex-col items-center text-center mt-4">
                        <h3 class="font-medium text-gray-900">Метаболизм кофеина</h3>
                        <VueSpeedometer
                                :value="1972"
                                :minValue="0"
                                :maxValue="3000"
                                :segments="3"
                                :segmentColors="['#ff9999', '#ffe699', '#a9d18e']"
                                :currentValueText="'Быстрый метаболизм'"
                                :customSegmentLabels="[
                                    {
                                        text: 'Медленный',
                                        position: 'INSIDE',
                                        color: '#555',
                                    },
                                    {
                                        text: 'Средний',
                                        position: 'INSIDE',
                                        color: '#555',
                                    },
                                    {
                                        text: 'Быстрый',
                                        position: 'INSIDE',
                                        color: '#555',
                                    },
                                ]"
                            />
                    </div>
                </div>
                <div v-else-if="activeTab === 'injuries'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с риском травм, влияют на прочность связок, сухожилий и костей, а также на скорость восстановления после повреждений.
                    </p>
                    <GeneticTable :items="items['Спортивные травмы']" />
                </div>

                <div v-else-if="activeTab === 'psychology'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с психологическими характеристиками, влияют на стрессоустойчивость, когнитивные функции и психологическую адаптацию к нагрузкам.
                    </p>
                    <GeneticTable :items="items['Психологические особенности']" />
                </div>
            </div>
            <!-- Технический отчет -->
            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h3 class="font-medium text-gray-900">Технический отчет</h3>
                <ul class="">
                    <li class="flex items-center gap-2 py-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                        <p class="text-muted-color">Метод исследования:</p>
                        <p class="font-medium text-gray-900">полногеномное секвенирование (Whole Genome Sequencing)</p>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                        <p class="text-muted-color">Количество нуклеотидов:</p>
                        <p class="font-medium text-gray-900">≥90 млрд</p>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                        <p class="text-muted-color">Тип прочтения:</p>
                        <p class="font-medium text-gray-900">150 п.н., парно-концевое</p>
                    </li>
                    <li class="flex items-center gap-2 py-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-1"></span>
                        <p class="text-muted-color">Качество выходных данных секвенирования:</p>
                        <p class="font-medium text-gray-900">≥90% Q20, ≥80% Q30</p>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
