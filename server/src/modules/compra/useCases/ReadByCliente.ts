import { Method, Status } from "@prisma/client";
import { ICompraRepository } from "../repositories/ICompraRepository";

interface IResponse {
  id: string;
  price: number;
  method: Method;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export class ReadByCliente {
  constructor(private compraRepository: ICompraRepository) { }

  async execute(clienteId: string): Promise<IResponse[]> {
    const compras = await this.compraRepository.listByCliente(clienteId);

    return compras;
  }
}