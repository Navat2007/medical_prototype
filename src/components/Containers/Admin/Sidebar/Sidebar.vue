<script setup>
import { ref, markRaw, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useAuthStore, useSidebarStore } from "@stores";
import { Icon } from "@vicons/utils";
import { ArrowLeft } from "@vicons/carbon";
import iconAnal from "@assets/icons/17.svg";
import iconMet from "@assets/icons/04.svg";
import iconMol from "@assets/icons/03.svg";
import iconPsi from "@assets/icons/02.svg";
import iconBio from "@assets/icons/01.svg";

import SidebarItem from "@components/Containers/Admin/Sidebar/SidebarItem.vue";
import Logo from "@assets/images/profile.png";

const { user } = useAuthStore();

const showLogo = ref(true);
const target = ref(null);
const menuGroups = ref([
    {
        //Иконки взяты из https://primevue.org/icons/#list
        //-> Иконки взяты из https://www.xicons.org/#/
        name: "МЕНЮ",
        menuItems: [
            {
                icon: markRaw(iconAnal),
                label: "Аналитика",
                route: "/analytics",
                visible: true,
            },
            {
                icon: markRaw(iconMet),
                label: "Метаболическая поддержка",
                route: "/metabolic-support",
                visible: true,
            },
            {
                icon: markRaw(iconMol),
                label: "Молекулярная медицина",
                route: "/molecular-medicine",
                visible: true,
            },
            {
                icon: markRaw(iconPsi),
                label: "Психофизиология",
                route: "/psychophysiology",
                visible: true,
            },
            {
                icon: markRaw(iconBio),
                label: "Биомеханика",
                route: "/biomechanics",
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
        class="absolute shadow-card left-0 top-0 z-999 flex h-screen flex-col delay-200 duration-300 ease-in-out lg:static lg:translate-x-0 bg-white bg-image-sidebar"
        :class="{
            'translate-x-0': sidebarStore.isSidebarOpen,
            '-translate-x-full': !sidebarStore.isSidebarOpen,
            'w-80': sidebarStore.isSidebarFull,
            'w-20': !sidebarStore.isSidebarFull,
        }"
        ref="target"
    >
        <div class="flex flex-col overflow-y-hidden h-full">
            <!-- Profile -->
            <div class="flex flex-col items-center bg-white rounded-xl shadow-card p-3 m-3 delay-200 duration-300 ease-in-out" :class="{ '!p-0': !sidebarStore.isSidebarFull }">
                <Transition name="bounce">
                    <img :src="Logo" class="rounded-xl w-10/12 mb-2 delay-200 duration-300 ease-in-out" :class="{ 'w-full !mb-0': !sidebarStore.isSidebarFull }" />
                </Transition>
                <Transition name="fade">
                    <div v-if="showLogo">
                        <div class="text-center text-lg font-semibold">ИВАНОВ</div>
                        <div class="text-center text-gray-500">Алексей Сергеевич</div>
                    </div>
                </Transition>
            </div>

            <!-- Sidebar Menu -->
            <div class="flex flex-auto flex-col duration-300 ease-in-out overflow-y-auto">
                <nav class="m-3">
                    <template v-for="menuGroup in menuGroups" :key="menuGroup.name">
                        <div>
                            <ul class="flex flex-col gap-3">
                                <SidebarItem v-for="(menuItem, index) in menuGroup.menuItems" :item="menuItem" :key="index" :index="index" />
                            </ul>
                        </div>
                    </template>
                </nav>
            </div>
        </div>

        <!-- Toggle arrow -->
        <div
            class="ml-auto flex-none flex overflow-hidden bg-primary-500 text-white m-1 p-2 rounded-xl shadow-card hover:shadow-cardHover delay-200 duration-300 cursor-pointer"
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
                <ArrowLeft />
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
