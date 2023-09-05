<template>
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="3">
                <v-card elevation="12" align="center" justify="center">
                    <v-form class="pa-5 d-flex flex-column align-center">
                        <v-container>
                            <v-text-field
                                label="Email"
                                variant="outlined"
                                rounded="xl"
                            ></v-text-field>

                            <v-text-field
                                label="Password"
                                variant="outlined"
                                rounded="xl"
                            ></v-text-field>
                        </v-container>

                        <v-btn
                            append-icon="mdi-login"
                            size="x-large"
                            rounded="xl"
                            elevation="4"
                            density="compact"
                            >Login</v-btn
                        >
                        <v-container>
                            <p>
                                Não possui uma conta?
                                <RouterLink to="/about"
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
export default {};
</script>
<style scoped></style>
