<template>
  <v-footer color="#ebebeb" app class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="mt-4 subtitle-1">
      <span class="font-italic">
        "Don’t comment bad code, rewrite it." <span> – Brian Kernighan </span> 
      </span>
    </div>

    <div class="subtitle-1 my-4">
      Project Motivation 2024 | Made with NuxtJs + Vuetify | <span class="font-weight-bold"> Dev Rangie </span>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const icons = ref([
  "mdi-facebook",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>

<style scoped>
.temp {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
