import { hash } from "bcrypt";
import { ICaixaRepository } from "../repositories/ICaixaRepository";
import { Funcionario } from "@prisma/client";

interface IRequest {
  idFuncionario: string;
}

interface IResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateCaixa {
  constructor(private caixaRepository: ICaixaRepository) { }

  public async execute({ idFuncionario }: IRequest): Promise<IResponse> {
    const funcionario = await this.caixaRepository.findByFuncionarioId(idFuncionario)

    if (funcionario) {
      throw new Error('Caixa already exists with this funcionario')
    }

    const caixa = await this.caixaRepository.create({
      funcionarioId: idFuncionario
    })

    return caixa
  }
}