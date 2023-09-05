<template>
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="6">
                <v-card elevation="12" align="center" justify="center">
                    <v-form
                        ref="form"
                        @submit.prevent="handleLogin"
                        class="pa-5 d-flex flex-column align-center"
                    >
                        <v-container>
                            <v-text-field
                                label="Email"
                                variant="outlined"
                                rounded="xl"
                                type="email"
                                v-model="user.email"
                                :rules="[
                                    (value) =>
                                        !!value || 'O email é obrigatório!',
                                ]"
                            ></v-text-field>

                            <v-text-field
                                label="Senha"
                                variant="outlined"
                                rounded="xl"
                                type="password"
                                v-model="user.password"
                                :rules="[
                                    (value) =>
                                        !!value || 'A senha é obrigatória!',
                                ]"
                            ></v-text-field>
                        </v-container>

                        <v-btn
                            append-icon="mdi-login"
                            size="x-large"
                            rounded="xl"
                            elevation="4"
                            density="compact"
                            color="blue"
                            type="submit"
                            >Login</v-btn
                        >
                        <v-container>
                            <p>
                                Não possui uma conta?
                                <RouterLink to="/signup"
                                    >Cadastre-se!</RouterLink
                                >
                            </p>
                        </v-container>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        async handleLogin() {
            const { valid } = await this.$refs.form.validate();

            if (!valid) {
                alert("FAVOR PREENCHER CORRETAMENTE OS CAMPOS.");
                return;
            }

            try {
                const axios_post = await axios.post(
                    "http://localhost:3000/sessions",
                    this.user
                );
                if (axios_post.status == 200) {
                    localStorage.setItem(
                        "user-info",
                        JSON.stringify(axios_post.data)
                    );

                    this.$router.push("/dashboard");
                }
            } catch (error) {
                alert(error);
            }

            this.$refs.form.reset();
        },
    },
};
</script>
<style scoped></style>
