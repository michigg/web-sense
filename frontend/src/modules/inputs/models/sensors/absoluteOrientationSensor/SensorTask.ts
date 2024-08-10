import {Task} from "@/modules/tasks/models/task"
import {TaskStep} from "@/modules/tasks/models/taskStep"
import {WebSenseAbsoluteOrientationSensor} from "@/modules/inputs/models/sensors/absoluteOrientationSensor/Sensor"

export const AbsoluteOrientationSensorTask = new Task(
  -1,
  sensor.key,
  `${sensor.key} - Test Messung`,
  {},
  [
    new TaskStep(
      sensor.key,
      sensor.key,
      sensor.key,
      [],
      '',
      [sensor.key]
    )
  ]
)
