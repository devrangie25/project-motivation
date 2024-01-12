<template>
  <v-app-bar density="prominent" color="#ebebeb" flat class="app-bar-container">
    <template v-slot:prepend>
      <span class="font-weight-bold text-h6"> Motivation </span>
    </template>

    <template v-slot:append>
      <v-btn class="text-capitalize">About</v-btn>
      <v-btn class="text-capitalize ml-4">Works</v-btn>
      <v-btn
        class="text-capitalize ml-4 rounded-xl"
        color="primary"
        variant="outlined"
        width="100"
        >Hire Me</v-btn
      >
    </template>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-bar-container {
  padding: 0 20.3rem 0 20.3rem;
}
</style>
