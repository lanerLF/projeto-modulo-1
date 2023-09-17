<template style="height: 100vh; width: 100vw">
  <div class="ma-5 mh-100 mw-100 d-flex flex-column">
    <h2>Montagem de Treino</h2>
    <v-divider class="border-opacity-75"></v-divider>
    <v-form
      class="d-flex flex-column align-center justify-center w-100 h-100"
      ref="form"
      @submit.prevent="handle_submit"
    >
      <v-select
        class="mw-100 w-50"
        label="Nome do exercício"
        placeholder="Digite o nome do exercício..."
        variant="outlined"
        v-model="selected_item"
        :items="exercise_list"
        :rules="[
          (value) => !!value || 'O campo deve ser preenchido corretamente!',
        ]"
      ></v-select>
      <v-text-field
        class="mw-100 w-50"
        label="Repetições"
        placeholder="Repetições..."
        v-model="repetitions"
        variant="outlined"
        :rules="[
          (value) => !!value || 'O campo deve ser preenchido!',
          (value) => value >= 1 || 'O valor mínimo é uma repetição!',
        ]"
      ></v-text-field>
      <v-text-field
        class="mw-100 w-50"
        variant="outlined"
        label="Quilos"
        placeholder="Quilos..."
        v-model="kilograms"
        :rules="[(value) => !!value || 'O campo deve ser preenchido!']"
      ></v-text-field>
      <v-text-field
        class="mw-100 w-50"
        variant="outlined"
        label="Pausa"
        placeholder="Pausa..."
        v-model="pause"
        :rules="[(value) => !!value || 'O campo deve ser preenchido!']"
      ></v-text-field>
      <v-text-field
        class="mw-100 w-50"
        variant="outlined"
        label="Dia da semana"
        placeholder="Dia da semana..."
        v-model="week_day"
        :rules="[(value) => !!value || 'O campo deve ser preenchido!']"
      ></v-text-field>
      <v-btn type="submit" color="#1e90ff" >Cadastrar</v-btn>
    </v-form>
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
      repetitions: 0,
      kilograms: 0,
      pause: "",
      week_day: "",
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
      const { valid } = await this.$refs.form.validate();

      if (!valid) {
        alert("PREENCHA OS CAMPOS CORRETAMENTE.");
        return
      }

    },
  },
  mounted() {
    this.handle_get();
  },
};
</script>
<style scoped></style>
