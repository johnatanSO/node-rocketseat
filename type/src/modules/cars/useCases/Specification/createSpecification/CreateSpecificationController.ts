import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

export class CreateSpecificationController {
  createSpecificationUseCase: CreateSpecificationUseCase
  constructor(createSpecificationUseCase: CreateSpecificationUseCase) {
    this.createSpecificationUseCase = createSpecificationUseCase
  }

  handle(req: Request, res: Response): Response {
    try {
      const { name, description } = req.body
      const newSpecification = this.createSpecificationUseCase.execute({
        name,
        description,
      })

      return res.status(201).json({
        success: true,
        title: 'Especificação cadastrada com sucesso',
        item: newSpecification,
      })
    } catch (err) {
      return res.status(401).json({
        success: false,
        title: 'Erro ao tentar cadastrar nova especificação',
        message: err.message,
      })
    }
  }
}
