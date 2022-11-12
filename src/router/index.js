// 路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

//导出路由
export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/',
            redirect: '/msite',
        },
        {
            path: '/login',
            component: Login
        }

    ]
})