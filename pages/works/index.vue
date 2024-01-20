<template>
    <div class="pa-6">
        <v-container>
            <v-row class="py-12">
                <v-col cols="12" sm="6" md="4" v-for="(work, ind) in 8" :key="work">
                    <v-card flat height="300" color="#ebebeb" class="pa-6">
                        Card Here
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  