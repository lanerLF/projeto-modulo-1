<template>
  <div class="ma-5" >
    <h2>Exercícios</h2>
    <v-divider class="border-opacity-75" ></v-divider>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row pa-6 justify-center align-start" >
        <v-text-field
          label="Nome do exercício"
          placeholder="Digite o nome do exercício..."
          variant="outlined"
          v-model="exercise_name"
          :rules="[value => !!value || 'O campo deve ser preenchido corretamente!']"
          ></v-text-field>
        <v-btn size="x-large" color="#1e90ff" class="px-2 mx-5 text-center" >Cadastrar</v-btn>
      </div>
    </div>
  </div>
</template>
<script> 
</script>
<style scoped>
</style>
