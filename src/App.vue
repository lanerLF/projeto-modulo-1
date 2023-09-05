<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <v-container class="ma-5">
        <v-layout>
            <v-app-bar :elevation="2">
                <h1 class="ma-5">*nome do projeto*</h1>
                <template v-slot:append>
                    <RouterLink to="/about">Sobre</RouterLink>
                    <RouterLink to="/">Logout</RouterLink>
                </template>
            </v-app-bar>
        </v-layout>
    </v-container>
    <v-container>
        <RouterView />
    </v-container>
</template>

<style scoped>
a {
    margin: 10px;
}
</style>
