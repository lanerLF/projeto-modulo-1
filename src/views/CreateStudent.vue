<template>
    <div class="d-flex flex-row justify-center align-center">
        <v-form
            @submit.prevent="handle_submit"
            class="d-flex flex-row w-100 align-center justify-center"
        >
            <div class="ma-5">
                <h2>Cadastro Novo Aluno</h2>
                <div>
                    <v-text-field
                        label="Nome"
                        placeholder="Nome"
                        variant="outlined"
                        v-model="name"
                        :rules="[(value) => !!value || 'O nome é obrigatório!']"
                    ></v-text-field>
                    <v-text-field
                        label="Email (Opcional)"
                        placeholder="Email"
                        variant="outlined"
                        v-model="email"
                    ></v-text-field>
                    <v-text-field
                        label="Contato"
                        placeholder="Contato"
                        variant="outlined"
                        v-model="phone_number"
                        :rules="[
                            (value) => !!value || 'O contato é obrigatório!',
                        ]"
                    ></v-text-field>
                    <v-text-field
                        label="Data de nascimento (Opcional)"
                        placeholder="Data de nascimento"
                        variant="outlined"
                        v-model="birthdate"
                        type="date"
                    ></v-text-field>
                </div>
            </div>

            <v-divider vertical></v-divider>

            <div class="ma-5 w-25">
                <div class="d-flex flex-row justify-center" style="gap: 10px">
                    <v-text-field
                        label="CEP"
                        placeholder="CEP"
                        variant="outlined"
                        v-model="cep"
                        :rules="[(value) => !!value || 'O Cep é obrigatório!']"
                    ></v-text-field>
                    <v-btn
                        @click.prevent="handle_cep"
                        color="#1E90FF"
                        density="default"
                        size="x-large"
                        >Procurar</v-btn
                    >
                </div>
                <v-text-field
                    label="Logradouro"
                    placeholder="Logradouro"
                    variant="outlined"
                    v-model="cep_data.logradouro"
                ></v-text-field>
                <v-text-field
                    label="Número"
                    placeholder="Número"
                    variant="outlined"
                    v-model="cep_number"
                ></v-text-field>
                <v-text-field
                    label="Complemento"
                    placeholder="Complemento"
                    variant="outlined"
                    v-model="cep_data.complemento"
                ></v-text-field>
                <v-text-field
                    label="Estado"
                    placeholder="Estado"
                    variant="outlined"
                    v-model="cep_data.uf"
                ></v-text-field>
                <v-text-field
                    label="Cidade"
                    placeholder="Cidade"
                    variant="outlined"
                    v-model="cep_data.localidade"
                ></v-text-field>
                <v-text-field
                    label="Bairro"
                    placeholder="Bairro"
                    variant="outlined"
                    v-model="cep_data.bairro"
                ></v-text-field>
            </div>
        </v-form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            name: "",
            email: "",
            phone_number: "",
            birthdate: "",
            cep: "",
            cep_data: {},
            cep_number: "",
        };
    },
    methods: {
        async handle_cep() {
            const cep_path = "http://viacep.com.br/ws/" + this.cep + "/json/";

            console.log(cep_path);

            const axios_get = await axios
                .get(cep_path)
                .then((data) => (this.cep_data = data.data));

            console.log(axios_get);

            console.log(this.cep_data);
        },
        async handle_submit() {
            const axios_post = await axios.post();
        },
    },
};
</script>
<style scoped></style>
