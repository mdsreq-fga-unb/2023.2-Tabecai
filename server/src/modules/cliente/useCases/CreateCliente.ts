import { IClienteRepository } from "../repositories/IClienteRepository";

interface IRequest {
  name: string;
  cellphone: string;
  cpf: string;
}

interface IResponse {
  id: string;
  name: string;
  cellphone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateCliente {
  constructor(private clienteRepository: IClienteRepository) { }

  public async execute({ name, cellphone, cpf }: IRequest): Promise<IResponse> {
    const alreadyExists = await this.clienteRepository.findByCpf(cpf);

    if (alreadyExists) {
      throw new Error('Cliente already exists');
    }

    const cliente = await this.clienteRepository.create({
      name,
      cellphone,
      cpf
    });

    return cliente
  }
}