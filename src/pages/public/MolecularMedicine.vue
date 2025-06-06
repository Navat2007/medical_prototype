<script setup>
import { ref } from "vue";
import { Activity, Dumbbell, Bone, Apple, AlertCircle, Brain, LucidePill } from "lucide-vue-next";
import MainInfo from "@/components/Containers/MainInfo.vue";
import GeneticTable from "@components/Tables/MolecularMedicine/GeneticTable.vue";
import GeneticPharmTable from "@components/Tables/MolecularMedicine/GeneticPharmTable.vue";
import OddsRatioTable from "@components/Tables/MolecularMedicine/OddsRatioTable.vue";
import GeneticBarChart from "@components/Charts/MolecularMedicine/GeneticBarChart.vue";
import RadarHenotip from "@components/Charts/Analytics/RadarHenotip.vue";
import VueSpeedometer from "vue-speedometer";
import CoffeeImage from "@assets/images/metabolism-coffee.png";

const activeTab = ref("endurance");

const tabs = [
    { value: "endurance", label: "Выносливость", icon: Activity },
    { value: "power", label: "Сила", icon: Dumbbell },
    { value: "structure", label: "Мощность и прочность", icon: Bone },
    { value: "injuries", label: "Травмы", icon: AlertCircle },
    { value: "nutrition", label: "Питание", icon: Apple },
    { value: "psychology", label: "Психология", icon: Brain },
    { value: "pharmacogenetics", label: "Фармакогенетика", icon: LucidePill },
];

