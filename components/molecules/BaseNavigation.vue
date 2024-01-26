<template>
  <v-app-bar
    density="prominent"
    :color="getNavColor"
    flat
    class="app-bar-container"
  >
    <template v-slot:prepend>
      <span class="font-weight-bold text-h6"> Motivation </span>
    </template>

    <template v-slot:append>
      <v-btn class="text-capitalize" to="/">Home</v-btn>
      <v-btn class="text-capitalize ml-4" to="/works">Works</v-btn>
      <v-btn
        class="text-capitalize ml-4 rounded-xl"
        color="primary"
        variant="flat"
        width="120"
        target="_blank"
        href="/pdf/laurente_rangie_motivation_resume.pdf"
      >
        <span class="text-white"> Hire Me </span>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const route = useRoute()

console.log("route", route)

const getNavColor = computed(() => {
  if (route.path !== "/") {
    return "#ebebeb"
  } else {
    return "#00cc8e"
  }
})
</script>

<style scoped>
.app-bar-container {
  padding: 0 20.3rem 0 20.3rem;
}
</style>
