import { UsersRepository } from './../modules/accounts/repositories/Users/UsersRepository'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) throw new Error('Token não enviado')
    const [, token] = authHeader.split(' ')

    const { sub: userId } = verify(token, 'b266fd9110e2a1a83398105a8d6cec43')

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(userId.toString())

    if (!user) throw new Error('Usuário inválido')

    next()
  } catch (err) {
    return res.status(400).json({
      success: false,
      title: 'Usuário não autenticado',
      message: err.message,
    })
  }
}
