<template>
  <div class="landing-section-container pa-6">
    <v-container class="landing-inner-section">
      <v-row no-gutters align="center">
        <v-col>
          <div>
            <div class="text-h6">Hello, I'm</div>
            <div class="text-h4 font-weight-bold mt-2">{{ getName }}</div>
            <div class="mt-6">
              <span class="text-break" v-html="getLandingDescription"></span>
            </div>
            <div class="mt-12">
              <v-btn
                class="rounded-xl text-capitalize"
                density="default"
                flat
                height="50"
                width="180"
                color="primary"
                to="/works"
              >
                See my works
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col v-if="!['extra-small', 'super-small', 'small'].includes(getScreenType)" class="d-flex justify-center">
          <img
            class="big-head"
            src="/img/bighead-2.svg"
            alt="big-head-icon-img"
            :width="getLandingImgWidth"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const { getScreenType } = useScreenType()
const runtimeConfig = useRuntimeConfig()

const getName = computed(() => {
  return runtimeConfig.public.NUXT_PUBLIC_NAME
})

const getLandingImgWidth = computed(() => {
  if (['extra-small', 'small', 'super-small'].includes(getScreenType.value)) {
    return '300'
  } if (['medium'].includes(getScreenType.value)) {
    return '400'
  } else {
    return '500'
  }
})

const getLandingDescription = computed(() => {
  return (
    runtimeConfig.public.NUXT_PUBLIC_LANDING_DESCRIPTION ||
    "Web Developer based on Philippines, who love adventure, play basketball and online games."
  )
})
</script>

<style scoped>
.big-head {
  margin: -10rem 0 0 0;
}
.landing-section-container {
  height: 80vh;
  background: #ebebeb;
}
.landing-inner-section {
  height: 100%;
}
.v-row {
  height: 100%;
}
</style>
