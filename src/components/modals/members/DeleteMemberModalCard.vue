<script setup lang="ts">
import { defineProps } from 'vue';

interface props {
  userId?: number;
  deleteUser: (id: number) => void;
  changeShow: () => void;
}

const props = defineProps<props>();
</script>

<template>
<!-- modal -->
    <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="changeShow">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
</template>