<script setup lang="ts">
import BaseTemplate from '../../components/templates/BaseTemplate.vue';
import { ref, Ref } from 'vue';
import axios from 'axios';

const name: Ref<string> = ref('');
const email: Ref<string> = ref('');
const phone_number: Ref<string> = ref('');


const addMember = () => {
  const token = sessionStorage.getItem('token');
  const data = {
    name: name.value,
    email: email.value,
    phone_number: phone_number.value
  }
  axios.post('http://localhost:8000/users/', data, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  }
  )
}
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
              <v-text-field label="名前" outlined dense v-model="name" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field label="メールアドレス" outlined dense v-model="email" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field label="電話番号" outlined dense v-model="phone_number" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-btn color="primary" class="float-right" @click="addMember">
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
