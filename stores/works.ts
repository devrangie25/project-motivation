export const useWorksStore = defineStore("works", () => {
  const projects = ref([
    {
      id: 1,
      title: "Core CrewBloom",
      description: `A Web Application is where company HR and Admin do the company works like, invoicing, managing clients, employees and applicants. 
      I created almost the entire Front End of this Web App.`,
      stacks: [
        {
          title: 'NuxtJs',
          img: 'nuxt'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        },
        {
          title: 'NodeJs',
          img: 'node'
        }
      ],
      link: "https://core.crewbloom.com/",
      repo: "",
      imgUrl: "core-crewbloom",
      icon: "mdi-home",
    },
    {
      id: 2,
      title: "RiteMed",
      description: `A website for one of the leading medicine brand in PH where you can see all medicine products, health information and etc. 
      I was one of the Front End Developer who developed some of the pages in the website.`,
      stacks: [
        {
          title: 'VueJs',
          img: 'vue'
        },
        {
          title: 'TailwindCSS',
          img: 'tailwind'
        },
        {
          title: 'October CMS',
          img: 'october-cms'
        }
      ],
      link: "https://www.ritemed.com.ph/",
      repo: "",
      imgUrl: "rite-med",
      icon: "",
    },
    {
      id: 3,
      title: "Qmulus Dashboard",
      description: `This is a Static Dasbhoard with Analytics Diagram I created when I applied as a Part Time Front End Developer in the company.`,
      stacks: [
        {
          title: 'NuxtJs',
          img: 'nuxt'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        }
      ],
      link: "https://qmulus-front-end-assessment.netlify.app/",
      repo: "",
      imgUrl: "qmulus-dashboard",
      icon: "",
    },
    {
      id: 4,
      title: "Bantayan Trucking Services",
      description: `A Web Application I made for college students, it's a Web Application for a Trucking Services which tracks item delivery.`,
      stacks: [
        {
          title: 'NuxtJs',
          img: 'nuxt'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        },
        {
          title: 'NodeJs',
          img: 'node'
        }
      ],
      link: "https://bits-dev.netlify.app/",
      repo: "",
      imgUrl: "bits",
      icon: "",
    },
    {
      id: 5,
      title: "HR Dashboard",
      description: `A Static HR Dashboard I created just for fun.`,
      stacks: [
        {
          title: 'NuxtJs',
          img: 'nuxt'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        }
      ],
      link: "https://vue-dashboards-design.vercel.app/",
      repo: "",
      imgUrl: "hr-dashboard",
      icon: "",
    },
    {
      id: 6,
      title: "CrewBloom Invoicing Hub",
      description: `A Web Application for managing Invoicing of the company. This is where the accounting team will create invoice for their clients. Also using third party integration of payment gateway.`,
      stacks: [
        {
          title: 'VueJs',
          img: 'vue'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        },
        {
          title: 'PHP Laravel',
          img: 'laravel'
        }
      ],
      link: "",
      repo: "",
      imgUrl: "",
      icon: "",
    },
    {
      id: 7,
      title: "CrewBloom Applicant Hub",
      description: `A Web Application the Applicants of the company. This is where the applicants filling up their personal information, job experience and contact details.`,
      stacks: [
        {
          title: 'NuxtJs',
          img: 'nuxt'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        },
        {
          title: 'NodeJs',
          img: 'node'
        }
      ],
      link: "",
      repo: "",
      imgUrl: "",
      icon: "",
    },
  ])

  const projectsToDisplay = ref([
    {
      id: 1,
      title: "Core CrewBloom",
      description: `A Web Application is where company HR and Admin do the company works like, invoicing, managing clients, employees and applicants. 
      I created almost the entire Front End of this Web App.`,
      stacks: [
        {
          title: 'NuxtJs',
          img: 'nuxt'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        },
        {
          title: 'NodeJs',
          img: 'node'
        }
      ],
      link: "https://core.crewbloom.com/",
      repo: "",
      imgUrl: "core-crewbloom",
      icon: "mdi-home",
    },
    {
      id: 2,
      title: "RiteMed",
      description: `A website for one of the leading medicine brand in PH where you can see all medicine products, health information and etc. 
      I was one of the Front End Developer who developed some of the pages in the website.`,
      stacks: [
        {
          title: 'VueJs',
          img: 'vue'
        },
        {
          title: 'TailwindCSS',
          img: 'tailwind'
        },
        {
          title: 'October CMS',
          img: 'october-cms'
        }
      ],
      link: "https://www.ritemed.com.ph/",
      repo: "",
      imgUrl: "rite-med",
      icon: "",
    },
    {
      id: 3,
      title: "Qmulus Dashboard",
      description: `This is a Static Dasbhoard with Analytics Diagram I created when I applied as a Part Time Front End Developer in the company.`,
      stacks: [
        {
          title: 'NuxtJs',
          img: 'nuxt'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        }
      ],
      link: "https://qmulus-front-end-assessment.netlify.app/",
      repo: "",
      imgUrl: "qmulus-dashboard",
      icon: "",
    },
    {
      id: 4,
      title: "Bantayan Trucking Services",
      description: `A Web Application I made for college students, it's a Web Application for a Trucking Services which tracks item delivery.`,
      stacks: [
        {
          title: 'NuxtJs',
          img: 'nuxt'
        },
        {
          title: 'Vuetify',
          img: 'vuetify'
        },
        {
          title: 'NodeJs',
          img: 'node'
        }
      ],
      link: "https://bits-dev.netlify.app/",
      repo: "",
      imgUrl: "bits",
      icon: "",
    },
  ])

  const getProjectById = (id: any) => {
    return projects.value.find((project) => project.id === id)
  }

  return {
    projects,
    projectsToDisplay,
    getProjectById,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWorksStore, import.meta.hot))
}
