<script setup>
import { ref, markRaw, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useAuthStore, useSidebarStore } from "@stores";
import { Icon } from "@vicons/utils";
import {
    LucideRuler,
    LucideFlame,
    LucideDroplet,
    LucideActivity,
    LucidePill,
    LucideMove,
    LucideBandage,
    LucideAtom,
    LucideBrain,
    LucideBarChart,
    LucideClipboardList,
    LucideArrowLeft,
} from "lucide-vue-next";
import SidebarItem from "@components/Containers/Admin/Sidebar/SidebarItem.vue";
import Logo from "@assets/images/profile.png";

const { user } = useAuthStore();

const showLogo = ref(true);
const target = ref(null);
const menuGroups = ref([
    {
        name: "МЕНЮ",
        menuItems: [
            {
                icon: LucideRuler,
                label: "Антропометрия",
                route: "/anthropometry",
                visible: true,
            },
            {
                icon: LucideFlame,
                label: "Метаболический профиль",
                route: "/metabolic-support",
                visible: true,
            },
            {
                icon: LucideDroplet,
                label: "Гематологический скрининг",
                route: "/hematological-screening",
                visible: true,
            },
            {
                icon: LucideActivity,
                label: "Контроль переносимости нагрузки",
                route: "/load-tolerance-monitoring",
                visible: true,
            },
            {
                icon: LucidePill,
                label: "Программа фарм. поддержки",
                route: "/pharmacological-support-program",
                visible: true,
            },
            {
                icon: LucideMove,
                label: "Биомеханика",
                route: "/biomechanics",
                visible: true,
            },
            {
                icon: LucideBandage,
                label: "Травматизм",
                route: "/injury",
                visible: true,
            },
            {
                icon: LucideAtom,
                label: "Молекулярная медицина",
                route: "/molecular-medicine",
                visible: true,
            },
            {
                icon: LucideBrain,
                label: "Психофизиология",
                route: "/psychophysiology",
                visible: true,
            },
            {
                icon: LucideBarChart,
                label: "Аналитика",
                route: "/analytics",
                visible: true,
            },
            {
                icon: LucideClipboardList,
                label: "Лист событий",
                route: "/event-list",
                visible: true,
            },
        ],
    },
]);

const sidebarStore = useSidebarStore();
const authStore = useAuthStore();

onClickOutside(target, () => {
    sidebarStore.isSidebarOpen = false;
});

function toggleSidebar() {
    sidebarStore.toggleSidebarFull();

    if (showLogo.value) {
        showLogo.value = false;
    } else {
        setTimeout(() => {
            showLogo.value = true;
        }, 500);
    }
}
</script>

<template>
    <aside
        class="absolute left-0 top-0 z-999 bg-white shadow-card flex h-screen flex-col transition-all duration-300 ease-in-out lg:static lg:translate-x-0 bg-image-sidebar"
        :class="[
            sidebarStore.isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
            'lg:translate-x-0', // всегда видно на lg+
            sidebarStore.isSidebarFull ? 'w-80' : 'w-16',
        ]"
        ref="target"
    >
        <div class="flex flex-col overflow-y-hidden h-full">
            <!-- Profile -->
            <div
                class="flex gap-3 m-2 items-center bg-white rounded-xl shadow-card transition-all duration-300 ease-in-out"
                :class="{
                    'p-2': sidebarStore.isSidebarFull,
                    'p-0': !sidebarStore.isSidebarFull,
                }"
            >
                <Transition name="bounce">
                    <img
                        :src="Logo"
                        class="rounded-xl object-cover transition-all duration-300 ease-in-out"
                        :class="{
                            'w-26 h-26': sidebarStore.isSidebarFull,
                            'w-full h-12': !sidebarStore.isSidebarFull,
                        }"
                    />
                </Transition>
                <Transition name="fade">
                    <div v-if="showLogo" class="transition-all duration-300">
                        <div class="text-lg font-semibold">ИВАНОВ</div>
                        <div class="text-gray-500">Алексей Сергеевич</div>
                    </div>
                </Transition>
            </div>

            <!-- Sidebar Menu -->
            <div class="flex flex-auto flex-col duration-300 ease-in-out overflow-y-auto">
                <nav class="m-2">
                    <template v-for="menuGroup in menuGroups" :key="menuGroup.name">
                        <div>
                            <ul class="flex flex-col gap-2">
                                <SidebarItem v-for="(menuItem, index) in menuGroup.menuItems" :item="menuItem" :key="index" :index="index" />
                            </ul>
                        </div>
                    </template>
                </nav>
            </div>
        </div>

        <!-- Sidebar Toggle -->
        <div
            class="ml-auto flex-none flex overflow-hidden bg-primary-500 text-white m-1 p-1 rounded-xl shadow-card hover:shadow-cardHover delay-200 duration-300 cursor-pointer"
            :class="{
                'justify-end': sidebarStore.isSidebarFull,
                'justify-center': !sidebarStore.isSidebarFull,
            }"
        >
            <Icon
                size="32"
                class=""
                :class="{
                    'rotate-0': sidebarStore.isSidebarFull,
                    'rotate-180': !sidebarStore.isSidebarFull,
                }"
                @click="toggleSidebar"
            >
                <LucideArrowLeft class="w-6 h-6" />
            </Icon>
        </div>
    </aside>
</template>

<style scoped>
.bg-image-sidebar {
    background-image: url("@/assets/images/sidebar-bg.jpg");
    background-size: 320px auto;
    background-position: bottom right;
    background-repeat: no-repeat;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
