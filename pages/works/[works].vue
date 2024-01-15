<template>
  <div class="pa-6">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-card flat height="500" color="#ebebeb" class="pa-6">
            Card Here
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col cols="4" v-for="(item, index) in 4" :key="index">
              <v-card flat height="100" color="#ebebeb" class="pa-2 text-body-2">
                NuxtJs
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>
