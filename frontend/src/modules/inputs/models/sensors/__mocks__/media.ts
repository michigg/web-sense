export const EnumerateAudioDeviceMock = jest.fn(async () => Promise.resolve([{ kind: 'audioinput' }]))
export const EnumerateVideoDeviceMock = jest.fn(async () => Promise.resolve([{ kind: 'videoinput' }]))
export const EmptyEnumerateDeviceMock = jest.fn(async () => Promise.resolve([]))
export const GetUserMediaMock = jest.fn(async () => ({}))
