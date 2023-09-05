<template>
    <v-container class="d-flex flex-row align-center justify-space-around">
        <v-container class="d-flex flex-column align-center">
            <v-card elevation="6" class="pa-5">
                {{ dashboard_data }}
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

        this.user_data = JSON.parse(localStorage.getItem("user-ifo"));
    },
};
</script>
<style scoped></style>
