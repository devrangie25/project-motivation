// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    'assets/css/app.css'
  ],
  build: {
    transpile: ["vuetify", "vue-scroll"],
  },

  components: [
    "~/components",
    { path: "~/components/organisms", prefix: "o" },
    { path: "~/components/molecules", prefix: "m" },
  ],
  
  devServer: {
    port: 8000
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
});
