<template>
  <v-app-bar
    density="prominent"
    :color="getNavColor"
    flat
    class="app-bar-container"
  >
    <template v-slot:prepend>
      <div :class="`pl-${!['large', 'extra-large'].includes(getScreenType) ? '4' : '12'}`">
        <v-app-bar-nav-icon
          v-if="!['large', 'extra-large'].includes(getScreenType)"
          @click="onClickNavIcon"
        ></v-app-bar-nav-icon>
        <span v-else class="font-weight-bold text-h6"> Motivation </span>
      </div>
    </template>
    <template
      v-if="['large', 'extra-large'].includes(getScreenType)"
      v-slot:append
    >
      <div class="pr-12">
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
      </div>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const route = useRoute()
const { getScreenType } = useScreenType()

const emit = defineEmits(["show-side-bar"])

const getNavColor = computed(() => {
  if (route.path !== "/") {
    return "#ebebeb"
  } else {
    return "#00cc8e"
  }
})

const onClickNavIcon = () => {
  emit("show-side-bar", true)
}
</script>

<style scoped>
.app-bar-container {
  /* padding: 0 20.3rem 0 20.3rem; */
}
</style>
