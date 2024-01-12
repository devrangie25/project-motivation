<template>
  <v-app>
    <v-layout>
      <m-base-navigation />
      <v-main>
        <NuxtPage />
      </v-main>
    </v-layout>
    <m-base-footer />
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app {
  margin: 0 12rem 0 12rem;
}
</style>
