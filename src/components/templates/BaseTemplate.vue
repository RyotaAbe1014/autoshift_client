<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'


const drawer: Ref<boolean> = ref(true)
const oraganizationName: Ref<string | undefined> = ref(undefined)

onMounted(() => {
  if (sessionStorage.getItem('oraganizationName') === undefined) {
    window.location.href = '/login'
  }
  console.log(sessionStorage.getItem('oraganizationName'))
  oraganizationName.value = sessionStorage.getItem('oraganizationName') as string
})

const logout = async (): Promise<void> => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('oraganizationName')
  window.location.href = '/login'
}
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <v-list dense>
      <v-list-item prepend-icon="mdi-account" :title="oraganizationName" :value="oraganizationName"></v-list-item>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="メンバー管理"></v-list-item>
        </template>
        <v-list-item prepend-icon="" title="メンバー一覧" value="メンバー一覧" to="/members"></v-list-item>
        <v-list-item prepend-icon="" title="メンバー追加" value="メンバー追加" to="/members/create"></v-list-item>
      </v-list-group>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-calendar-month" title="シフト管理"></v-list-item>
        </template>
        <v-list-item prepend-icon="" title="メンバー別シフト提出" value="メンバー別シフト提出" to="/shifts/create"></v-list-item>
        <!-- <v-list-item prepend-icon="" title="メンバー追加" value="メンバー追加"></v-list-item> -->
      </v-list-group>
      <v-list-item prepend-icon="mdi-cog" title="設定" value="設定"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="ログアウト" value="ログアウト" @click="logout"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="teal-accent-4">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>AutoShiftPlanner</v-toolbar-title>
  </v-app-bar>
</template>

<style scoped></style>
