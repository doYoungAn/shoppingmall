import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';

Vue.use(Router);

const route: RouterOptions = {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('./pages/home.vue')
        }
    ]
};

const router = new Router(route);


export default router;