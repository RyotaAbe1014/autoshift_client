<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(true)

</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list dense>
        <v-list-item prepend-icon="mdi-account" title="株式会社00" value="株式会社00"></v-list-item>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="メンバー管理"></v-list-item>
          </template>
          <v-list-item prepend-icon="" title="メンバー一覧" value="メンバー一覧"></v-list-item>
          <v-list-item prepend-icon="" title="メンバー追加" value="メンバー追加"></v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-calendar-month" title="シフト管理"></v-list-item>
          </template>
          <!-- <v-list-item prepend-icon="" title="メンバー一覧" value="メンバー一覧"></v-list-item>
          <v-list-item prepend-icon="" title="メンバー追加" value="メンバー追加"></v-list-item> -->
        </v-list-group>
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
