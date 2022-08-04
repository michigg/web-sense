import { AudioCalculations } from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculations"
import { describe, it, expect } from "vitest"

describe("AudioCalculations", () => {
  describe("calcDBList", () => {
    it("should return [140, 140, 140]", () => {
      const actual = [
        Array(512).fill(140),
        Array(512).fill(140),
        Array(512).fill(140)
      ]
      expect(AudioCalculations._calcDBList(actual)).toEqual([140, 140, 140])
    })
    it("should return [0, 0, 0]", () => {
      const actual = [
        Array(512).fill(0),
        Array(512).fill(0),
        Array(512).fill(0)
      ]
      expect(AudioCalculations._calcDBList(actual)).toEqual([0, 0, 0])
    })
    it("should return [140, 0, -10]", () => {
      const actual = [
        Array(512).fill(140),
        Array(512).fill(0),
        Array(512).fill(-40)
      ]
      expect(AudioCalculations._calcDBList(actual)).toEqual([140, 0, -40])
    })
  })
  describe("calcDBAList", () => {
    it("should return [137.2783, 137.2783, 137.2783]", () => {
      const actual = [
        Array(512).fill(140),
        Array(512).fill(140),
        Array(512).fill(140)
      ]
      expect(AudioCalculations._calcDBAList(actual, 48000, 1024)).toEqual([
        137.2783, 137.2783, 137.2783
      ])
    })
    it("should return [-2.7217, -2.7217, -2.7217]", () => {
      const actual = [
        Array(512).fill(0),
        Array(512).fill(0),
        Array(512).fill(0)
      ]
      expect(AudioCalculations._calcDBAList(actual, 48000, 1024)).toEqual([
        -2.7217, -2.7217, -2.7217
      ])
    })
    it("should return [137.2783, -2.7217, -43.6878]", () => {
      const actual = [
        Array(512).fill(140),
        Array(512).fill(0),
        Array(512).fill(-40)
      ]
      expect(AudioCalculations._calcDBAList(actual, 48000, 1024)).toEqual([
        137.2783, -2.7217, -43.6878
      ])
    })
  })
  // TODO: fix test
  // describe('getResult', () => {
  //   it('should return [137.2783, 137.2783, 137.2783]', () => {
  //     const actual = [
  //       Array(512).fill(200),
  //       Array(512).fill(200),
  //       Array(512).fill(200)
  //     ]
  //     expect(AudioCalculations.getResult(actual, 48000, 1024)).toEqual({
  //       minDBA: 137.28,
  //       maxDBA: 137.28,
  //       averageDBA: 137.28,
  //       minDB: 140,
  //       maxDB: 140,
  //       averageDB: 140
  //     })
  //   })
  //   it('should return [-2.7217, -2.7217, -2.7217]', () => {
  //     const actual = [
  //       Array(512).fill(0),
  //       Array(512).fill(0),
  //       Array(512).fill(0)
  //     ]
  //     expect(AudioCalculations.getResult(actual, 48000, 1024)).toEqual({
  //       minDBA: -2.72,
  //       maxDBA: -2.72,
  //       averageDBA: -2.72,
  //       minDB: 0,
  //       maxDB: 0,
  //       averageDB: 0
  //     })
  //   })
  //   it('should return [137.2783, -2.7217, -43.6878]', () => {
  //     const actual = [
  //       Array(512).fill(140),
  //       Array(512).fill(0),
  //       Array(512).fill(-40)
  //     ]
  //     expect(AudioCalculations.getResult(actual, 48000, 1024)).toEqual({
  //       minDBA: -43.69,
  //       maxDBA: 137.28,
  //       averageDBA: 129.41,
  //       minDB: -40,
  //       maxDB: 0,
  //       averageDB: 132.13
  //     })
  //   })
  // })
})
