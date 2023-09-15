<template>
  <div class="ma-5">
    <h2>Exercícios</h2>
    <v-divider class="border-opacity-75"></v-divider>
    <div class="d-flex flex-column">
      <div class="d-flex flex-column">
        <v-form
          ref="form"
          @submit.prevent="handle_submit"
          class="d-flex flex-row pa-5 ma-2 align-start justify-center"
        >
          <v-text-field
            label="Nome do exercício"
            placeholder="Digite o nome do exercício..."
            variant="outlined"
            v-model="exercise_name"
            :rules="[
              (value) => !!value || 'O campo deve ser preenchido corretamente!',
            ]"
          ></v-text-field>
          <v-btn
            type="submit"
            size="x-large"
            color="#1e90ff"
            class="px-2 mx-5 text-center"
            >Cadastrar</v-btn
          >
        </v-form>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nome do exercício</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in exercise_data" :key="item.id">
              <td>{{ item.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      exercise_name: "",
      exercise_data: {},
    };
  },
  methods: {
    async handle_submit() {
      const { valid } = await this.$refs.form.validate();

      if (!valid) {
        alert("PREENCHA OS CAMPOS CORRETAMENTE ANTES DE CADASTRAR!");
        return;
      }
      try {
        const body = {
          description: this.exercise_name,
        };

        const axios_post = await axios.post(
          "http://localhost:3000/exercises",
          body
        );

        alert("Exercicio cadastrado com sucesso.");

        this.update_exercises();
      } catch (error) {
        alert("Falha ao cadastrar exercício.", error);
      }
    },
    async update_exercises() {
      const axios_get = await axios
        .get("http://localhost:3000/exercises")
        .then((res) => (this.exercise_data = res.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.update_exercises();
  },
};
</script>
<style scoped></style>
