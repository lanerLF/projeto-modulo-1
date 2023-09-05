<template>
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="6">
                <v-card elevation="12" align="center" justify="center">
                    <v-form
                        @submit.prevent="verifyingUser"
                        class="pa-5 d-flex flex-column align-center"
                    >
                        <v-container>
                            <v-text-field
                                label="Email"
                                variant="outlined"
                                rounded="xl"
                                type="email"
                                v-model="email"
                            ></v-text-field>

                            <v-text-field
                                label="Senha"
                                variant="outlined"
                                rounded="xl"
                                type="password"
                                v-model="password"
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
            email: "",
            password: "",
        };
    },
    methods: {
        async verifyingUser() {
            try {
                const response = await axios.post(
                    "http://localhost:3000/sessions",
                    {
                        email: this.email,
                        password: this.password,
                    }
                );

                if (response.data.token) {
                    console.log(response.data);
                } else {
                    console.log(response.data);
                }
            } catch (error) {
                console.error("Error: ", error);
            }
        },
    },
};
</script>
<style scoped></style>
