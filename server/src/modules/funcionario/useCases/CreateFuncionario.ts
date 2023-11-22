import { IFuncionarioRepository } from "../repositories/IFuncionarioRepository";

interface IRequest {
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

export class CreateFuncionario {
  constructor(private funcionarioRepository: IFuncionarioRepository) { }

  public async execute({ email, password, name, cellphone, cpf }: IRequest): Promise<IResponse> {
    const alreadyExists = await this.funcionarioRepository.findByEmail(email);

    if (alreadyExists) {
      throw new Error('Funcionario already exists');
    }

    const funcionario = await this.funcionarioRepository.create({
      email,
      password,
      name,
      cellphone,
      cpf
    });

    return funcionario
  }
}