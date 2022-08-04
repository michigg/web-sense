import { vi } from "vitest"

export const EnumerateAudioDeviceMock = vi.fn(async () =>
  Promise.resolve([{ kind: "audioinput" }])
)
export const EnumerateVideoDeviceMock = vi.fn(async () =>
  Promise.resolve([{ kind: "videoinput" }])
)
export const EmptyEnumerateDeviceMock = vi.fn(async () =>
  Promise.resolve([])
)
export const GetUserMediaMock = vi.fn(async () => ({}))
