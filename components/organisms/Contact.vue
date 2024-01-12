<template>
  <div class="contact-section-container pa-6">
    <v-container class="contact-inner-section">
      <div class="text-h4 mt-6 mb-n12">Contact</div>

      <div class="contact-card-container">
        <v-card
          class="contact-card pa-6"
          height="300"
          width="100%"
          color="#ebebeb"
          flat
        >
          <v-card-text>
            <v-row>
              <v-col cols="12" md="8">
                <div class="text-h4 mb-4 text-break">
                  Let's work together on your next project
                </div>
                <div class="subtitle-1 text-break">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                  doloribus officiis eligendi, nam sint numquam aspernatur
                </div>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="d-flex align-center justify-center"
              >
                <v-btn
                  class="text-capitalize"
                  density="default"
                  flat
                  height="50"
                  width="150"
                  color="primary"
                >
                  Contact
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact-section-container {
  height: 60vh;
}

.contact-inner-section {
  height: 100%;
}

.contact-card-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.contact-card {
  display: flex;
  align-items: center;
}

.v-row {
  height: 100%;
}
</style>
