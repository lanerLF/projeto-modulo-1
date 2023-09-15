<template>
  <h2>Alunos</h2>
  <v-divider class="border-opacity-75"></v-divider>
  <v-container>
    <v-text-field
      append-inner-icon="mdi-magnify"
      label="Procurar"
      placeholder="Procurar estudante..."
      v-model="student_search"
      variant="outlined"
    >
    </v-text-field>
  </v-container>
  <v-container>
    <table class="table table-bordered width-100">
      <thead>
        <tr>
          <th scope="col" style="width: 70%" >Nome</th>
          <th scope="col" style="width: 30%">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in students_data.students" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <v-btn class="mx-3" >Montar Treino</v-btn>
            <v-btn>Ver</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      students_data: {},
      student_search: "",
    };
  },
  methods: {
    async handle_get() {
      const axios_get = await axios
        .get("http://localhost:3000/students")
        .then((res) => (this.students_data = res.data))
        .catch((error) => console.log(error));
      console.log(this.students_data);
    },
  },
  mounted() {
    this.handle_get();
  },
};
</script>
<style scoped></style>
