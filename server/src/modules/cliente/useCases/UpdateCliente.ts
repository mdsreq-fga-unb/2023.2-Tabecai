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

export class UpdateCliente {
  constructor(private clienteRepository: IClienteRepository) { }

  async execute(id: string, data: IRequest): Promise<IResponse> {
    const cliente = await this.clienteRepository.update(id, data);

    return cliente;
  }
}