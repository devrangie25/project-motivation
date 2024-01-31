// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Project Motivation - Portfolio",
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: "/img/big-head-1.svg",
        },
      ],
      meta: [
        { name: 'Project Motivation', content: 'Project Motivation as my Online Portfolio using Nuxt3 and Vuetify' }
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "assets/css/app.css",
  ],
  build: {
    transpile: ["vuetify", "vue-scroll"],
  },

  plugins: ["~/plugins/vue-kinesis"],

  components: [
    "~/components",
    { path: "~/components/organisms", prefix: "o" },
    { path: "~/components/molecules", prefix: "m" },
    { path: "~/components/atoms", prefix: "a" },
  ],

  modules: [
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "v-wave/nuxt",
  ],

  imports: {
    dirs: ["stores"],
  },

  devServer: {
    port: 8000,
  },

  runtimeConfig: {
    // The private keys which are only available within server-side
    // api-key: 'test-api-key'
    // Keys within public, will be also exposed to the client-side
    public: {
      NUXT_PUBLIC_NAME: process.env.NUXT_PUBLIC_NAME || "Rangie Laurente",
      NUXT_PUBLIC_LANDING_DESCRIPTION:
        process.env.NUXT_PUBLIC_LANDING_DESCRIPTION || "",
      NUXT_PUBLIC_JOB_TYPE: process.env.NUXT_PUBLIC_JOB_TYPE || "Full-Time",
    },
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_index.scss" as *;',
        },
      },
    },
  },
})
