<template>
  <div
    :class="`${
      ['small', 'extra-small', 'super-small'].includes(getScreenType) ? 'mobile-' : ''
    }experience-section-container pa-6`"
  >
    <v-container class="experience-inner-section">
      <div
        class="text-h4 mt-6 mb-n12"
      >
        Job Experience
      </div>
      <!-- Medium and Large Screen -->
      <div
        v-if="!['small', 'extra-small', 'super-small'].includes(getScreenType)"
        class="timeline"
      >
        <v-timeline direction="horizontal" line-inset="12">
          <v-timeline-item
            v-for="(experience, ind) in experiences"
            class="text-center"
          >
            <template v-slot:opposite>
              <span class="font-weight-bold"> {{ experience.company }} </span>
            </template>
            <div class="text-body-2">
              {{ experience["job-title"] }} <br />
              {{ experience.span }}
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>

      <!-- Smaller Screen -->
      <div class="small-screen-timeline" v-if="['small', 'extra-small', 'super-small'].includes(getScreenType)">
        <v-timeline truncate-line="start" side="end">
          <v-timeline-item
            v-for="(experience, ind) in experiences"
            :key="ind"
            size="small"
            width="100%"
            :hide-opposite="['super-small'].includes(getScreenType)"
          >
            <template v-slot:opposite>
              <span class="text-body-2"> {{ experience.span }} </span>
            </template>
            <v-alert>
              <div class="text-body-2">
                <div class="font-weight-bold">
                  {{ experience.company }}
                </div>
                <div>
                  {{ experience["job-title"] }}
                </div>
                <div v-if="['super-small'].includes(getScreenType)">
                  {{ experience.span }}
                </div>
              </div>
            </v-alert>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const runtimeConfig = useRuntimeConfig()
const { getScreenType } = useScreenType()

const experiencesStore = useExperienceStore()

const { jobExperiencesFullTime, jobExperiencesPartTime } = storeToRefs(experiencesStore)

const experiences: any = computed(() => {
  if (getJobType.value === 'Foodics') {
    return jobExperiencesPartTime.value
  }

  if (getJobType.value === 'Full-Time') {
    return jobExperiencesFullTime.value
  }
})

const getJobType: any = computed(() => {
  return runtimeConfig.public.NUXT_PUBLIC_JOB_TYPE || 'Full-Time'
})
</script>

<style scoped>
.small-screen-timeline {
  margin-top: 8rem;
}
.experience-section-container {
  height: 80vh;
}
.experience-inner-section {
  height: 100%;
}
.timeline {
  height: 100%;
  display: flex;
}
.mobile-experience-section-container {
  height: 100%;
}
</style>
