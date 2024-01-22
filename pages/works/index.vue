<template>
  <div class="pa-6">
    <v-container>
      <v-row class="py-12">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(project, ind) in projects"
          :key="project.title"
        >
          <v-card
            variant="outlined"
            flat
            height="300"
            color="#ebebeb"
            :image="`/img/${project?.imgUrl}.png`"
            :to="`works/${project.id}`"
          >
          </v-card>
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
