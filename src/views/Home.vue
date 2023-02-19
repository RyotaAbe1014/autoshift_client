<script setup lang="ts">
import BaseTemplate from '../components/templates/BaseTemplate.vue';
</script>

<template>
  <v-app>
    <BaseTemplate />
    <v-main class="main">
      <v-container>
        <h2>Home</h2>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.main {
  background-color: #FAFAFA;
}
</style>
