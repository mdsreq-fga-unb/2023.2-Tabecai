import { IClienteRepository } from "../repositories/IClienteRepository";

interface IResponse {
  id: string;
  name: string;
  cellphone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ReadClientes {
  constructor(private clienteRepository: IClienteRepository) { }

  async execute(): Promise<IResponse[]> {
    const clientes = await this.clienteRepository.listAll();

    return clientes;
  }
}