<script setup lang="ts">

</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        
        <v-row class="mx-auto">
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-card>
              <v-card-title class="text-center">Login</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field label="組織名"></v-text-field>
                  <v-text-field label="Password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="teal-accent-4" class="mx-auto">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>