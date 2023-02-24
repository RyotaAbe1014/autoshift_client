<script setup lang="ts">
import BaseTemplate from '../../components/templates/BaseTemplate.vue';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// 一週間を表す配列
const week: Ref<string[]> = ref(['月', '火', '水', '木', '金', '土', '日']);

// 来週の日曜日を取得
const nextSunday = new Date();
nextSunday.setDate(nextSunday.getDate() + (7 - nextSunday.getDay()) % 7);

// 一週間の日付を取得
const dates: Ref<Date[]> = ref([]);
for (let i = 0; i < 7; i++) {
  const date = new Date(nextSunday);
  date.setDate(date.getDate() + i);
  dates.value.push(date);
}

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
