<script setup>
import { useAuthStore } from "@stores";

import Logo from "@assets/images/logo.png";
import { useSidebarStore } from "@stores/sidebar.js";
import { RouterLink } from "vue-router";
import DarkModeSwitcher from "@components/DarkModeSwitcher.vue";
import logo from "@/assets/images/logo.png";

const authStore = useAuthStore();
const sidebarStore = useSidebarStore();
const { toggleSidebar } = useSidebarStore();
</script>

<template>
    <header class="sticky top-0 z-50 flex w-full bg-white shadow-card">
        <div class="flex flex-grow items-center justify-between gap-4 px-4 py-4 shadow-md">
            <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
                <!-- Hamburger Toggle BTN -->
                <button class="z-999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden" @click="toggleSidebar">
                    <span class="relative block h-5.5 w-5.5 cursor-pointer">
                        <span class="block absolute right-0 h-full w-full">
                            <span
                                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"
                                :class="{ '!w-full delay-300': !sidebarStore.isSidebarOpen }"
                            ></span>
                            <span
                                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"
                                :class="{ '!w-full delay-400': !sidebarStore.isSidebarOpen }"
                            ></span>
                            <span
                                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"
                                :class="{ '!w-full delay-500': !sidebarStore.isSidebarOpen }"
                            ></span>
                        </span>
                        <span class="block absolute right-0 h-full w-full rotate-45">
                            <span
                                class="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"
                                :class="{ '!h-0 delay-[0]': !sidebarStore.isSidebarOpen }"
                            ></span>
                            <span
                                class="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"
                                :class="{ '!h-0 delay-200': !sidebarStore.isSidebarOpen }"
                            ></span>
                        </span>
                    </span>
                </button>
            </div>
            <div class="flex-auto flex items-center gap-3 justify-between">
                <h1 class="text-gray-900 flex flex-col flex-auto">
                    <span class="font-medium uppercase md:text-lg">ФГИС МИАС</span>
                </h1>
                <img class="flex-none" :src="logo" alt="" width="108" />
            </div>
        </div>
    </header>
</template>

<style scoped></style>
