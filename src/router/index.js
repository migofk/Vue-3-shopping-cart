import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import Cart from '/src/views/Cart.vue'
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
const routes = [
    {
        path:'/',
        name:'Public',
        component:DefaultLayout,
        redirect: '/',
        children:[
            {
                path:'/',
                name:'Home',
                component:Home
            },
            {
                path:'/about',
                name:'About',
                component:About
            },
            {
                path:'/cart',
                name:'Cart',
                component:Cart
            }
        ]
    },
]   
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router