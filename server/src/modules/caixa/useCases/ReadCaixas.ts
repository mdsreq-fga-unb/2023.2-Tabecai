import { ICaixaRepository } from "../repositories/ICaixaRepository";

interface IResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ReadCaixas {
  constructor(private caixaRepository: ICaixaRepository) { }

  public async execute(): Promise<IResponse[]> {
    const caixas = await this.caixaRepository.listAll()

    return caixas
  }
}