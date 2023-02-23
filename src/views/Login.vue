<script setup lang="ts">
import { ref, Ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const name: Ref<string> = ref('')
const password: Ref<string> = ref('')
const router = useRouter()


const login = async (): Promise<void> => {
  // ログイン処理
  await axios.post('http://localhost:8000/token', {
    name: name.value,
    password: password.value
  })
  .then((res) => {
      // セッションストレージにトークンを保存
      console.log(res)
      sessionStorage.setItem('token', res.data.access_token)
      sessionStorage.setItem('oraganizationName', res.data.organization_name)
      // '/'にリダイレクト
      router.push('/')
    }).catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <v-app>
    <v-main class="main">
      <v-container>
        <v-row class="pt-16">
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-card>
              <v-card-title class="text-center">Login</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field label="組織名" v-model="name"></v-text-field>
                  <v-text-field label="Password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="teal-accent-4" class="mx-auto" @Click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.main {
  background-color: #f5f5f5;
}
</style>