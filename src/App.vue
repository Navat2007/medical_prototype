<script setup>
import {ref, onMounted} from "vue";
import {RouterView} from 'vue-router';
import axios from "axios";
import moment from "moment";

import {useAuthStore} from "/src/store/";

const expireDays = 30;
const authStore = useAuthStore();

const loading = ref(true);

onMounted(async () => {
  if (authStore.user) {
    let expireDate = moment(authStore.user.token_created_at.date, 'YYYY-MM-DD').add(expireDays, 'days');

    if (expireDate.isAfter(moment())) {
      axios.defaults.headers.post['Authorization'] = `${authStore.user.token}&${authStore.user.id}`;
    } else {
      await authStore.logout();
    }
  }

  loading.value = false;
});
</script>

<script>
import EmptyLayout from "@layouts/EmptyLayout.vue";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || EmptyLayout;
    }
  }
}
</script>

<template>
  <div v-if="loading" class="preloader preloader--place-page">
    <div class="preloader__chasing-squares">
      <div class="preloader__square"></div>
      <div class="preloader__square"></div>
      <div class="preloader__square"></div>
      <div class="preloader__square"></div>
    </div>
  </div>

  <component v-else :is="layout">
    <router-view/>
  </component>

</template>

<style lang="scss">
.preloader {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(18px);
  background-color: rgba(0 0 0 / 0.5);

  &--place-page {
    position: fixed;
    z-index: 200;
  }

  &__chasing-squares {
    width: 4em;
    height: 4em;
    display: grid;
    gap: 0.25em;
    grid-template-columns: repeat(2, 1fr);
  }

  &__square {
    display: block;
    aspect-ratio: 1;
    opacity: 1;
    background-color: #fff;
    animation: focus-fade 2.8s infinite;

    &:nth-child(2) {
      animation-delay: 0.7s;
    }

    &:nth-child(3) {
      animation-delay: 2.1s;
    }

    &:nth-child(4) {
      animation-delay: 1.4s;
    }
  }
}

@keyframes focus-fade {
  0% {
    opacity: 0.7;
  }

  30% {
    opacity: 0.7;
  }

  60% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 0.7;
  }
}

</style>