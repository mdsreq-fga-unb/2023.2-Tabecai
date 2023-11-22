import { IFuncionarioRepository } from "../repositories/IFuncionarioRepository";

interface IRequest {
  id: string
}

interface IResponse {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteFuncionario {
  constructor(private funcionarioRepository: IFuncionarioRepository) { }

  public async execute({ id }: IRequest): Promise<IResponse> {
    const funcionario = await this.funcionarioRepository.delete(id)

    return funcionario
  }
}