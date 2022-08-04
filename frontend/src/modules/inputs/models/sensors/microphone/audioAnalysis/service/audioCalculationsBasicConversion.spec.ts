import {
  AudioCalculationBasicConversion
} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsBasicConversion"
import { describe, it, expect } from "vitest"

describe("AudioCalculationsBasicConversion", () => {
  describe("dbToPressureRatio", () => {
    it("should return 1 when the db value is 0", () => {
      expect(AudioCalculationBasicConversion.dbToPowerRatio(0)).toBe(1)
    })
    it("should return 3162277.6602 when the db value is 65", () => {
      expect(AudioCalculationBasicConversion.dbToPowerRatio(65)).toBe(
        3162277.6602
      )
    })
    it("should return 100000000000000 when the db value is 140", () => {
      expect(AudioCalculationBasicConversion.dbToPowerRatio(140)).toBe(
        100_000_000_000_000
      )
    })
  })
  describe("magnitudeToDB", () => {
    it("should return -80 when the magnitude is 0.0000000002", () => {
      expect(AudioCalculationBasicConversion.magnitudeToDB(0.0000000002)).toBe(
        -80
      )
    })
    it("should return -80 when the magnitude is 0.000000002", () => {
      expect(AudioCalculationBasicConversion.magnitudeToDB(0.000000002)).toBe(
        -80
      )
    })
    it("should return -20 when the magnitude is 0.000002", () => {
      expect(AudioCalculationBasicConversion.magnitudeToDB(0.000002)).toBe(-20)
    })
    it("should return 0 when the magnitude is 0.00002", () => {
      expect(AudioCalculationBasicConversion.magnitudeToDB(0.00002)).toBe(0)
    })
    it("should return 93.9794 when the magnitude is 1", () => {
      expect(AudioCalculationBasicConversion.magnitudeToDB(1)).toBe(93.9794)
    })
    it("should return 140 when the magnitude is 200", () => {
      expect(AudioCalculationBasicConversion.magnitudeToDB(200)).toBe(140)
    })
  })
  describe("pressureRatioToDB", () => {
    it("should return -80 when the pressure ration is below 0.00000001", () => {
      expect(AudioCalculationBasicConversion.powerRatioToDB(0.000000001)).toBe(
        -80
      )
    })
    it("should return -80 when the pressure ration is 0.00000001", () => {
      expect(AudioCalculationBasicConversion.powerRatioToDB(0.00000001)).toBe(
        -80
      )
    })
    it("should return 0.0436 when the pressure ration is 0.99", () => {
      expect(
        AudioCalculationBasicConversion.powerRatioToDB(0.99) * -1
      ).toBeCloseTo(0.04364805402450084, 4)
    })
    it("should return 0 when the pressure ration is 1", () => {
      expect(AudioCalculationBasicConversion.powerRatioToDB(1)).toBe(0)
    })
    it("should return 65 when the pressure ration is 3162277.6602", () => {
      expect(AudioCalculationBasicConversion.powerRatioToDB(3162277.6602)).toBe(
        65
      )
    })
    it("should return 140 when the pressure ration is 100_000_000_000_000", () => {
      expect(
        AudioCalculationBasicConversion.powerRatioToDB(100_000_000_000_000)
      ).toBe(140)
    })
  })
  describe("dbToPressureRatio pressureRatioToDB chain", () => {
    it("should return -80 again", () => {
      expect(
        AudioCalculationBasicConversion.powerRatioToDB(
          AudioCalculationBasicConversion.dbToPowerRatio(-80)
        )
      ).toBe(-80)
    })
    it("should return 0 again", () => {
      expect(
        AudioCalculationBasicConversion.powerRatioToDB(
          AudioCalculationBasicConversion.dbToPowerRatio(0)
        )
      ).toBe(0)
    })
    it("should return 65 again", () => {
      expect(
        AudioCalculationBasicConversion.powerRatioToDB(
          AudioCalculationBasicConversion.dbToPowerRatio(65)
        )
      ).toBe(65)
    })
    it("should return 140", () => {
      expect(
        AudioCalculationBasicConversion.powerRatioToDB(
          AudioCalculationBasicConversion.dbToPowerRatio(140)
        )
      ).toBe(140)
    })
  })
  describe("dbToMagnitude", () => {
    it("should return 0.000002 when the db value is -80", () => {
      expect(AudioCalculationBasicConversion.dbToMagnitude(-80)).toBe(
        0.000000002
      )
    })
    it("should return 0.000002 when the db value is -45", () => {
      expect(AudioCalculationBasicConversion.dbToMagnitude(-40)).toBe(
        0.0000002
      )
    })
    it("should return 0.00002 when the db value is 0", () => {
      expect(AudioCalculationBasicConversion.dbToMagnitude(0)).toBe(0.00002)
    })
    it("should return 0.00002 when the db value is 0", () => {
      expect(AudioCalculationBasicConversion.dbToMagnitude(65)).toBeCloseTo(
        0.03556558820077845,
        9
      )
    })
    it("should return 200 when the db value is 140", () => {
      expect(AudioCalculationBasicConversion.dbToMagnitude(140)).toBe(200)
    })
  })
})
