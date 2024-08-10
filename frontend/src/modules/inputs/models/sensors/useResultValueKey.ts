import {ResultValueKey} from "@/modules/inputs/models/sensors/resultValueKeys"

/**
 * Represents a description of a result value key.
 * Used to provide the user more information about the meaning of a result.
 */
class ResultValueKeyDescription {
  /**
   * The technical name
   */
  readonly technicalLabel: string
  /**
   * A readable name
   */
  readonly label: string
  /**
   * Should describe the meaning of that measurement
   */
  readonly description: string
  /**
   * A list of links to the sources
   */
  readonly sources: string[]

  constructor(
    technicalLabel: string,
    label: string,
    description: string,
    sources: string[]
  ) {
    this.technicalLabel = technicalLabel
    this.label = label
    this.description = description
    this.sources = sources
  }
}

/**
 * Helper function to resolve the ResultValueKey to a meaningful description
 */
export function useResultValueKey() {
  const resultValueKeyDescriptions = new Map<ResultValueKey, ResultValueKeyDescription>([
    [
      ResultValueKey.CREATED_AT,
      new ResultValueKeyDescription(
        'createdAt',
        'Messzeitpunkt',
        'Zeitpunkt in Millisekunden an der die Messung erstellt wurde',
        []
      )
    ],
    [
      ResultValueKey.QUATERNION,
      new ResultValueKeyDescription(
        'quaternion',
        'Quaternion',
        'Zahlenbereich, der zur Darstellung von Drehungen in einem drei dimensionalen Raum verwendet wird.',
        [
          'https://de.wikipedia.org/wiki/Quaternion'
        ]
      )
    ],
    [
      ResultValueKey.FREQUENCY_ABSOLUTE_ORIENTATION_SENSOR,
      new ResultValueKeyDescription(
        'frequency',
        'Messfrequenz',
        'Die gewünschte Frequenz in der die Messungen erfolgen sollen.',
        [
          'https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor#parameters'
        ]
      )
    ],
    [
      ResultValueKey.REFERENCE_FRAME,
      new ResultValueKeyDescription(
        'referenceFrame',
        'Bezugspunkt',
        'Der Bezugspunkt für das lokale Koordinatensystem.',
        [
          'https://developer.mozilla.org/en-US/docs/Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor#parameters',
          'https://w3c.github.io/orientation-sensor/#orientationsensor-interface'
        ]
      )
    ],
  ])
  const getResultValueDescription = (key: ResultValueKey) => {
    return resultValueKeyDescriptions.get(key) || new ResultValueKeyDescription(
      key,
      key,
      'Leider haben wir aktuell keine Informationen zu diesem Wert',
      []
    )
  }

  return { getResultValueDescription }
}
