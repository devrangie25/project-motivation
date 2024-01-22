export const useWorksStore = defineStore("works", () => {
  const projects = ref([
    {
      id: 1,
      title: "Core CrewBloom",
      description:
        "This Web Application is where company HR and Admin do the company works like, invoicing, managing clients, employees and applicants.",
      stacks: ["nuxt", "vuetify", "node"],
      link: 'https://core.crewbloom.com/',
      repo: '',
      imgUrl: 'core-crewbloom',
      icon: "mdi-home",
    },
    {
      id: 2,
      title: "RiteMed",
      description:
        "A website for one of the leading medicine brand in PH where you can see all medicine products and health information.",
      stacks: ["vue", "tailwind", "laravel"],
      link: 'https://www.ritemed.com.ph/',
      repo: '',
      imgUrl: 'rite-med',
      icon: "",
    },
    {
      id: 3,
      title: "Qmulus Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      stacks: ["nuxt", "vuetify"],
      link: 'https://qmulus-front-end-assessment.netlify.app/',
      repo: '',
      imgUrl: 'qmulus-dashboard',
      icon: "",
    },
    {
      id: 4,
      title: "Bantayan Trucking Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      stacks: ["nuxt", "vuetify", "node"],
      link: 'https://bits-dev.netlify.app/',
      repo: '',
      imgUrl: 'bits',
      icon: "",
    },
  ])

  const getProjectById = (id: any) => {
    return projects.value.find(project => project.id === id)
  }

  return {
    projects,
    getProjectById
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorksStore, import.meta.hot))
}
