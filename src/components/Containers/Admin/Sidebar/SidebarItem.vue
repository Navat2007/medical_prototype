<script setup lang="ts">
import {useSidebarStore} from '@stores/sidebar'
import {useRoute} from 'vue-router'
import {Icon} from '@vicons/utils'
import SidebarDropdown from './SidebarDropdown.vue'

const sidebarStore = useSidebarStore()

const props = defineProps(['item', 'index'])
const currentPage = useRoute().name

interface SidebarItem {
  label: string
}

const handleItemClick = () => {
  sidebarStore.page = sidebarStore.page === props.item.label ? '' : props.item.label
  sidebarStore.selected = sidebarStore.selected === props.item.label ? '' : props.item.label

  if (props.item.children) {
    return props.item.children.some((child: SidebarItem) => sidebarStore.selected === child.label)
  }
}
</script>

<template>
  <li v-if="props.item.visible">
    <router-link
        :to="item.route"
        class="rounded-xl shadow-card p-3 flex items-center gap-3 duration-300 ease-in-out hover:text-primary-500 hover:shadow-cardHover"
        @click.prevent="handleItemClick"
        :class="{
        'bg-primary-100 text-primary-500': sidebarStore.page === item.label || sidebarStore.selected === item.label,
        'py-3 px-4': sidebarStore.isSidebarFull,
        'px-6.5': !sidebarStore.isSidebarFull,
      }"
    >
      <Icon size="24">
        <component :is="item.icon"/>
      </Icon>

      <Transition name="fade">
        <span v-if="sidebarStore.isSidebarFull">
          {{ item.label }}
        </span>
      </Transition>
    </router-link>
  </li>
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
</style>