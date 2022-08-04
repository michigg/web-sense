import {
  AudioCalculationsAWeighting
} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsAWeighting"
import { describe, it, expect } from "vitest"

describe("AudioCalculationsAWeighting", () => {
  describe("calcAWeighting", () => {
    // reference points used from http://www.sengpielaudio.com/Rechner-dba-spl.htm
    // http://acousticalengineer.com/a-weighting-table/
    it("should return -80 when frequency is 0 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(0)).toBe(
        Number.NEGATIVE_INFINITY
      )
    })
    it("should return -70.4 when frequency is 10 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(10)).toBe(-70.4)
    })
    it("should return -48.4984 when frequency is 21.5332 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(21.5)).toBe(-48.5)
    })
    it("should return -39.5291 when frequency is 31.5 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(31.5)).toBe(-39.5)
    })
    it("should return -26.2230 when frequency is 63 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(63)).toBe(-26.2)
    })
    it("should return -16.1899 when frequency is 125 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(125)).toBe(-16.2)
    })
    it("should return -8.6750 when frequency is 250 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(250)).toBe(-8.7)
    })
    it("should return -3.2480 when frequency is 500 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(500)).toBe(-3.2)
    })
    it("should return 0 when frequency is 1000 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(1000)).toBe(0)
    })
    it("should return 1.2017 when frequency is 2000 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(2000)).toBe(1.2)
    })
    it("should return 0.9642 when frequency is 4000 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(4000)).toBe(1.0)
    })
    it("should return -1.1445 when frequency is 8000 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(8000)).toBe(-1.1)
    })
    it("should return -6.7009 when frequency is 16000 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(16000)).toBe(-6.7)
    })
    it("should return -9.3408 when frequency is 20000 Hz", () => {
      expect(AudioCalculationsAWeighting._calcAWeighting(20000)).toBe(-9.3)
    })
  })
  describe("calcAWeightings", () => {
    it("should return correct a-weightings", () => {
      expect(
        AudioCalculationsAWeighting.calcAWeightings(
          [0, 125, 1000, 8000, 20000],
          -80
        )
      ).toEqual([-80, -16.2, 0, -1.1, -9.3])
    })
  })
  describe("calcDBAUsingWeighting", () => {
    it("return -80 when db is 0 and aWeighting is -80", () => {
      expect(AudioCalculationsAWeighting.calcDBAUsingWeighting(0, -80)).toBe(
        -80
      )
    })
    it("return 119.5433 when db is 125 and aWeighting is -5.4567", () => {
      expect(
        AudioCalculationsAWeighting.calcDBAUsingWeighting(125, -5.4567)
      ).toBe(119.5433)
    })
  })
  describe("convertDBSpectrumToDBAsSpectrum", () => {
    it("should return the lowest audible bin", () => {
      const dbs = [0, 70, 140]
      const weights = [-80, -16.2, -80]
      const expected = [-80, 53.8, 60]
      expect(
        AudioCalculationsAWeighting.convertDBSpectrumToDBAsSpectrum(
          dbs,
          weights
        )
      ).toEqual(expected)
    })
  })
})
