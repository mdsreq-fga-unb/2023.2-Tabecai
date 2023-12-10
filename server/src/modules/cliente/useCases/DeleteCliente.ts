import { IClienteRepository } from "../repositories/IClienteRepository";

interface IResponse {
  id: string;
  name: string;
  cellphone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteCliente {
  constructor(private clienteRepository: IClienteRepository) { }

  async execute(id: string): Promise<IResponse> {
    const cliente = await this.clienteRepository.delete(id);

    return cliente;
  }
}