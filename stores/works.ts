export const useWorksStore = defineStore("works", () => {
  const projects = ref([
    {
      title: "Core CrewBloom",
      description:
        "This Web Application is where company HR and Admin do the company works like, invoicing, managing clients, employees and applicants.",
      stacks: ["NuxtJs", "Vuetify", "NodeJs"],
      icon: "mdi-home",
    },
    {
      title: "RiteMed",
      description:
        "A website for one of the leading medicine brand in PH where you can see all medicine products and health information.",
      stacks: ["VueJs", "TailwindCSS", "PHP Laravel"],
      icon: "",
    },
    {
      title: "Qmulus Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      stacks: ["NuxtJs", "Vuetify"],
      icon: "",
    },
    {
      title: "Bantayan Trucking Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      stacks: ["NuxtJs", "Vuetify", "NodeJs"],
      icon: "",
    },
  ])

  return {
    projects,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorksStore, import.meta.hot))
}
