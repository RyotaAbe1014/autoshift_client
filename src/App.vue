<script setup lang="ts"></script>
<template>
  <div class="app" id="app">
    <router-view />
    <router-link to="/about">About</router-link>
    <br>
    <router-link to="/">Home</router-link>
  </div>
</template>