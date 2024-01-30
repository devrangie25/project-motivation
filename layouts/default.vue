<template>
  <v-app>
    <v-navigation-drawer v-model="isShowSideBar" temporary width="200">
      <v-list-item class="py-4" title="Motivation"></v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
          to="/"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-monitor"
          title="Works"
          value="works"
          to="/works"
        ></v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            block
            flat
            class="text-capitalize"
            color="primary"
            variant="flat"
            target="_blank"
            href="/pdf/laurente_rangie_motivation_resume.pdf"
          >
            <span class="text-white"> Hire Me </span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-layout>
      <ClientOnly>
        <m-base-navigation @show-side-bar="onShowSideBar" />
        <v-main>
          <NuxtPage />
        </v-main>
        <m-base-footer />
      </ClientOnly>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
const isShowSideBar = ref(false)

const onShowSideBar = () => {
  isShowSideBar.value = true
}
</script>

<style scoped lang="scss">
.app {
  margin: 0 12rem 0 12rem;
}
</style>
