<script setup lang="ts">
import BaseTemplate from '../../components/templates/BaseTemplate.vue';
import { ref, Ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
}

interface shift {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  user_id: number;
}

const users: Ref<User[]> = ref([]);
const searchUserId: Ref<number | undefined> = ref(undefined);
const token = sessionStorage.getItem('token');
const shifts: Ref<shift[]> = ref([]);


const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const userShifts = [
  { start_time: "09:00:00", end_time: "17:00:00", user_id: 1 },
  { start_time: "10:00:00", end_time: "18:00:00", user_id: 2 },
  { start_time: "11:00:00", end_time: "19:00:00", user_id: 3 }
]

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

const getShifts = (userId: number) => {
  return userShifts.filter((shift) => shift.user_id === userId)
}

const getHours = (start: string, end: string) => {
  const startHour = parseInt(start.split(":")[0])
  const endHour = parseInt(end.split(":")[0])
  return hours.slice(startHour - 1, endHour)
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
          <v-col cols="6">
            <h1>2022/01/01のシフト</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-btn>希望を反映</v-btn>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="4">
                <v-select label="Select" :items="users" v-model="searchUserId" variant="solo" item-title="name"
                  item-value="id">
                </v-select>
              </v-col>
              <v-col cols="3">
                <v-text-field type="time" outlined></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field type="time" outlined></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn>保存</v-btn>
              </v-col>
            </v-row>
          </v-col>

        </v-row>

        <v-container class="container">
          <v-table height="500">
            <thead>
              <tr>
                <th class="text-left">名前</th>
                <th class="text-center" v-for="hour in hours" :key="hour">{{ hour }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td v-for="hour in hours" :key="hour" class="text-center">
                  <div
                    v-if="getShifts(user.id).some((shift) => getHours(shift.start_time, shift.end_time).includes(hour))">
                    <v-icon color="primary">mdi-check</v-icon>
                  </div>
                  <div v-else>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
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

