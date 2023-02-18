<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(true)

</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list dense>
        <v-list-item prepend-icon="mdi-account" title="admin" value="admin"></v-list-item>
        <v-list-item prepend-icon="" title="メンバー管理" value=""></v-list-item>
        <v-list-item prepend-icon="" title="シフト管理" value=""></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="設定" value="設定"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="ログアウト" value="ログアウト"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="teal-accent-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>AutoShiftPlanner</v-toolbar-title>
    </v-app-bar>
  </v-app>
</template>

<style scoped></style>
