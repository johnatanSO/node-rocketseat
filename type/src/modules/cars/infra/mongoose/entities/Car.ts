import mongoose, { Types } from 'mongoose'

export interface Car {
  _id: Types.ObjectId | string
  name: string
  description: string
  dailyRate: number
  avaliable: boolean
  licensePlate: string
  fineAmount: number
  brand: string
  categoryId: Types.ObjectId | string
  createdAt: Date
}

const CarSchema = new mongoose.Schema({
  name: { type: String, default: null },
  description: { type: String, default: null },
  dailyRate: { type: Number, default: null },
  avaliable: { type: Boolean, default: true },
  licensePlate: { type: String, default: null },
  fineAmount: { type: Number, default: null },
  brand: { type: String, default: null },
  categoryId: { type: 'ObjectId', ref: 'Category', default: null },
  createdAt: { type: Date, default: new Date() },
})

export const CarModel = mongoose.model('Car', CarSchema)
