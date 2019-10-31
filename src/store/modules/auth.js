import axios from '../../axios-auth'
import router from '../../router'

const state = {
    auth: {
        email: '',
        token: ''
    }
};

const actions = {
    async login({commit}, authData) {
        await axios.post('/accounts:signInWithPassword?key=AIzaSyDjdtPfZSzECu5uil8owP80wndyMf0SD9E', {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        })
            .then(res => {
                commit('setUser', {
                    token: res.data.idToken,
                    email: res.data.email
                })
                localStorage.setItem('token', res.data.idToken)
                router.replace('/posts')
            })
            // eslint-disable-next-line no-console
            .catch(error => { console.log(error) })
    }
};

const mutations = {
    setUser(state, userData) {
        state.auth.email = userData.email
        state.auth.token = userData.token
    }
};

const getters = {
    getToken(state) {
        return state.auth.token
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}