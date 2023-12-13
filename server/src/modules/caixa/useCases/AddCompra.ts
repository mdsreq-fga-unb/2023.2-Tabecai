import { Prisma } from "@prisma/client";
import { ICaixaRepository } from "../repositories/ICaixaRepository";

interface IRequest {
  id: string;
  idCompra: string;
}

interface IResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class AddCompra {
  constructor(private caixaRepository: ICaixaRepository) { }

  public async execute({ id, idCompra }: IRequest): Promise<IResponse> {
    const caixa = await this.caixaRepository.addCompra(id, idCompra)

    return caixa
  }
}