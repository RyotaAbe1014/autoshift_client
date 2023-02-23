<script setup lang="ts">
import BaseTemplate from '../../components/templates/BaseTemplate.vue';
import { ref, Ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios';

const name: Ref<string> = ref('');
const email: Ref<string> = ref('');
const phoneNumber: Ref<string> = ref('');


const route = useRoute()
const router = useRouter()
const userId = route.params.id
const token = sessionStorage.getItem('token')

const getUser = async () => {
  await axios.get(`http://localhost:8000/users/${userId}`
    , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      name.value = res.data.name
      email.value = res.data.email
      phoneNumber.value = res.data.phone_number
    })
    .catch((err) => {
      console.log(err)
    })
}

// update user
const UpdateUser = async () => {
  const data = {
    name: name.value,
    email: email.value,
    phone_number: phoneNumber.value
  }
  await axios.put(`http://localhost:8000/users/${userId}`, data
    , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    ).then((res) => {
      console.log(res)
      router.push('/members')
    }).catch((err) => {
      console.log(err)
    })
}

  onMounted(() => {
    getUser()
  })

</script>

<template>
  <v-app>
    <BaseTemplate />
    <v-main class="main">
      <v-container>
        <v-row>
          <v-col cols="4">
            <h1>メンバー編集</h1>
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
              <v-text-field label="電話番号" outlined dense v-model="phoneNumber" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-btn color="primary" class="float-right" @click="UpdateUser">
                保存
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
