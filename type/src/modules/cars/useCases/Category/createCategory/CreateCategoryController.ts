import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  createCategoryUseCase: CreateCategoryUseCase
  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  }

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body
    try {
      const createdCategory = this.createCategoryUseCase.execute({
        name,
        description,
      })

      return res.status(201).json({ createdCategory })
    } catch (error) {
      return res.status(400).json({
        success: false,
        title: 'Erro ao tentar criar categoria',
        message: error.message,
      })
    }
  }
}
