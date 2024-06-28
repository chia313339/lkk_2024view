import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

import HomeView from '../views/index.vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/', name: 'home', component: HomeView },
    
    {
        path: '/analytics',
        name: 'analytics',
        component: () => import(/* webpackChunkName: "analytics" */ '../views/analytics.vue'),
    },
    {
        path: '/finance',
        name: 'finance',
        component: () => import(/* webpackChunkName: "finance" */ '../views/finance.vue'),
    },
    {
        path: '/crypto',
        name: 'crypto',
        component: () => import(/* webpackChunkName: "crypto" */ '../views/crypto.vue'),
    },
    {
        path: '/inbody',
        name: 'inbody',
        component: () => import(/* webpackChunkName: "inbody" */ '../views/inbody.vue'),
    },
    {
        path: '/bodygo',
        name: 'bodygo',
        component: () => import(/* webpackChunkName: "bodygo" */ '../views/bodygo.vue'),
    },
    // member
    {
        path: '/memberprofile',
        name: 'memberprofile',
        component: () => import(/* webpackChunkName: "memberprofile" */ '../views/memberprofile.vue'),
    },
    {
        path: '/coach',
        name: 'coach',
        component: () => import(/* webpackChunkName: "coach" */ '../views/coach.vue'),
    },
    {
        path: '/system',
        name: 'system',
        component: () => import(/* webpackChunkName: "system" */ '../views/system.vue'),
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const store = useAppStore();

    if (to?.meta?.layout == 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    next(true);
});
router.afterEach((to, from, next) => {
    appSetting.changeAnimation();
});
export default router;
