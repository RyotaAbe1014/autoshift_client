<script setup lang="ts">
import BaseTemplate from '../../components/templates/BaseTemplate.vue';

const users = [
  {
    id: 1,
    name: 'test',
    email: 'test@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@test.com',
  },
]

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
                  アクション
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <v-btn color="teal-lighten-1">
                    編集
                  </v-btn>
                  <v-btn color="error ml-3">
                    削除
                  </v-btn>
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
