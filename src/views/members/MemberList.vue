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

const users: Ref<User[]> = ref([]);
const dialog: Ref<boolean> = ref(false);

const getUsers = () => {
  const token = sessionStorage.getItem('token');
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

const deleteUser = (id: number) => {
  const token = sessionStorage.getItem('token');
  axios.delete(`http://localhost:8000/users/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    console.log(res)
    // fillterで削除したユーザーを除外する
    users.value = users.value.filter((user) => user.id !== id)
    // ダイアログを閉じる
    dialog.value = false

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
            <h1>メンバー一覧</h1>
          </v-col>
          <v-col cols="4">
          </v-col>
          <v-col cols="4">
            <v-btn color="primary" class="float-right" to="/members/create">
              メンバーを追加
            </v-btn>
          </v-col>
        </v-row>
        <v-container class="container">
          <v-table height="600">
            <thead>
              <tr>
                <th class="text-left">
                  id
                </th>
                <th class="text-left">
                  名前
                </th>
                <th class="text-left">
                  メールアドレス
                </th>
                <th class="text-left">
                  電話番号
                </th>
                <th class="text-left">
                  アクション
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone_number }}</td>
                <td>
                  <v-btn color="teal-lighten-1" :to="`/members/${user.id}/edit`">
                    編集
                  </v-btn>
                  <v-btn color="error ml-3" @click="dialog = true">
                    削除
                  </v-btn>
                </td>
                <v-dialog v-model="dialog" width="auto">
                  <v-card class="pt-3">
                    <v-card-title class="text-center">
                      <h3>削除しても良いですか？</h3>
                    </v-card-title>
                    <v-card-text>
                      <p>削除したデータは復元できません。</p>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                      <v-btn color="error" @click="deleteUser(user.id)">削除</v-btn>
                      <v-btn color="primary" @click="dialog = false">キャンセル</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
