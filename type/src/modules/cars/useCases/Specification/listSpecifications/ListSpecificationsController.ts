import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

export class ListSpecificationsController {
  listSpecificationsUseCase: ListSpecificationsUseCase
  constructor(listSpecificationsUseCase: ListSpecificationsUseCase) {
    this.listSpecificationsUseCase = listSpecificationsUseCase
  }

  handle(req: Request, res: Response): Response {
    try {
      const specifications = this.listSpecificationsUseCase.execute()

      return res.status(200).json(specifications)
    } catch (err) {
      return res.status(400).json({
        success: false,
        title: 'Erro ao tentar buscar especificações',
        message: err.message,
      })
    }
  }
}
