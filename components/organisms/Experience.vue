<template>
  <div class="expertise-section-container pa-6">
    <v-container class="expertise-inner-section">
      <div class="text-h4 mt-6 mb-n12">Job Experience</div>
      <div class="timeline">
        <v-timeline direction="horizontal" line-inset="12">
          <v-timeline-item>
            <template v-slot:opposite>
                <span class="font-weight-bold">
                    Increment Technologies
                </span>
            </template>
            <div class="text-center">
              Intern Web Developer <br />
              Jun - Aug 2020
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
                <span class="font-weight-bold">
                    Softype Philippines
                </span>
            </template>
            <div class="text-center">
              Jr. Technical Consultant <br />
              Aug 2020 - Apr 2021
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
                <span class="font-weight-bold">
                    CrewBloom Inc.
                </span>
            </template>
            <div class="text-center">
              Jr. Web Developer <br />
              Apr 2021 - Apr 2022
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
                <span class="font-weight-bold">
                    Xiklab Digital
                </span>
            </template>
            <div class="text-center">
              PT Software Developer <br />
              Jan 2022 - Jun 2022
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
                <span class="font-weight-bold">
                    Full Scale
                </span>
            </template>
            <div class="text-center">
              Front End Developer <br />
              Apr 2022 - Present
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

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
