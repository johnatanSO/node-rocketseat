import { v4 as uuidV4 } from 'uuid'

export class Category {
  _id?: string
  name: string
  description: string
  createdAt: Date

  constructor(category: Category) {
    if (!this._id) {
      this._id = uuidV4()
    }

    Object.assign(this, category)
  }
}
