<template>
  <div class="expertise-section-container pa-6">
    <v-container class="expertise-inner-section">
      <div class="text-h4 mt-6 mb-n12">Job Experience</div>
      <div class="timeline">
        <v-timeline direction="horizontal" line-inset="12">
          <v-timeline-item v-for="(experience, ind) in experiences" class="text-center">
            <template v-slot:opposite>
              <span class="font-weight-bold"> {{ experience.company }} </span>
            </template>
            <div class="text-body-2">
              {{ experience['job-title'] }} <br />
              {{ experience.span }}
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const experiences = ref([
  {
    company: "Softype Philippines",
    span: "Aug 2020 - Apr 2021",
    "job-title": "Jr. Technical Consultant"
  },
  {
    company: "CrewBloom Inc.",
    span: "Apr 2021 - Apr 2022",
    "job-title": "Jr. Web Developer"
  },
  {
    company: "Xiklab Digital",
    span: "Jan 2022 - Jun 2022",
    "job-title": "PT Software Developer"
  },
  {
    company: "Full Scale",
    span: "Apr 2022 - Present",
    "job-title": "Front End Developer"
  },
  {
    company: "CrewBloom Inc",
    span: "Sept 2022 - Nov 2022",
    "job-title": "PT Front End Developer"
  },
  {
    company: "Foodics",
    span: "Aug 2022 - Present",
    "job-title": "PT Software Engineer"
  },
  {
    company: "Qmulus Solutions",
    span: "Feb 2023 - Mar 2023",
    "job-title": "PT Front End Developer"
  },
]);
</script>

<style scoped>
.expertise-section-container {
  height: 80vh;
}

.expertise-inner-section {
  height: 100%;
}

.timeline {
  height: 100%;
  display: flex;
}
</style>
