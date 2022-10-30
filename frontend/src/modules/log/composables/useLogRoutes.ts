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

  const routeToMeasurementAggregation = async (taskId: number) =>
    await router.push({
      name: "TaskAggregatedMeasurements",
      params: { taskId }
    })

  return {
    routeToMeasurements,
    routeToMeasurementDetail,
    routeToMeasurementAggregation
  }
}
