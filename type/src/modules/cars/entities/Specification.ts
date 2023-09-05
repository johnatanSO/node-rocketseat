import mongoose, { Types } from 'mongoose'

export interface Specification {
  _id?: string | Types.ObjectId
  name: string
  description: string
  createdAt: Date
}

const SpecificationSchema = new mongoose.Schema({
  name: { type: String, default: null },
  description: { type: String, default: null },
  createdAt: { type: Date, default: new Date() },
})

export const SpecificationModel = mongoose.model(
  'Specification',
  SpecificationSchema,
)
