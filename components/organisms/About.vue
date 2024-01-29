<template>
  <div :class="`${['small', 'extra-small', 'super-small'].includes(getScreenType) ? 'mobile-' : ''}about-section-container pa-6`">
    <v-container class="about-inner-section">
      <div class="text-h4 mt-4">About Me</div>

      <v-row :class="`row-about ${['small', 'extra-small', 'super-small'].includes(getScreenType) ? 'mt-6' : ''}`" align="center">
        <v-col v-if="!['small', 'extra-small', 'super-small'].includes(getScreenType)" cols="12" md="6" class="d-flex justify-center">
          <img
            src="/img/my-image.png"
            :width="getLandingMyImgWidth"
            alt="my-img"
            class="rounded"
          />
        </v-col>

        <v-col cols="12" md="6" class="d-flex justify-center">
          <div class="description-text-container">
            <span :class="`text-${['small', 'extra-small', 'super-small'].includes(getScreenType) ? 'body-1' : 'h6'} about-me-description`">
            <img v-if="['small', 'extra-small', 'super-small'].includes(getScreenType)" src="/img/my-image.png" :width="getLandingMyImgWidth" class="mr-4 mt-2" style='float: left;'/>
            <span class="text-h4">W</span>ith three years of professional experience as a Web Developer, I
              have honed my skills in crafting dynamic and responsive websites
              that seamlessly blend functionality with aesthetics. My journey in
              the world of web development has been fueled by a passion for
              creating immersive online experiences that captivate users. Beyond
              the digital realm, I am an avid adventurer, constantly seeking new
              challenges and embracing the thrill of exploration both in code
              and the great outdoors.
            </span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const { getScreenType } = useScreenType()

const getLandingMyImgWidth = computed(() => {
  if (["extra-small", "small", "super-small"].includes(getScreenType.value)) {
    return "150"
  }
  if (["medium"].includes(getScreenType.value)) {
    return "300"
  } else {
    return "350"
  }
})
</script>

<style scoped>
.about-section-container {
  height: 80vh;
}
.mobile-about-section-container {
  height: 100%;
}
.about-inner-section {
  height: 100%;
}
.row-about {
  height: 100%;
}
.about-me-description {
  line-height: 2rem;
}
</style>
