import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

import ListPosts from "./components/ListPosts";

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/login',
            name: 'login',
            component: () =>
                import ('./components/Login')
        },
        {
            path: '/posts',
            name: 'posts',
            component: ListPosts,
            meta: {
                protected: true
            },

        }
    ]
})

router.beforeEach((to, from, next) => {
    // eslint-disable-next-line no-console
    console.log(to.meta.protected)
    if (to.meta.protected) {
        let token = store.getters.getToken
        if (token) {
            next()
        } else {
            next('/login')
        }
    }
    next()
})

export default router