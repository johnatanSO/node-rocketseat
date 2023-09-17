import mongoose, { Types } from 'mongoose'

export interface Category {
  _id?: string | Types.ObjectId
  name: string
  description: string
  createdAt: Date
}

const CategorySchema = new mongoose.Schema({
  name: { type: String, default: null },
  description: { type: String, default: null },
  createdAt: { type: Date, default: new Date() },
})

export const CategoryModel = mongoose.model('Category', CategorySchema)
