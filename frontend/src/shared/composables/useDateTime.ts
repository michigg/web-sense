export function useDateTime (): {
  toDateTime: (timestamp: number) => string;
} {
  const toDateTime = (timestamp: number) =>
    new Date(timestamp).toLocaleString("de-DE", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    })
  return {
    toDateTime
  }
}
