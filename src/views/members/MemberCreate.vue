<script setup lang="ts">
import BaseTemplate from '../../components/templates/BaseTemplate.vue';

</script>

<template>
  <v-app>
    <BaseTemplate />
    <v-main class="main">
      <v-container>
        <v-row>
          <v-col cols="4">
            <h1>メンバー追加</h1>
          </v-col>
        </v-row>
        <v-container class="container">
          <v-row>
            <v-col cols="6">
              <v-text-field label="名前" outlined dense />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field label="メールアドレス" outlined dense />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-btn color="primary" class="float-right">
                追加
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.main {
  background-color: #FAFAFA;
}

.container {
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
}
</style>
