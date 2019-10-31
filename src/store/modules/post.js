import axios from 'axios'

const state = {
    posts: []
};

const actions = {
    async getPosts({commit}) {
        await axios.get('https://jsonplaceholder.typicode.com/posts/')
        // eslint-disable-next-line no-console
            .then(res => {
                // eslint-disable-next-line no-console
                console.log(res.data)
                commit('setPosts', res.data)
            })
            // eslint-disable-next-line no-console
            .catch(error => console.log('msgError', error))
    }
};

const mutations = {
    setPosts: (state, posts) => (state.posts = posts)
};

const getters = {
    fetchPosts: (state) => state.posts
};

export default {
    state,
    actions,
    mutations,
    getters
};