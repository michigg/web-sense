import { IImage } from '@/shared/models/image'

export interface ITaskStepInstruction {
  title: string,
  image?: IImage,
  description: string
}
