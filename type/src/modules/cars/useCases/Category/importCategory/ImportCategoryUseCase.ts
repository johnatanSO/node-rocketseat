import { ICategoriesRepository } from '../../../repositories/Categories/ICategoriesRepository'
import fs from 'fs'
import { parse } from 'csv-parse'
import { Category } from '../../../model/Category'

interface IImportCategory {
  name: string
  description: string
}

export class ImportCategoryUseCase {
  categoriesRepository: ICategoriesRepository
  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []
      const parseFile = parse({
        delimiter: '|',
      })

      stream.pipe(parseFile)

      parseFile
        .on('data', async (line) => {
          const [name, description] = line
          categories.push({
            name,
            description,
          })
        })
        .on('end', () => {
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<Category[]> {
    const categories = await this.loadCategories(file)

    const newCategories = categories.map((category) => {
      const { name, description } = category
      const categoryAlreadyExist = this.categoriesRepository.findByName(name)

      if (!categoryAlreadyExist) {
        return this.categoriesRepository.create({ name, description })
      }
      return undefined
    })

    return newCategories
  }
}
