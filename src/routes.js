import Home from './components/home/index.vue'
import About from './components/about/index.vue'
import Contact from './components/contact/index.vue'
import Articles from './components/articles/index.vue'
import ShowArticle from './components/articles/Show.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'About',
        component:About,
        path:'/about'
    },
    {
        name:'Contact',
        component:Contact,
        path:'/contact'
    },
    {
        name:'Articles',
        component:Articles,
        path:'/articles'
    },
    {
        name:'ShowArticle',
        component:ShowArticle,
        path:'/articles/:slug'
    },

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router