import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/post'
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        posts,
        auth
    }
});