<template>
    <v-container class="d-flex flex-row align-center justify-space-around">
        <v-container class="d-flex flex-column align-center">
            <v-card elevation="6" class="pa-10 d-flex flex-column">
                <h2>Bem vindo, {{ user_data.name }}</h2>
                <v-container
                    class="d-flex flex-row align-center justify-center border border-dark"
                >
                    <v-container
                        class="d-flex flex-column align-start justify-center"
                    >
                        <h3 class="py-4">
                            {{ dashboard_data.amount_students }} Alunos
                        </h3>
                        <RouterLink to="/create-student">
                            <v-btn append-icon="mdi-plus" density="compact"
                                >Adicionar</v-btn
                            >
                        </RouterLink>
                    </v-container>
                    <v-container
                        class="d-flex flex-column align-start justify-center"
                    >
                        <h3 class="py-4">
                            {{ dashboard_data.amount_exercises }} Exercícios
                        </h3>
                        <v-btn append-icon="mdi-plus" density="compact"
                            >Adicionar</v-btn
                        >
                    </v-container>
                </v-container>
            </v-card>
        </v-container>
    </v-container>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            dashboard_data: {},
            user_data: {},
        };
    },
    mounted() {
        const axios_get = axios
            .get("http://localhost:3000/dashboard")
            .then((res) => (this.dashboard_data = res.data))
            .catch((error) => console.log(error));

        this.user_data = JSON.parse(localStorage.getItem("user-info")) || null;
    },
};
</script>
<style scoped></style>
