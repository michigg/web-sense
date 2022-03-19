import {
  AudioCalculationDBConversion
} from '@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsDBConversion'

describe('AudioCalculationsDBConversion', () => {
  describe('calcRMS', () => {
    it('should return 0.00002', () => {
      const actual = [0.00002, 0.00002, 0.00002]
      expect(AudioCalculationDBConversion._calcRMS(actual)).toBe(0.00002)
    })
    it('should return 200', () => {
      const actual = [200, 200, 200]
      expect(AudioCalculationDBConversion._calcRMS(actual)).toBe(200)
    })
    it('should return 141.421356', () => {
      const actual = [200, 0.00002, 200, 0.00002]
      expect(AudioCalculationDBConversion._calcRMS(actual)).toBeCloseTo(141.421356, 6)
    })
  })
  describe('magnitudeSpectrumToDBSpectrum', () => {
    it('should return [0, 0, 0]', () => {
      const actual = [0.00002, 0.00002, 0.00002]
      expect(AudioCalculationDBConversion.magnitudeSpectrumToDBSpectrum(actual)).toEqual([0, 0, 0])
    })
    it('should return [140, 140, 140]', () => {
      const actual = [200, 200, 200]
      expect(AudioCalculationDBConversion.magnitudeSpectrumToDBSpectrum(actual)).toEqual([140, 140, 140])
    })
    it('should return [0, 140, 0, 140]', () => {
      const actual = [0.00002, 200, 0.00002, 200]
      expect(AudioCalculationDBConversion.magnitudeSpectrumToDBSpectrum(actual)).toEqual([0, 140, 0, 140])
    })
  })
  describe('dbSpectrumToDB', () => {
    it('should return 0 when [0, 0, 0] given', () => {
      const actual = [0, 0, 0]
      expect(AudioCalculationDBConversion.dbSpectrumToDB(actual)).toEqual(0)
    })
    it('should return 140 when [140, 140, 140] given', () => {
      const actual = [140, 140, 140]
      expect(AudioCalculationDBConversion.dbSpectrumToDB(actual)).toEqual(140)
    })
    it('should return 136.9897 when [0, 140, 0, 140] given', () => {
      const actual = [0, 140, 0, 140]
      expect(AudioCalculationDBConversion.dbSpectrumToDB(actual)).toBeCloseTo(136.98970002878499, 4)
    })
    it('should return -80 when [-80, -40, -20, -10] given', () => {
      const actual = [-80, -40, -20, -2]
      expect(AudioCalculationDBConversion.dbSpectrumToDB(actual) * -1).toBeCloseTo(7.951396795710091, 4)
    })
    it('should return 6.9898 when [-80, 10, -80, 10] given', () => {
      const actual = [-80, 10, -80, 10]
      expect(AudioCalculationDBConversion.dbSpectrumToDB(actual)).toBeCloseTo(6.9898, 4)
    })
  })
  describe('averageSPL', () => {
    it('should return 0 when [0, 0, 0] given', () => {
      const actual = [0, 0, 0]
      expect(AudioCalculationDBConversion.averageSPL(actual)).toBe(0)
    })
    it('should return 140 when [140, 140, 140] given', () => {
      const actual = [140, 140, 140]
      expect(AudioCalculationDBConversion.averageSPL(actual)).toBe(140)
    })
    it('should return 136.9897 when [0, 140, 0, 140] given', () => {
      const actual = [0, 140, 0, 140]
      expect(AudioCalculationDBConversion.averageSPL(actual)).toBeCloseTo(136.9897000433602, 4)
    })
    it('should return 6.9898 when [-80, 10, -80, 10] given', () => {
      const actual = [-80, 10, -80, 10]
      expect(AudioCalculationDBConversion.averageSPL(actual)).toBeCloseTo(6.989700047703132, 4)
    })
  })
  describe('totalSPL', () => {
    it('should return 144.77 when [140, 140, 140] are given', () => {
      expect(AudioCalculationDBConversion.totalSPL([140, 140, 140])).toBeCloseTo(144.7712125471966, 4)
    })
    it('should return 0 when [0, 0, 0] are given', () => {
      expect(AudioCalculationDBConversion.totalSPL([0, 0, 0])).toBeCloseTo(4.771212547196624, 4)
    })
    it('should return 10.41 when [-80, 0, 10] are given', () => {
      expect(AudioCalculationDBConversion.totalSPL([-80, 0, 10])).toBeCloseTo(10.41392685553038, 4)
    })
    it('should return 144.77 when [140, 70, 0] are given', () => {
      expect(AudioCalculationDBConversion.totalSPL([140, 70, 0])).toBe(140)
    })
    it('should return 173.11 when Array(4096).fill(140) is given', () => {
      expect(AudioCalculationDBConversion.totalSPL(Array(4096).fill(140))).toBeCloseTo(176.1235994796777, 4)
    })
  })
})
