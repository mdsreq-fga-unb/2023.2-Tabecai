import { IFuncionarioRepository } from "../repositories/IFuncionarioRepository";

interface IResponse {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ReadFuncionarios {
  constructor(private funcionarioRepository: IFuncionarioRepository) { }

  async execute(): Promise<IResponse[]> {
    const funcionarios = await this.funcionarioRepository.listAll();

    return funcionarios;
  }
}