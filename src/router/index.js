import {createRouter, createWebHistory} from 'vue-router';
import { useAuthStore, useSidebarStore } from '@stores';

import PublicLayout from "@layouts/PublicLayout.vue";

// Public routes
import Index from "@pages/public/Index.vue";
import NotFound from "@pages/404.vue";

const publicRoutes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            layout: PublicLayout,
        }
    },
    {
        path: '/analytics',
        component: () => import('@pages/public/Analytics.vue'),
        props: true,
        meta: {
            layout: PublicLayout,
            requiresAuth: false,
            title: 'Аналитика',
        }
    },
    {
        path: '/metabolic-support',
        component: () => import('@pages/public/MetabolicSupport.vue'),
        props: true,
        meta: {
            layout: PublicLayout,
            requiresAuth: false,
            title: 'Метаболическая поддержка',
        }
    },
    {
        path: '/molecular-medicine',
        component: () => import('@pages/public/MolecularMedicine.vue'),
        props: true,
        meta: {
            layout: PublicLayout,
            requiresAuth: false,
            title: 'Молекулярная медицина',
        }
    },
    {
        path: '/psychophysiology',
        component: () => import('@pages/public/Psychophysiology.vue'),
        props: true,
        meta: {
            layout: PublicLayout,
            requiresAuth: false,
            title: 'Психофизиология',
        }
    },
    {
        path: '/biomechanics',
        component: () => import('@pages/public/Biomechanics.vue'),
        props: true,
        meta: {
            layout: PublicLayout,
            requiresAuth: false,
            title: 'Биомеханика',
        }
    },
];

const routes = [...publicRoutes,
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: NotFound,
        meta: {
            title: 'Страница не найдена',
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 }
    }
});

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    const { setSidebarState } = useSidebarStore();
    const DEFAULT_TITLE = auth.user?.company_name || 'Федеральный регистр здоровья российских спортсменов';

    document.title = to.meta.title + ' - ' + DEFAULT_TITLE || DEFAULT_TITLE;

    setSidebarState(false);

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.user || !auth.user.access) {
            next({path: '/login'});
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;