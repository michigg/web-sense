import { useRouter } from "vue-router"

export function useLogRoutes () {
  const router = useRouter()

  const routeToMeasurements = async () =>
    await router.push({ name: "Measurements" })
  const routeToMeasurementDetail = async (taskLogPKey?: number) =>
    await router.push({
      name: "MeasurementDetail",
      params: { taskLogPKey }
    })

  return {
    routeToMeasurements,
    routeToMeasurementDetail
  }
}
