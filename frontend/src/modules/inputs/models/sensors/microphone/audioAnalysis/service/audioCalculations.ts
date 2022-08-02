import {
  AudioCalculationsFrequency
} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsFrequency"
import {
  AudioCalculationsAWeighting
} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsAWeighting"
import {
  AudioCalculationDBConversion
} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsDBConversion"
import {
  AudioCalculationBasicConversion
} from "@/modules/inputs/models/sensors/microphone/audioAnalysis/service/audioCalculationsBasicConversion"

export const AudioCalculations = {
  _calcDBList (spectrumDBList: number[][]): Array<number> {
    return spectrumDBList.map((dbSpectrum) =>
      AudioCalculationDBConversion.dbSpectrumToDB(dbSpectrum)
    )
  },
  _calcDBAList (
    spectrumDBList: number[][],
    sampleRate: number,
    bufferSize: number
  ): Array<number> {
    const frequencies =
      AudioCalculationsFrequency.frequenciesUsingSampleRateBufferSize(
        sampleRate,
        bufferSize
      )
    const aWeightings =
      AudioCalculationsAWeighting.calcAWeightings(frequencies)
    const spectrumDBAList = spectrumDBList.map((dbSpectrum) =>
      AudioCalculationsAWeighting.convertDBSpectrumToDBAsSpectrum(
        dbSpectrum,
        aWeightings
      )
    )
    return spectrumDBAList.map((dbaSpectrum) =>
      AudioCalculationDBConversion.dbSpectrumToDB(dbaSpectrum)
    )
  },
  getResult (
    spectrumList: number[][],
    sampleRate: number,
    bufferSize: number
  ): {
    dbas: number[];
    minDBA: number;
    maxDBA: number;
    averageDBA: number;
    dbs: number[];
    minDB: number;
    maxDB: number;
    averageDB: number;
  } {
    console.log(spectrumList)
    const cleanedSpectrumList =
      AudioCalculationBasicConversion.removeFirstMeasurementsByDuration(
        spectrumList,
        sampleRate,
        bufferSize
      ) as number[][]
    // const audibleSpectrumList = AudioCalculationsFrequency.removeInaudibleBinsFromSpectrumList(cleanedSpectrumList, sampleRate, bufferSize)
    const spectrumDBList = cleanedSpectrumList.map((spectrum) =>
      AudioCalculationDBConversion.magnitudeSpectrumToDBSpectrum(spectrum)
    )
    console.log(spectrumDBList)

    const dbList = this._calcDBList(spectrumDBList).filter(
      (dbValue) => dbValue >= 0
    )
    const averageDB = Number(
      AudioCalculationDBConversion.averageSPL(dbList).toFixed(2)
    )
    const minDB = Number(Math.min(...dbList).toFixed(2))
    const maxDB = Number(Math.max(...dbList).toFixed(2))

    const dbaList = this._calcDBAList(
      spectrumDBList,
      sampleRate,
      bufferSize
    ).filter((dbValue) => dbValue >= 0)
    const averageDBA = Number(
      AudioCalculationDBConversion.averageSPL(dbaList).toFixed(2)
    )
    const minDBA = Number(Math.min(...dbaList).toFixed(2))
    const maxDBA = Number(Math.max(...dbaList).toFixed(2))
    return {
      dbas: dbaList,
      minDBA,
      maxDBA,
      averageDBA,
      dbs: dbList,
      minDB,
      maxDB,
      averageDB
    }
  }
}
