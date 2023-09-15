<template>
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
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in students_data" :key="item.name">
          <td>{{ item }}</td>
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </v-table>
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
  mounted() {
    const axios_get = axios
      .get("http://localhost:3000/students")
      .then((res) => (this.students_data = res.data))
      .catch((error) => console.log(error));

    console.log(axios_get);
  },
};
</script>
<style scoped></style>
