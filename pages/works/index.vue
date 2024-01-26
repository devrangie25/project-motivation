<template>
  <div class="pa-6">
    <v-container>
      <v-row class="py-12">
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
              variant="outlined"
              flat
              height="300"
              color="#ebebeb"
              :to="`works/${project.id}`"

            >
              <v-img
                height="100%"
                :cover="project.imgUrl ? true : false"
                :src="`/img/${project.imgUrl ? project.imgUrl : 'laptop'}.png`"
              >
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
