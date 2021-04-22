import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home.vue';
import Vuex from '@/views/vuex.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/vuex',
        name: 'Vuex',
        component: Vuex
    },
    {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/views/axios.vue') // 组件懒加载
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;
