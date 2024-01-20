<template>
  <div class="expertise-section-container pa-6">
    <v-container class="expertise-inner-section">
      <div
        class="text-h4 mt-6"
      >
        Skills  
      </div>
      <!-- For Medium and Larger Screen -->
      <v-row
        class="row-container"
        align="center"
        v-if="!['small', 'extra-small', 'super-small'].includes(getScreenType)"
      >
        <v-col cols="4">
          <div v-for="(item, i) in techStacks" :key="i" class="my-6">
            <v-hover
              v-slot="{ isHovering, props }"
              @update:model-value="onHoverElement($event, item)"
            >
              <span
                v-if="!['medium'].includes(getScreenType)"
                :class="`text-${isHovering ? 'h3' : 'h5'} font-weight-${
                  isHovering ? 'medium' : 'light'
                }`"
                v-bind="props"
              >
                {{ item.text }}
              </span>
              <!--For Medium Devices-->
              <span
                v-if="['medium'].includes(getScreenType)"
                :class="`text-${isHovering ? 'h4' : 'h6'} font-weight-${
                  isHovering ? 'medium' : 'light'
                }`"
                v-bind="props"
              >
                {{ item.text }}
              </span>
            </v-hover>
          </div>
        </v-col>
        <v-col cols="8">
          <v-row>
            <v-col
              class="d-flex justify-center"
              v-for="(skill, i) in skills"
              :key="i"
              cols="3"
            >
              <div class="text-center">
                <div>
                  <img
                    :class="
                      hoveredSkill !== skill.category ? 'gray-scale-img' : ''
                    "
                    :src="`/img/${skill.icon}`"
                    :width="['medium'].includes(getScreenType) ? '40' : '60'"
                  />
                </div>
                <span class="text-caption">
                  {{ skill.name }}
                </span>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- For Smaller Screen -->
      <div v-else :class="['small', 'extra-small', 'super-small'].includes(getScreenType) ? 'mt-12' : ''">
        <v-tabs
          v-model="tab"
          color="deep-purple-accent-4"
          align-tabs="center"
          center-active
          show-arrows
          @update:model-value="onChangeTab($event, tab)"
        >
          <v-tab v-for="(item, ind) in techStacks" :value="item.value">
            {{ item.text }}
          </v-tab>
        </v-tabs>
        <v-row class="mt-12" align="center">
          <v-col
            class="d-flex justify-center"
            v-for="(skill, i) in skills"
            :key="i"
            cols="4"
            sm="3"
          >
            <div class="text-center">
              <div>
                <img
                  :class="
                    hoveredSkill !== skill.category ? 'gray-scale-img' : ''
                  "
                  :src="`/img/${skill.icon}`"
                  width="30"
                />
              </div>
              <span class="text-caption">
                {{ skill.name }}
              </span>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const expertiseStore = useExpertiseStore()
const { skills, techStacks } = storeToRefs(expertiseStore)
const { getScreenType } = useScreenType()

const tab = ref(null)

const hoveredSkill = ref("")

const onChangeTab = ($event: any, elem: any) => {
  hoveredSkill.value = $event ? elem : ""
}

const onHoverElement = ($event: any, elem: any) => {
  hoveredSkill.value = $event ? elem.value : ""
}
</script>

<style scoped>
.gray-scale-img {
  -webkit-filter: grayscale(1);
  filter: grayscale(95%);
}

.expertise-section-container {
  height: 80vh;
}

.expertise-inner-section {
  height: 100%;
}

.row-container {
  height: 100%;
  margin: -5rem 0 0 0;
}
</style>
