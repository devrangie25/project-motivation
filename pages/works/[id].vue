<template>
  <div class="pa-6">
    <v-container>
      <v-row class="py-12">
        <v-col cols="12" md="8">
          <v-card
            flat
            variant="outlined"
            height="500"
            color="#ebebeb"
            :image="`/img/${getProject?.imgUrl}.png`"
          >
            <v-card-text class="text-center">
              <img v-if="!getProject?.imgUrl" :src="`/img/laptop.png`">
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <div v-if="getProject?.title" class="text-body-1 mb-4">
            <span class="font-weight-bold"> Project Name: </span>
            <span>
              {{ getProject?.title }}
            </span>
          </div>

          <div v-if="getProject?.description" class="text-body-1 mb-4">
            <span class="font-weight-bold"> Description: </span>
            <span>
              {{ getProject?.description }}
            </span>
          </div>

          <div v-if="getProject?.repo" class="mb-4 text-body-1">
            <span class="font-weight-bold"> Repo: </span>
            <a href="https://github.com/vuejs" class="text-decoration-none">
              {{ getProject?.repo }}</a
            >
          </div>

          <div v-if="getProject?.link" class="mb-4 text-body-1">
            <span class="font-weight-bold"> Link: </span>
            <a
              :href="getProject?.link || '/'"
              class="text-decoration-none"
              target="_blank"
            >
              {{ getProject?.link }}
            </a>
          </div>

          <div v-if="getProject?.stacks" class="text-body-1 mb-4">
            <span class="font-weight-bold"> Tech Stack: </span>
            <div class="d-flex mt-4">
              <v-card
                v-for="stack in getProject?.stacks"
                flat
                height="60"
                width="60"
                class="pa-2 text-body-2 mr-4 d-flex align-center"
              >
                <img :src="`/img/${stack}.png`" width="100%" />
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const worksStore = useWorksStore()

const getProject = computed(() => {
  return worksStore.getProjectById(+route.params.id)
})

onMounted(() => {
  console.log("getProject", getProject.value)
})
</script>

<style scoped>
/* .v-img__img--cover {
  object-fit: cover;
} */

.work-card {
  object-fit: contain;
}
</style>