const items = {
    "Мощность и прочность": [
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
            comment: "Повышенный риск избыточный массы тела",
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
            comment: "Травматизма",
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
    Сила: [
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
    Фармакогенетика: [
        {
            variant: "rs4149056",
            genotype: "T/T",
            comment: "Не требуется коррекция дозы статинов.",
        },
        {
            variant: "rs4149056",
            genotype: "T/T",
            comment: "Не требуется коррекция дозы статинов.",
        },
        {
            variant: "rs1057910",
            genotype: "С/С",
            comment:
                "Повышенный риск эрозивно-язвенных кровотечений ЖКТ при длительных и повторяющихся приемах ибупрофена. Примечание: возможно рассмотреть снижение стандартной дозировки с отслеживанием самочувствия",
            group: "Нестероидные противовоспалительные препараты",
        },
        {
            variant: "rs1057910",
            genotype: "CYP2C9 *3/*3",
            comment: "Медленный метаболизатор ибупрофена.",
            group: "Нестероидные противовоспалительные препараты",
        },
        {
            variant: "rs4244285",
            genotype: "CYP2C19 *2/*2",
            comment:
                "Пониженной чувствительности к клопидогрелу. Риск тромбозов после проведения хирургических вмешательств и приема клопидогрела в качестве антиагреганта. Стоит рассмотреть повышение дозировки или подобрать другой препарат.",
            group: "Антитромбические препараты",
        },
    ],
};

const expanded = ref(false);
</script>

<template>
    <main class="flex-1 flex flex-col gap-5">
        <h1 class="text-3xl font-medium text-primary-500">Молекулярная медицина</h1>
        <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
            <h2 class="font-medium text-2xl text-gray-900">Сводка по генетическому анализу</h2>
            <div class="bg-white p-4 rounded-xl shadow-card">
                <MainInfo />
            </div>

            <!-- Дозировка кофеина -->
            <div class="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-card">
                <h3 class="font-medium text-gray-900">Дозировка кофеина в сутки</h3>
                <img :src="CoffeeImage" class="max-w-xs w-full" />
            </div>

            <div class="grid md:grid-cols-4 gap-4">
                <!-- Технический отчет -->
                <div class="md:col-span-3 bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                    <h3 class="font-medium text-gray-900">Технический отчет</h3>
                    <ul class="grid gap-4 md:grid-cols-2">
                        <li class="col-span-full flex flex-col gap-2 py-2 border-b border-gray-200">
                            <p class="text-xs text-muted-color">Метод исследования</p>
                            <p class="font-medium text-lg text-gray-900 max-w-3xl">
                                Полногеномное секвенирование. Библиотеку полногеномных последовательностей подготовлена с использованием набора Nextera DNA Flex (Illumina, США)
                            </p>
                        </li>
                        <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                            <p class="text-xs text-muted-color">Количество нуклеотидов</p>
                            <p class="font-medium text-lg text-gray-900">≥90 млрд</p>
                        </li>
                        <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                            <p class="text-xs text-muted-color">Тип прочтения</p>
                            <p class="font-medium text-lg text-gray-900">150 п.н., парно-концевое</p>
                        </li>
                        <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                            <p class="text-xs text-muted-color">Средняя глубина покрытия</p>
                            <p class="font-medium text-lg text-gray-900">30х</p>
                        </li>
                        <li class="flex flex-col gap-2 py-2 border-b border-gray-200">
                            <p class="text-xs text-muted-color">Доля целевых участков с покрытием</p>
                            <p class="font-medium text-lg text-gray-900">>20х:90%</p>
                        </li>
                    </ul>
                </div>
                <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                    <h3 class="font-medium text-gray-900">Генетический профиль</h3>
                    <div>
                        <RadarHenotip />
                    </div>
                </div>
            </div>

            <div class="bg-white p-4 rounded-xl shadow-card flex flex-col gap-4">
                <h3 class="font-medium text-gray-900">Анализируемые генетические варианты</h3>
                <p class="border-b border-gray-200 pb-2">
                    <span class="text-sm text-muted-color block mb-1">
                        Для анализа были использованы наборы генов, рекомендованные
                        <strong class="font-medium">PanelApp и Human Phenotype Ontology, а также панели разработанные в ФГБУ ФНУЦС ФМБА России в рамка НИР МГИ-22</strong>. Анализ
                        был произведен по панелям:</span
                    >
                    <span class="text-gray-900 font-medium"
                        >«Заболевания сердечно-сосудистой системы», «Заболевания опорно-двигательного аппарата и соединительной ткани», «Эндокринные заболевания»</span
                    >
                </p>
                <div>
                    <h3 class="font-medium text-gray-900">Патогенные варианты нуклеотидной последовательности</h3>
                    <p class="text-gray-600 text-sm mb-2">Являющиеся вероятной причиной заболевания</p>
                    <div class="w-full overflow-auto">
                        <table class="min-w-full text-sm text-left border">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="p-2 border">Ген</th>
                                    <th class="p-2 border">Положение (GRCh38/hg38)</th>
                                    <th class="p-2 border">Генотип</th>
                                    <th class="p-2 border">Экзон</th>
                                    <th class="p-2 border">Вариант</th>
                                    <th class="p-2 border">Эффект</th>
                                    <th class="p-2 border">Частота*</th>
                                    <th class="p-2 border">Класс патогенности**</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="8" class="text-center p-2 border">Не обнаружено</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h3 class="font-medium text-gray-900">Вероятно-патогенные варианты</h3>
                    <p class="text-gray-600 text-sm mb-2">Возможная причина заболевания</p>
                    <div class="w-full overflow-auto mb-2">
                        <table class="min-w-full text-sm text-left border">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="p-2 border">Ген</th>
                                    <th class="p-2 border">Положение (GRCh38/hg38)</th>
                                    <th class="p-2 border">Генотип</th>
                                    <th class="p-2 border">Экзон</th>
                                    <th class="p-2 border">Вариант</th>
                                    <th class="p-2 border">Эффект</th>
                                    <th class="p-2 border">Частота*</th>
                                    <th class="p-2 border">Класс патогенности**</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border text-left">
                                        <div class="flex items-center gap-2 text-red-500 font-medium"><AlertCircle :class="['flex-none w-4 h-4 text-secondary-500']" /> KCNQ1</div>
                                    </td>
                                    <td class="p-2 border text-left">chr11:2583526</td>
                                    <td class="p-2 border text-left">CTT/C</td>
                                    <td class="p-2 border text-left">7</td>
                                    <td class="p-2 border text-left">NM_000218.3: c.1017_1019del</td>
                                    <td class="p-2 border text-left">p.Phe340del</td>
                                    <td class="p-2 border text-left">0,0000006197</td>
                                    <td class="p-2 border text-left">Патогенный (V)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex gap-4 p-4 rounded-lg bg-secondary-100 border border-secondary-300">
                        <div class="flex-none w-10 h-10 flex items-center justify-center rounded-md bg-secondary-200">
                            <AlertCircle :class="['w-6 h-6 text-secondary-500']" />
                        </div>
                        <div>
                            <div class="text-base font-medium text-gray-900">
                                Обнаружен вероятно-патогенный вариант NM_000218.3: c.1017_1019del (p.Phe340del) в&nbsp;последовательности 7 экзона гена
                                <span class="font-bold">KCNQ1</span>.
                            </div>
                            <transition name="fade">
                                <div v-if="expanded" class="text-sm text-gray-600 flex flex-col gap-2">
                                    <p>Этот ген кодирует потенциал-зависимые калиевые каналы, которые переносят ионы K⁺ через клеточную мембрану.</p>
                                    <p>
                                        Благодаря этому обеспечивается генерация и передача электрических сигналов, необходимых для нормального функционирования сердца, внутреннего
                                        уха, почек, лёгких, желудка и толстого кишечника.
                                    </p>
                                    <p>
                                        Изменения в гене KCNQ1, включая мутации и хромосомные перестройки, ассоциированы с развитием различных сердечно-сосудистых заболеваний,
                                        таких как синдром слабости синусового узла (OMIM 608567), аритмогенная дисплазия правого желудочка (OMIM #607450), наследственный синдром
                                        удлинённого интервала QT типа 1 (OMIM 192500), синдром короткого интервала QT типа 2 (SQT2) (OMIM 609621) и семейная фибрилляция предсердий
                                        типа 3 (ATFB3) (OMIM 609427).
                                    </p>
                                    <p>
                                        <strong class="text-secondary-500">NB!!</strong> Спортсмену рекомендуются расширенное кардиологические обследование – МРТ сердца,
                                        холтеровское мониторирование, консультация аритмолога.
                                    </p>
                                </div>
                            </transition>
                            <button class="font-medium text-secondary-500 hover:underline" @click="expanded = !expanded">
                                {{ expanded ? "Скрыть" : "Подробнее" }}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="font-medium text-gray-900 mb-2">Варианты неопределённого значения, имеющие возможное отношение к фенотипу</h3>
                    <div class="w-full overflow-auto">
                        <table class="min-w-full text-sm text-left border">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="p-2 border">Ген</th>
                                    <th class="p-2 border">Положение (GRCh38/hg38)</th>
                                    <th class="p-2 border">Генотип</th>
                                    <th class="p-2 border">Экзон</th>
                                    <th class="p-2 border">Вариант</th>
                                    <th class="p-2 border">Эффект</th>
                                    <th class="p-2 border">Частота*</th>
                                    <th class="p-2 border">Класс патогенности**</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="8" class="text-center p-2 border">Не обнаружено</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <p class="text-xs text-muted-color">* Частоты аллелей приведены по базе gnomAD (выборка до 141456 человек)</p>
                    <p class="text-xs text-muted-color">**Класс патогенности от I (доброкачественный) до V (патогенный) присвоен по рекомендациям ACMG (2015) и РОМГ (2018).</p>
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
                            activeTab === tab.value ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700',
                        ]"
                    >
                        <component :is="tab.icon" class="w-4 h-4 mr-2" />
                        {{ tab.label }}
                    </button>
                </div>

                <div v-if="activeTab === 'endurance'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с развитием выносливости, кодируют белки, участвующие в регуляции энергетического обмена, митохондриальной функции, окислительного
                        фосфорилирования, а также в адаптации сердечно-сосудистой и дыхательной систем к длительной физической нагрузке.
                    </p>
                    <GeneticTable :items="items['Выносливость']" />
                </div>

                <div v-else-if="activeTab === 'power'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с развитием силы, участвуют в регуляции мышечной гипертрофии, сократительной функции мышечных волокон, метаболизма гликогена и анаболических
                        сигнальных путей.
                    </p>
                    <GeneticTable :items="items['Сила']" />
                </div>

                <div v-else-if="activeTab === 'structure'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, ассоциированные с мощностью, определяют предрасположенность к реализации кратковременной высокой мышечной производительности за счёт регуляции
                        экспрессии белков, участвующих в сократительной активности и энергетическом обмене в быстро сокращающихся мышечных волокнах. Гены, связанные с прочностью,
                        участвуют в молекулярной регуляции структуры и функции соединительных тканей, обеспечивая механическую устойчивость к физическим нагрузкам и эффективные
                        процессы репарации после повреждений.
                    </p>
                    <GeneticTable :items="items['Мощность и прочность']" />
                </div>

                <div v-else-if="activeTab === 'injuries'">
                    <div class="flex flex-col gap-4">
                        <p class="text-sm text-gray-500">
                            Гены, связанные с травматизмом, участвуют в механизмах, определяющих устойчивость тканей к механическим нагрузкам, процессы воспаления, восстановления и
                            регенерации, а также сенсомоторный контроль.
                        </p>
                        <GeneticTable :items="items['Спортивные травмы']" />
                        <GeneticBarChart />
                        <OddsRatioTable />
                    </div>
                </div>

                <div v-else-if="activeTab === 'nutrition'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с питанием, регулируют широкий спектр процессов, включая аппетит, насыщение, вкусовое восприятие, энергетический обмен, усвоение макро- и
                        микронутриентов, а также ответ на диету. Генетические варианты в этих генах влияют на пищевое поведение, метаболическую эффективность и предрасположенность
                        к ожирению, дефициту витаминов, непереносимости продуктов и другим диет-зависимым состояниям.
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
                            :currentValueText="'CYP1A2-генотип АА'"
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

                <div v-else-if="activeTab === 'psychology'">
                    <p class="text-sm text-gray-500 mb-4">
                        Гены, связанные с психологической приверженностью к занятиям спортом, включая мотивацию, удовольствие от физической активности и склонность к регулярным
                        тренировкам. Эти гены участвуют в нейрохимических путях вознаграждения, мотивации и регуляции стресса.
                    </p>
                    <GeneticTable :items="items['Психологические особенности']" />
                </div>

                <div v-else-if="activeTab === 'pharmacogenetics'">
                    <p class="text-sm text-gray-500 mb-4">
                        Фармакогенетика изучает, как индивидуальные генетические вариации влияют на реакцию организма на лекарственные препараты. Особое внимание уделяется генам,
                        кодирующим ферменты метаболизма лекарств, транспортёры и рецепторы. Понимание этих генов позволяет персонализировать терапию, повышая её эффективность и
                        снижая риск побочных эффектов. Анализируемые варианты были составлены при помощи <span class="font-semibold">PharmGKB</span>.
                    </p>
                    <GeneticPharmTable :items="items['Фармакогенетика']" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
