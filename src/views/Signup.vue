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
                v-model="name"
                :rules="[
                  (value) =>
                    !!value < 3 || 'O nome deve ter mais de 3 caracteres!',
                ]"
              ></v-text-field>
              <v-text-field
                label="Email"
                variant="outlined"
                rounded="xl"
                type="email"
                v-model="email"
                :rules="[(value) => !!value || 'O email é obrigatório!']"
              ></v-text-field>
              <v-text-field
                label="Senha"
                variant="outlined"
                rounded="xl"
                type="password"
                v-model="password"
                :rules="[(value) => !!value || 'A senha é obrigatória!']"
              ></v-text-field>
              <v-text-field
                label="Confirme a Senha"
                variant="outlined"
                rounded="xl"
                type="password"
                :rules="[
                  (value) => !!value || 'Por favor, confirme sua senha!',
                  (value) =>
                    value == this.password || 'As senhas precisam coincidir!',
                ]"
              ></v-text-field>
              <v-select
                label="Plano"
                variant="outlined"
                v-model="selected_item"
                :items="items"
                :rules="[(value) => !!value || 'Por favor, escolha um plano!']"
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
import axios from "axios";
export default {
  data() {
    return {
      selected_item: "Bronze",
      items: ["Bronze", "Prata", "Ouro"],
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    async handleSignup() {
      const { valid } = await this.$refs.form.validate();

      if (!valid) {
        alert("FAVOR PREENCHA OS CAMPOS CORRETAMENTE!");
        return;
      }
      try {
        const body = {
          name: this.name,
          email: this.email,
          password: this.password,
          type_plan: this.selected_item,
        };

        const axios_post = await axios.post(
          "http://localhost:3000/users",
          body
        );
        console.log(axios_post);

        if (axios_post.status == 201) {
          alert("Usuario cadastrado com sucesso!");
          this.$router.push("/");
        }
      } catch (error) {
        alert("Não foi possível cadastrar o usuário no momento.", error);
      }
    },
  },
};
</script>
<style scoped></style>
