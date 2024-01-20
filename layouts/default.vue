<template>
  <v-app>
    <v-layout>
      <ClientOnly>
        <m-base-navigation />
        <v-main>
          <NuxtPage />
        </v-main>
        <m-base-footer />
      </ClientOnly>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app {
  margin: 0 12rem 0 12rem;
}
</style>
