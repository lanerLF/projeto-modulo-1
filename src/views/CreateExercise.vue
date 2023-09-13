<template>
  <div class="ma-5" >
    <h2>Exercícios</h2>
    <v-divider class="border-opacity-75" ></v-divider>
    <div class="d-flex flex-column">
      <div class="d-flex flex-column">
        <v-form @submit.prevent="handle_submit" class="d-flex flex-row pa-5 ma-2 align-start justify-center">
          <v-text-field
            label="Nome do exercício"
            placeholder="Digite o nome do exercício..."
            variant="outlined"
            v-model="exercise_name"
            :rules="[value => !!value || 'O campo deve ser preenchido corretamente!']"
            ></v-text-field>
          <v-btn type="submit" size="x-large" color="#1e90ff" class="px-2 mx-5 text-center" >Cadastrar</v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        exercise_name: "",
      }
    },
  methods: {
    handle_submit(){

    }
  }
}
</script>
<style scoped>
</style>
