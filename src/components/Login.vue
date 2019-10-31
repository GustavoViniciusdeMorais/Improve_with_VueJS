<template>
    <div>
        <form @submit.prevent="onSubmit">
        Email: <input type="text" v-model="email" />
            Password: <input type="password" v-model="password" />
            <button>Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            onSubmit() {
                const formData = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('login', {
                    email: formData.email,
                    password: formData.password
                })
            }
        }
    }
</script>

<style scoped>

</style>