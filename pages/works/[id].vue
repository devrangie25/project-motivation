<template>
  <div class="work-container-index">
    <v-container class="pa-6">
      <v-row class="pb-12">
        <v-col cols="12">
          <v-btn to="/works" class="text-capitalize" variant="tonal">
            <v-icon> mdi-arrow-left </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="8">
          <v-card
            flat
            variant="outlined"
            :height="
              ['extra-small', 'super-small'].includes(getScreenType) &&
              getProject?.imgUrl
                ? '250'
                : ['extra-small', 'super-small'].includes(getScreenType) &&
                  !getProject?.imgUrl
                ? '100%'
                : '500'
            "
            color="#ebebeb"
          >
            <!-- <v-card-text class="text-center d-flex align-center justify-center"> -->
            <img
              v-if="getProject?.imgUrl"
              class="img-work"
              height="100%"
              :width="'100%'"
              :src="`/img/${getProject?.imgUrl}.png`"
            />
            <img
              v-if="!getProject?.imgUrl"
              :width="
                ['extra-small', 'super-small'].includes(getScreenType)
                  ? 280
                  : 480
              "
              :src="`/img/laptop.png`"
            />
            <!-- </v-card-text> -->
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
                <v-tooltip
                  :location="'top center'"
                  :origin="'auto'"
                  no-click-animation
                >
                  <template v-slot:activator="{ props }">
                    <img v-bind="props" :src="`/img/${stack.img}.png`" width="100%" />
                  </template>
                  <div>{{ stack.title }}</div>
                </v-tooltip>
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

const { getScreenType } = useScreenType()

const getProject = computed(() => {
  return worksStore.getProjectById(+route.params.id)
})

onMounted(() => {
  console.log("getProject", getProject.value)
})
</script>

<style scoped>
.img-work {
  object-fit: contain;
}
.work-container-index {
  background-image: url("/img/polygon-scatter-haikei.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
