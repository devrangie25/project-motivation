export const useExpertiseStore = defineStore("expertise", () => {
  const skills = ref([
    {
      name: "HTML",
      icon: "html-5.png",
      category: "front-end",
    },
    {
      name: "CSS",
      icon: "css-3.png",
      category: "front-end",
    },
    {
      name: "Vuetify",
      icon: "vuetify.png",
      category: "front-end",
    },
    {
      name: "Bootstrap",
      icon: "bootstrap.svg",
      category: "front-end",
    },
    {
      name: "JavaScript",
      icon: "js.png",
      category: "front-end",
    },
    {
      name: "VueJs",
      icon: "vue.png",
      category: "front-end",
    },
    {
      name: "NuxtJs",
      icon: "nuxt.png",
      category: "front-end",
    },
    {
      name: "NodeJs",
      icon: "node.png",
      category: "back-end",
    },
    {
      name: "MySQL",
      icon: "mysql.png",
      category: "databases",
    },
    {
      name: "Git",
      icon: "git.png",
      category: "tools",
    },
    {
      name: "Jira",
      icon: "jira.png",
      category: "tools",
    },
    {
      name: "Trello",
      icon: "trello.png",
      category: "tools",
    },
  ])

  const techStacks = ref([
    { text: "Front-end", value: "front-end" },
    { text: "Back-end", value: "back-end" },
    { text: "Databases", value: "databases" },
    { text: "Tools", value: "tools" },
  ])

  return {
    skills,
    techStacks
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useExpertiseStore, import.meta.hot))
}
