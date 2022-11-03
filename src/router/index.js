import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import Men from "@/views/Men.vue";
import Women from "../views/Women.vue";
import Search from "../views/Search.vue";
import Checkout from "../views/Checkout.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/men',
    name: 'Men',
    component: Men
  },
  {
    path: '/women',
    name: 'Women',
    component: Women
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: "/shop/:gender/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
