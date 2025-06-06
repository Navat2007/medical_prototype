<template>
    <div class="w-full overflow-auto">
        <h3 class="font-medium text-gray-900 mb-2">Отношение шансов возникновение хотя бы одного патологического состояния (заболевания ОДА или травмы)</h3>
        <table class="min-w-full text-sm border">
            <thead class="bg-gray-50">
                <tr>
                    <th class="border p-2 text-left">Ген/rsID/генотип</th>
                    <th class="border p-2">OR (odds ratio,<br />отношение шансов)</th>
                    <th class="border p-2">p-value</th>
                    <th class="border p-2">Интерпретация</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in tableData" :key="i">
                    <td class="border p-2 whitespace-nowrap text-left">{{ row.marker }}</td>
                    <td class="border p-2 text-center">{{ row.or.toFixed(2) }}</td>
                    <td class="border p-2 text-center">{{ row.p.toFixed(4) }}</td>
                    <td class="border p-2 text-center">
                        <span
                            class="inline-flex items-center gap-1 rounded-lg text-sm px-2 py-0.5"
                            :class="row.or > 1 ? 'text-secondary-500 bg-secondary-100' : 'text-green-500 bg-green-100'"
                        >
                            <ArrowUp v-if="row.or > 1" class="w-4 h-4" />
                            <ArrowDown v-else class="w-4 h-4" />
                            {{ row.or > 1 ? ` в ${row.or.toFixed(2)} раз` : ` в ${(1 / row.or).toFixed(2)} раз` }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ArrowUp, ArrowDown } from "lucide-vue-next";

const tableData = [
    { marker: "GDF5 rs143383 A_A", or: 20.36, p: 0.0017 },
    { marker: "MIR608 rs4919510 G_C", or: 0.06, p: 0.0008 },
    { marker: "FGF3 rs1893047 G_A", or: 10.73, p: 0.0067 },
    { marker: "MMP9 rs17576 G_G", or: 5.7, p: 0.0094 },
    { marker: "IL18RAP rs1420100 A_A", or: 31.81, p: 0.0526 },
    { marker: "FGF3 rs12574452 G_A", or: 2.84, p: 0.006 },
    { marker: "MMP3 rs650108 A_G", or: 0.1, p: 0.0042 },
    { marker: "MMP9 rs17576 G_G", or: 4.84, p: 0.0154 },
    { marker: "FGF10 rs1448037 C_T", or: 57.16, p: 0.0363 },
    { marker: "IGF2 rs4244808 G_G", or: 2.11, p: 0.0335 },
    { marker: "WTAPP1 rs1144393 C_T", or: 3.51, p: 0.039 },
    { marker: "VEGFA rs1570360 G_A", or: 2.84, p: 0.038 },
    { marker: "COL3A1 rs1800255 G_A", or: 23.32, p: 0.0454 },
    { marker: "MYLK rs2700352 A_G", or: 5.53, p: 0.034 },
    { marker: "EMILIN1 rs2289360 C_G", or: 0.18, p: 0.0294 },
    { marker: "IL1A rs1800587 A_G", or: 0.2, p: 0.024 },
    { marker: "CCL2 rs2857656 G_G", or: 0.11, p: 0.019 },
    { marker: "BGN rs12164999 G_T", or: 0.22, p: 0.017 },
    { marker: "rs4233949 G_G", or: 0.45, p: 0.036 },
    { marker: "IL19 rs1800872 G_T", or: 2.41, p: 0.0342 },
    { marker: "IGF1-rs1321221 G_G", or: 1.85, p: 0.0427 },
    { marker: "FOXP3 rs3761549 A_G", or: 2.14, p: 0.0198 },
    { marker: "ADAMTS5 rs1510508 C_T", or: 1.62, p: 0.0381 },
    { marker: "COL11A1 rs1676486 G_A", or: 1.56, p: 0.0172 },
    { marker: "WNT16 rs2908007 G_G", or: 1.73, p: 0.0143 },
    { marker: "FUBP3 rs1546807 G_G", or: 1.28, p: 0.8406 },
];
</script>
