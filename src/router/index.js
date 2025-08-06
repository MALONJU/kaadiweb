import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '../components/Layout.vue';

const Home = () => import('../components/Home.vue');
const DiscoverPage = () => import('../components/DiscoverPage.vue');
const OrderPage = () => import('../components/OrderPage.vue');
const ProductDetail = () => import('../components/ProductDetail.vue');

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'discover', name: 'Discover', component: DiscoverPage },
      { path: 'order', name: 'Order', component: OrderPage },
      { path: 'pack/:id', name: 'ProductDetail', component: ProductDetail, props: true },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;