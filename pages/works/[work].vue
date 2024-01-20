<template>
  <div class="pa-6">
    <v-container>
      <v-row class="py-12">
        <v-col cols="12" md="8">
          <v-card flat height="500" color="#ebebeb" class="pa-6">
            Card Here
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <div class="text-body-1 mb-4">
            <span class="font-weight-bold"> Project Name: </span>
            <span>
              Web App Name
            </span>
          </div>

          <div class="text-body-1 mb-4">
            <span class="font-weight-bold"> Description: </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ut
              quis illo voluptas obcaecati debitis.
            </span>
          </div>

          <div class="mb-4 text-body-1">
            <span class="font-weight-bold"> Repo: </span>
            <a href="https://github.com/vuejs" class="text-decoration-none">
              https://github.com/vuejs</a
            >
          </div>

          <div class="mb-4 text-body-1">
            <span class="font-weight-bold"> Link: </span>
            <a
              href="https://project-motivation.vercel.app/"
              class="text-decoration-none"
            >
              https://project-motivation.vercel.app/
            </a>
          </div>

          <div class="text-body-1 mb-4">
            <span class="font-weight-bold"> Tech Stack: </span>
            <div class="d-flex mt-4">
              <v-card
                v-for="i in 4"
                flat
                height="60"
                width="60"
                class="pa-2 text-body-2 mr-4"
              >
                <img src="/img/vue.png" width="100%" />
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const { getScreenType } = useScreenType()
</script>
