<script setup>
import {ref, markRaw, onMounted} from "vue";
import {onClickOutside} from '@vueuse/core';
import {useAuthStore, useSidebarStore} from '@stores';
import {Icon} from '@vicons/utils'
import {Home, Building, Group, Car, TrafficEvent, Folders, ArrowLeft, EventsAlt} from '@vicons/carbon';

import SidebarItem from "@components/Containers/Admin/Sidebar/SidebarItem.vue";
import Logo from "@assets/images/logo.png";

const {user} = useAuthStore();

const showLogo = ref(true);
const target = ref(null);
const menuGroups = ref([
    {
        //Иконки взяты из https://primevue.org/icons/#list
        //-> Иконки взяты из https://www.xicons.org/#/
        name: 'МЕНЮ',
        menuItems: [
            {
                icon: markRaw(Home),
                label: 'Аналитика',
                route: '/analytics',
                visible: true
            },
          {
            icon: markRaw(Home),
            label: 'Метаболическая поддержка',
            route: '/metabolic-support',
            visible: true
          },
          {
            icon: markRaw(Home),
            label: 'Молекулярная медицина',
            route: '/molecular-medicine',
            visible: true
          },
          {
            icon: markRaw(Home),
            label: 'Психофизиология',
            route: '/psychophysiology',
            visible: true
          },
          {
            icon: markRaw(Home),
            label: 'Биомеханика',
            route: '/biomechanics',
            visible: true
          },
        ]
    },
]);

const sidebarStore = useSidebarStore();
const authStore = useAuthStore();

onClickOutside(target, () => {
    sidebarStore.isSidebarOpen = false
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
        class="absolute left-0 top-0 z-999 flex h-screen flex-col bg-boxdark delay-200 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
        :class="{
        'translate-x-0': sidebarStore.isSidebarOpen,
        '-translate-x-full': !sidebarStore.isSidebarOpen,
        'w-72': sidebarStore.isSidebarFull,
        'w-20': !sidebarStore.isSidebarFull,
      }"
        ref="target"
    >
        <div class="flex flex-col overflow-y-hidden h-full">
            <!-- Sidebar Header -->
            <div class="flex flex-none items-center justify-center mt-8 gap-2 px-6 py-5.5 lg:py-6.5 h-36">
                <div class="flex flex-col items-center justify-center">
                    <Transition name="bounce">
                      <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                    </Transition>
                    <div class="h-16">
                        <Transition name="fade">
              <span v-if="showLogo"
                    class="mt-4 block self-center text-2xl font-semibold whitespace-normal text-white"
              >
                ФИО
              </span>
                        </Transition>
                    </div>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <div class="flex flex-auto flex-col duration-300 ease-linear overflow-y-auto">
                <nav class="mt-2 py-4 lg:mt-4 ">
                    <template v-for="menuGroup in menuGroups" :key="menuGroup.name">
                        <div>
                            <ul class="mb-6 flex flex-col gap-1.5">
                                <SidebarItem
                                    v-for="(menuItem, index) in menuGroup.menuItems"
                                    :item="menuItem"
                                    :key="index"
                                    :index="index"
                                />
                            </ul>
                        </div>
                    </template>
                </nav>
            </div>
        </div>

        <!-- Toggle arrow -->
        <div
            class="flex w-full overflow-hidden"
            :class="{
            'justify-end': sidebarStore.isSidebarFull,
            'justify-center':!sidebarStore.isSidebarFull,
          }"
        >
            <Icon
                size="32"
                class="text-primary-500 hover:text-primary-300 m-1 delay-200 duration-300"
                :class="{
            'rotate-0 mr-4': sidebarStore.isSidebarFull,
            'rotate-180':!sidebarStore.isSidebarFull,
          }"
                @click="toggleSidebar"
            >
                <ArrowLeft/>
            </Icon>
        </div>
    </aside>
</template>

<style scoped>
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-active {
    transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
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