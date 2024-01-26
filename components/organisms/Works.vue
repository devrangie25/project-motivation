<template>
  <div class="works-section-container pa-6">
    <v-container class="works-inner-section">
      <div class="d-flex justify-space-between align-center mt-6 mb-12">
        <div class="text-h4">Works</div>
        <div>
          <v-btn
            variant="text"
            class="text-none"
            append-icon="mdi-arrow-right"
            to="/works"
          >
            See all
          </v-btn>
        </div>
      </div>
      <!-- For Medium and Larger Screen -->
      <v-row
        v-if="!['small', 'extra-small', 'super-small'].includes(getScreenType)"
      >
        <v-col cols="6" v-for="project in projectsToDisplay" :key="project.title">
          
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <v-card
              :elevation="isHovering ? 16 : 0"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
              class="pa-4"
              color="light"
              height="250"
              v-wave="{
                color: '#4ba885',
                initialOpacity: 0.5,
                finalOpacity: 0.5,
                easing: 'ease-in',
                dissolveDuration: 1,
                duration: 2,
                trigger: 'card'
              }"
              v-wave-trigger:card
            >
              <template v-slot:prepend>
                <v-icon icon="mdi-monitor" size="35"></v-icon>
              </template>

              <v-card-title> {{ project.title }} </v-card-title>

              <v-card-text>
                <div>
                  {{ project.description }}
                </div>
                <div class="learn-more-container mt-4">
                  <span
                    class="font-weight-regular learn-more text-none"
                    @click="onClickLearnMore(project.id)"
                  >
                    Learn more <v-icon size="18"> mdi-arrow-right </v-icon>
                  </span>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <!-- For Smaller Screen -->
      <v-row v-else align="center">
        <v-col cols="12">
          <v-slide-group v-model="model" center-active show-arrows>
            <v-slide-group-item
              v-for="project in projectsToDisplay"
              :key="project.title"
              v-slot="{ isSelected, toggle }"
            >
              <v-card
                :elevation="isSelected ? 16 : 0"
                :color="'light'"
                class="ma-4 pa-4"
                width="300"
                height="400"
                @click="toggle"
              >
                <template v-slot:prepend>
                  <v-icon icon="mdi-monitor" size="50"></v-icon>
                </template>

                <v-card-title class="mt-6"> {{ project.title }} </v-card-title>

                <v-card-text class="mt-2">
                  {{ project.description }}
                </v-card-text>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"

const worksStore = useWorksStore()
const { projectsToDisplay } = storeToRefs(worksStore)

const { getScreenType } = useScreenType()
const router = useRouter()

const model = ref(null)

const onClickLearnMore = (id: any) => {
  router.push(`/works/${id}`)
}
</script>

<style scoped>
.works-section-container {
  height: 80vh;
  margin: -5rem 0 0 0;
  background: #ebebeb;
}
.works-inner-section {
  height: 100%;
}
.learn-more {
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
}
</style>
