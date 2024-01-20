import { useWindowSize, useScroll } from "@vueuse/core"

export const useScreenType = () => {
  const { width } = useWindowSize()

  const getScreenType = computed(() => {
    if (width.value < 450) {
      console.log("Super Small Screen")
      return "super-small"
    }
    if (width.value < 600) {
      console.log("Extra Small Screen")
      return "extra-small"
    }
    if (width.value > 600 && width.value < 960) {
      console.log("Small Screen")
      return "small"
    }
    if (width.value > 960 && width.value < 1264) {
      console.log("Medium Screen")
      return "medium"
    }
    if (width.value > 1264 && width.value < 1904) {
      console.log("Large Screen")
      return "large"
    }
    if (width.value > 1904) {
      console.log("Extra Large Screen")
      return "extra-large"
    }

    return ""
  })

  return { getScreenType }
}
