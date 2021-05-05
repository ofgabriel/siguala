import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (sobre.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: "sobre" */ '../views/Sobre.vue'),
  },
  {
    path: '/simulacao',
    name: 'Simulacao',
    component: () => import(/* webpackChunkName: "simulacao" */ '../views/Simulacao.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
