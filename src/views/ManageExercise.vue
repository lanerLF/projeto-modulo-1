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
        type="number"
        :rules="[(value) => !!value || 'O campo deve ser preenchido!']"
      ></v-text-field>
      <v-text-field
        class="mw-100 w-50"
        variant="outlined"
        label="Pausa"
        placeholder="Pausa..."
        v-model="pause"
        type="time"
        :rules="[(value) => !!value || 'O campo deve ser preenchido!']"
      ></v-text-field>
      <v-select
        class="mw-100 w-50"
        variant="outlined"
        label="Dia da semana"
        placeholder="Dia da semana..."
        v-model="week_day"
        :items="week_day_list"
        :rules="[(value) => !!value || 'O campo deve ser preenchido!']"
      ></v-select>
      <v-textarea
        class="mw-100 w-50"
        label="Observações"
        placeholder="Observações..."
        clearable
        variant="outlined"
        v-model="observations"
      ></v-textarea>
      <v-btn type="submit" color="#1e90ff">Cadastrar</v-btn>
    </v-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      exercise_data: {},
      exercise_list: [],
      selected_item: null,
      repetitions: 0,
      kilograms: 0,
      pause: "",
      week_day: new Date(),
      observations: "",
      week_day_list: [
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feita",
        "Sábado",
        "Domingo",
      ],
    };
  },
  methods: {
    async handle_get() {
      const axios_get = await axios
        .get("http://localhost:3000/exercises")
        .then((res) => (this.exercise_data = res.data))
        .catch((error) => alert(error));
      this.exercise_list = this.exercise_data.map((item) => {
        return item.description;
      });
    },
    async handle_submit() {
      const { valid } = await this.$refs.form.validate();

      if (!valid) {
        alert("PREENCHA OS CAMPOS CORRETAMENTE.");
        return;
      }
      if (this.week_day == "Segunda-feira") {
        return (this.week_day = "segunda");
      } else if (this.week_day == "Terça-feira") {
        return (this.week_day = "terca");
      } else if (this.week_day == "Quarta-feira") {
        return (this.week_day = "quarta");
      } else if (this.week_day == "Quinta-feira") {
        return (this.week_day = "quinta");
      } else if (this.week_day == "Sexta-feira") {
        return (this.week_day = "sexta");
      } else if (this.week_day == "Sábado") {
        return (this.week_day = "sabado");
      } else if (this.week_day == "Domingo") {
        return (this.week_day = "domingo");
      }
      const user_data = JSON.parse(localStorage.getItem("user-info")) || null;
      const body = {
        student_id: user_data.name,
        exercise_id: this.selected_item,
        repetitions: this.repetitions,
        weight: this.kilograms,
        break_time: this.pause,
        observations: this.observations,
        day: this.weekday,
      };
      const axios_post = await axios
        .post("http://localhost:3000/workouts", body)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            alert("TREINO CADASTRADO COM SUCESSO.");
            console.log(res.status);
            console.log(body);
          }
        })
        .catch((error) => {
          alert("FALHA AO CADASTRAR", error);
        });
    },
  },
  mounted() {
    this.handle_get();

    this.week_day = new Date().toLocaleDateString("PT", { weekday: "long" });
    this.week_day =
      this.week_day.charAt(0).toUpperCase() + this.week_day.slice(1);
  },
};
</script>
<style scoped></style>
