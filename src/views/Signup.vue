<template>
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="6">
                <v-card elevation="12" align="center" justify="center">
                    <v-form
                        ref="form"
                        @submit.prevent="handleSignup"
                        class="pa-5 d-flex flex-column align-center"
                    >
                        <v-container>
                            <v-text-field
                                label="Nome completo"
                                variant="outlined"
                                rounded="xl"
                                type="text"
                            ></v-text-field>
                            <v-text-field
                                label="Email"
                                variant="outlined"
                                rounded="xl"
                                type="email"
                            ></v-text-field>
                            <v-text-field
                                label="Senha"
                                variant="outlined"
                                rounded="xl"
                                type="password"
                            ></v-text-field>
                            <v-text-field
                                label="Confirme a Senha"
                                variant="outlined"
                                rounded="xl"
                                type="password"
                            ></v-text-field>
                            <v-select
                                label="Plano"
                                variant="outlined"
                                v-model="selected_item"
                                :items="items"
                            >
                            </v-select>
                        </v-container>

                        <v-btn
                            append-icon="mdi-account-plus"
                            size="x-large"
                            rounded="xl"
                            elevation="4"
                            density="compact"
                            color="blue"
                            type="submit"
                            >Cadastrar</v-btn
                        >
                        <v-container>
                            <p>
                                Já possui uma conta? Faça
                                <RouterLink to="/">Login!</RouterLink>
                            </p>
                        </v-container>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            selected_item: "Bronze",
            items: ["Bronze", "Prata", "Ouro"],
        };
    },
};
</script>
<style scoped></style>
