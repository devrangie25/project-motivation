<template>
  <v-footer color="#ebebeb" class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="mt-4">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
    </div>

    <div class="subtitle-1 my-4">
      Project Motivation 2024 | <span class="font-weight-bold"> Dev Rangie </span>
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
