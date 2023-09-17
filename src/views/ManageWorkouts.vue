<template>
  <div>
    <h2>Treinos - {{ user_data.name }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_data: JSON.parse(localStorage.getItem("user-info"))
    };
  },
  mounted() {
  },
};
</script>
<style scoped></style>
