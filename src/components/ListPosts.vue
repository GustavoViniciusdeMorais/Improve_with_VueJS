<template>
    <div>
        <div v-for="post in fetchPosts" v-bind:key="post.id">
            {{ post.title }}
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "ListPosts",
        methods: {
            ...mapActions(['getPosts']),
        },
        computed: mapGetters(['fetchPosts']),
        created() {
            this.getPosts();
        }
    }
</script>

<style scoped>

</style>