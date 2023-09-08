<template>
    <div class="d-flex flex-column justify-center align-center">
        <v-form
            ref="form"
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
                        icon="mdi-plus"
                    ></v-btn>
                </div>
                <v-text-field
                    label="Logradouro"
                    placeholder="Logradouro"
                    variant="outlined"
                    v-model="cep_data.logradouro"
                    :rules="[
                        (value) => !!value || 'O Logradouro é obrigatório!',
                    ]"
                ></v-text-field>
                <v-text-field
                    label="Número"
                    placeholder="Número"
                    variant="outlined"
                    v-model="cep_number"
                    :rules="[(value) => !!value || 'O Número é obrigatório!']"
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
                    :rules="[(value) => !!value || 'O Estado é obrigatório!']"
                ></v-text-field>
                <v-text-field
                    label="Cidade"
                    placeholder="Cidade"
                    variant="outlined"
                    v-model="cep_data.localidade"
                    :rules="[(value) => !!value || 'A cidade é obrigatória!']"
                ></v-text-field>
                <v-text-field
                    label="Bairro"
                    placeholder="Bairro"
                    variant="outlined"
                    v-model="cep_data.bairro"
                    :rules="[(value) => !!value || 'O Bairro é obrigatório!']"
                ></v-text-field>
            </div>
        </v-form>
        <v-btn color="#1E90FF" @click.prevent="handle_submit" size="x-large"
            >Cadastrar</v-btn
        >
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
                .then((data) => (this.cep_data = data.data))
                .catch((error) => {
                    alert("Erro ao procurar cep.", error);
                });

            console.log(axios_get);

            console.log(this.cep_data);
        },
        async handle_submit() {
            const { valid } = await this.$refs.form.validate();

            if (!valid) {
                alert("FAVOR PREENCHER CORRETAMENTE OS CAMPOS.");
                return;
            }

            const body = {
                name: this.name,
                email: this.email,
                contact: this.phone_number,
                date_birth: this.birthdate,
                cep: this.cep,
                street: this.cep_data.logradouro,
                number: this.cep_number,
                neighborhood: this.cep_data.bairro,
                city: this.cep_data.localidade,
                province: this.cep_data.uf,
                complement: this.cep_data.complemento,
            };

            const axios_post = await axios
                .post("http://localhost:3000/students", body)
                .then((response) => {
                    if (response.status == 201) {
                        alert("Aluno cadastrado com sucesso!");
                        this.$refs.form.reset();
                    }
                })
                .catch((error) => {
                    alert("Erro ao cadastrar aluno.", error);
                });
        },
    },
};
</script>
<style scoped></style>
