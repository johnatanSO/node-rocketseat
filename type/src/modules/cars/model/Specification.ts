import { ICreateSpecificationDTO } from './../repositories/Specifitacions/ISpecificationsRepository'
import { v4 as uuidV4 } from 'uuid'

export class Specification {
  _id?: string
  name: string
  description: string
  createdAt?: Date

  constructor(specification: ICreateSpecificationDTO) {
    if (!this._id) {
      this._id = uuidV4()
    }

    Object.assign(this, specification)
  }
}
