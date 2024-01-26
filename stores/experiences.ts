export const useExperienceStore = defineStore("experiences", () => {
  const runtimeConfig = useRuntimeConfig()

  const jobType = ref(runtimeConfig.public.NUXT_PUBLIC_JOB_TYPE || 'Full-Time')

  const jobExperiencesFullTime = ref([
    {
      company: "Increment Technologies",
      span: "Jun 2020 - Aug 2020",
      "job-title": "Intern/Volunteer Web Developer",
    },
    {
      company: "Softype Philippines",
      span: "Aug 2020 - Apr 2021",
      "job-title": "Jr. Technical Consultant",
    },
    {
      company: "CrewBloom Inc.",
      span: "Apr 2021 - Apr 2022",
      "job-title": "Jr. Web Developer",
    },
    {
      company: "Xiklab Digital",
      span: "Jan 2022 - Jun 2022",
      "job-title": "PT Software Developer",
    },
    {
      company: "Full Scale",
      span: "Apr 2022 - Present",
      "job-title": "Front End Developer",
    },
    {
      company: "CrewBloom Inc",
      span: "Sept 2022 - Nov 2022",
      "job-title": "PT Front End Developer",
    },
    {
      company: "Qmulus Solutions",
      span: "Feb 2023 - Mar 2023",
      "job-title": "PT Front End Developer",
    },
  ])

  const jobExperiencesPartTime = ref([
    {
      company: "Softype Philippines",
      span: "Aug 2020 - Apr 2021",
      "job-title": "Jr. Technical Consultant",
    },
    {
      company: "CrewBloom Inc.",
      span: "Apr 2021 - Apr 2022",
      "job-title": "Jr. Web Developer",
    },
    {
      company: "Xiklab Digital",
      span: "Jan 2022 - Jun 2022",
      "job-title": "PT Software Developer",
    },
    {
      company: "Foodics",
      span: "Aug 2022 - Present",
      "job-title": "Front End Developer",
    },
    {
      company: "CrewBloom Inc",
      span: "Sept 2022 - Nov 2022",
      "job-title": "PT Front End Developer",
    },
    {
      company: "Qmulus Solutions",
      span: "Feb 2023 - Mar 2023",
      "job-title": "PT Front End Developer",
    },
  ])

  return {
    jobType,
    jobExperiencesFullTime,
    jobExperiencesPartTime
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useExperienceStore, import.meta.hot))
}
