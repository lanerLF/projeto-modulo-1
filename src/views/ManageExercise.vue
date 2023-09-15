<template>
  <div class="ma-5">
    <h2>Montagem de Treino</h2>
    <v-divider class="border-opacity-75"></v-divider>
    <div class="d-flex flex-column">
      <div class="d-flex flex-column">
        <v-form
          ref="form"
          class="d-flex flex-row pa-5 ma-2 align-start justify-center"
          @submit.prevent="handle_submit"
        >
          <v-select
            label="Nome do exercício"
            placeholder="Digite o nome do exercício..."
            variant="outlined"
            v-model="selected_item"
            :items="exercise_list"
            :rules="[
              (value) => !!value || 'O campo deve ser preenchido corretamente!',
            ]"
          ></v-select>
          <v-btn
            type="submit"
            size="x-large"
            color="#1e90ff"
            class="px-2 mx-5 text-center"
            >Cadastrar</v-btn
          >
        </v-form>
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
      exercise_list: [],
      selected_item: null,
    };
  },
  methods: {
    async handle_get() {
      const axios_get = await axios
        .get("http://localhost:3000/exercises")
        .then((res) => (this.exercise_data = res.data))
        .catch((error) => alert(error));
      console.log(this.exercise_data);
      this.exercise_list = this.exercise_data.map((item) => {
        console.log(item.description);
        return item.description;
      });
    },
    async handle_submit() {
      console.log(this.selected_item);
    },
  },
  mounted() {
    this.handle_get();
  },
};
</script>
<style scoped></style>
