<template>
  <div class="works-container-index">
    <v-container class="pa-6">
      <div class="mt-4">
        <span class="text-h4">
          Works
        </span>
      </div>
      <v-row class="pb-12 pt-6">
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
          v-for="(project, ind) in projects"
          :key="project.title"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              flat
              color="#F3F8FF"
              height="300"
              :to="`works/${project.id}`"

            >
              <v-img
                height="100%"
                :cover="project.imgUrl ? true : false"
                :src="`/img/${project.imgUrl ? project.imgUrl : 'laptop'}.png`"
              >
                <template v-slot:placeholder>
                  <div style="height: 100%;" class="d-flex align-center justify-center">
                    <a-loader />
                  </div>
                </template>
                <template v-slot:error>
                  <div style="height: 100%;" class="d-flex align-center justify-center">
                    <v-img :src="`/img/laptop.png`"></v-img>
                  </div>
                </template>
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-primary v-card--reveal text-h6 align-center justify-center"
                    style="height: 100%"
                  >
                    {{ project.title }}
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
const worksStore = useWorksStore()

const { projects } = storeToRefs(worksStore)
</script>

<style scoped>
.works-container-index {
  background-image: url("/img/polygon-scatter-haikei.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
