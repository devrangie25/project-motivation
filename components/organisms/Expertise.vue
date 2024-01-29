<template>
    <div
      :class="`${
        ['small', 'extra-small', 'super-small'].includes(getScreenType) ? 'mobile-' : ''
      }expertise-section-container pa-6`"
    >
    <v-container class="expertise-inner-section">
      <div class="text-h4 mt-6">Skills</div>
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
              <v-hover v-slot="{ isHovering, props }">
                <kinesis-container>
                  <kinesis-element type="depth" :strength="15">
                    <div class="text-center">
                      <div>
                        <img
                          v-bind="props"
                          :class="
                            hoveredSkill !== skill.category && !isHovering
                              ? 'gray-scale-img'
                              : ''
                          "
                          :src="`/img/${skill.icon}`"
                          :width="
                            ['medium'].includes(getScreenType) ? '40' : '60'
                          "
                        />
                      </div>
                      <span class="text-caption">
                        {{ skill.name }}
                      </span>
                    </div>
                  </kinesis-element>
                </kinesis-container>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- For Smaller Screen -->
      <div
        v-if="['small', 'extra-small', 'super-small'].includes(getScreenType)"
      >
        <div class="py-6">
          <div class="mb-4">
            <div class="text-h6">Front End</div>
            <v-row class="mt-2">
              <v-col
                cols="4"
                sm="3"
                v-for="skill in getFrontEndSkills"
                :key="skill.name"
                class="d-flex justify-center"
              >
                <div class="text-center">
                  <img :src="`/img/${skill.icon}`" :width="40" />
                  <div class="text-caption">
                    {{ skill.name }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>

          <div class="my-4">
            <div class="text-h6">Back End</div>
            <v-row class="mt-2">
              <v-col
                cols="4"
                sm="3"
                v-for="skill in getBackEndSkills"
                :key="skill.name"
                class="d-flex justify-center"
              >
                <div class="text-center">
                  <img :src="`/img/${skill.icon}`" :width="40" />
                  <div class="text-caption">
                    {{ skill.name }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>

          <div class="my-4">
            <div class="text-h6">Databases</div>
            <v-row class="mt-2">
              <v-col
                cols="4"
                sm="3"
                v-for="skill in getDatabaseSkills"
                :key="skill.name"
                class="d-flex justify-center"
              >
                <div class="text-center">
                  <img
                    v-if="skill.category === 'databases'"
                    :src="`/img/${skill.icon}`"
                    :width="40"
                  />
                  <div
                    v-if="skill.category === 'databases'"
                    class="text-caption"
                  >
                    {{ skill.name }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>

          <div class="mt-4">
            <div class="text-h6">Tools</div>
            <v-row class="mt-2">
              <v-col
                cols="4"
                sm="3"
                v-for="skill in getToolSkills"
                :key="skill.name"
                class="d-flex justify-center"
              >
                <div class="text-center">
                  <img
                    v-if="skill.category === 'tools'"
                    :src="`/img/${skill.icon}`"
                    :width="40"
                  />
                  <div v-if="skill.category === 'tools'" class="text-caption">
                    {{ skill.name }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"

const expertiseStore = useExpertiseStore()
const { skills, techStacks } = storeToRefs(expertiseStore)
const { getScreenType } = useScreenType()

const hoveredSkill = ref("")

const getFrontEndSkills = computed(() => {
  return skills.value.filter((skill) => skill.category === "front-end")
})

const getBackEndSkills = computed(() => {
  return skills.value.filter((skill) => skill.category === "back-end")
})

const getDatabaseSkills = computed(() => {
  return skills.value.filter((skill) => skill.category === "databases")
})

const getToolSkills = computed(() => {
  return skills.value.filter((skill) => skill.category === "tools")
})

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
.mobile-expertise-section-container {
  height: 100%;
}
</style>
