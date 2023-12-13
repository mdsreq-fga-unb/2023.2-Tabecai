import { ICaixaRepository } from "../repositories/ICaixaRepository";

export class ReadCaixas {
  constructor(private caixaRepository: ICaixaRepository) { }

  public async execute(id: string) {
    const caixa = await this.caixaRepository.read(id)

    return caixa
  }
}