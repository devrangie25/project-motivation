<template>
  <v-app>
    <v-layout>
      <ClientOnly>
        <v-navigation-drawer v-model="isShowSideBar" temporary>
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
        </v-navigation-drawer>
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
