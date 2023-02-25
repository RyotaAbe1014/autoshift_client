<script setup lang="ts">
import BaseTemplate from '../../components/templates/BaseTemplate.vue';
import { ref, Ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
}

interface Shift {
  id?: number;
  date: string;
  start_time?: string;
  end_time?: string;
  user_id: number;
}

const users: Ref<User[]> = ref([]);
const searchUserId: Ref<number | undefined> = ref(undefined);
const token = sessionStorage.getItem('token');
const shifts: Ref<Shift[]> = ref([]);
const dates: Ref<string[]> = ref([]);

const getUsers = () => {
  axios.get('http://localhost:8000/users/', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    users.value = res.data
  }).catch((err) => {
    console.log(err)
  }
  )
}

const onClickGetUserShift = async () => {
  console.log(searchUserId.value)
  const res = await axios.get(`http://localhost:8000/shifts/${searchUserId.value}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    shifts.value = res.data
  }).catch((err) => {
    console.log(err)
  }
  )
}


const onClickSaveShift = async () => {
  console.log(shifts.value)
  const res = await axios.post(`http://localhost:8000/shifts/`, shifts.value, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    
  }).catch((err) => {
    console.log(err)
  }
  )
}

onMounted(() => {
  getUsers()
})

</script>

<template>
  <v-app>
    <BaseTemplate />
    <v-main class="main">
      <v-container>
        <v-row>
          <v-col cols="4">
            <h1>シフト提出</h1>
          </v-col>
        </v-row>
        <v-container class="container">
          <!-- 検索フォーム -->
          <v-row>
            <v-col cols="4">
              <v-select label="Select" :items="users" v-model="searchUserId" variant="solo" item-title="name"
                item-value="id"></v-select>
            </v-col>
            <v-col cols="4">
              <v-btn color="primary" @click="onClickGetUserShift">
                検索
              </v-btn>
            </v-col>
          </v-row>
          <v-table height="450">
            <thead>
              <tr>
                <th class="text-left">日付</th>
                <th class="text-left">開始時間</th>
                <th class="text-left">終了時間</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="shift in shifts" :key="shift.id">
                <td>{{ shift.date }}</td>
                <td><v-text-field v-model="shift.start_time" type="time" outlined></v-text-field></td>
                <td><v-text-field v-model="shift.end_time" type="time" outlined></v-text-field></td>
              </tr>
            </tbody>
          </v-table>
          <v-row>
            <v-col cols="10">
            </v-col>
            <v-col cols="2">
              <v-btn color="primary" class="mt-5" @click="onClickSaveShift">
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
