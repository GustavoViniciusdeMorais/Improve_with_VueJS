import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

import ListPosts from "./components/ListPosts";

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('./components/Login')
        },
        {
            path: '/posts',
            name: 'posts',
            component: ListPosts,
            beforeEnter(to, from, next){
                // eslint-disable-next-line no-console
                console.log(store.getters)
                if(store.getters.getToken){
                    next()
                } else {
                    next('/login')
                }
            }
        }
    ]
})