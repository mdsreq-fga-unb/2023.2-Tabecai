import { IFuncionarioRepository } from "../repositories/IFuncionarioRepository";

interface IRequest {
  id: string;
  email: string;
  password: string;
  name: string;
  cellphone: string;
  cpf: string;
}

interface IResponse {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UpdateFuncionario {
  constructor(private funcionarioRepository: IFuncionarioRepository) { }

  public async execute({ id, email, password, name, cellphone, cpf }: IRequest): Promise<IResponse> {
    const funcionario = await this.funcionarioRepository.update(id, {
      email,
      password,
      name,
      cellphone,
      cpf
    })

    return funcionario
  }
}