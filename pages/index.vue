<template>
  <div class="app-container-index">
    <o-landing />
    <o-about />
    <o-expertise />
    <o-works />
    <o-experience />
    <o-contact v-if="false" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-container-index {
  background-image: url("/img/polygon-scatter-haikei.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
