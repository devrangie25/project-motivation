<template>
    <div class="works-section-container pa-6">
      <v-container class="works-inner-section">
        <div class="d-flex justify-space-between align-center mt-6 mb-n12">
          <div class="text-h4">Works</div>
          <div>
            <v-btn variant="text" class="text-none" append-icon="mdi-arrow-right" to="/works">
              See all
            </v-btn>
          </div>
        </div>
        <v-row align="center">
          <v-col v-for="card in 3">
            <v-hover v-slot="{ isHovering, props }" open-delay="100">
              <v-card
                :elevation="isHovering ? 16 : 0"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
                class="pa-6"
                color="light"
                height="400"
              >
                <template v-slot:prepend>
                  <v-icon icon="mdi-monitor" size="50"></v-icon>
                </template>
  
                <v-card-title class="mt-6"> Core CrewBloom </v-card-title>
  
                <v-card-text class="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod.
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .works-section-container {
    height: 80vh;
    margin: -5rem 0 0 0;
  background: #ebebeb;

  }
  
  .works-inner-section {
    height: 100%;
  }
  
  .v-row {
    height: 100%;
  }
  </style>
  