import { Cliente, Method, Status } from "@prisma/client";
import { ICompraRepository } from "../repositories/ICompraRepository";

interface IResponse {
  devendo: number
  cliente: Cliente
}

export class ReadByCliente {
  constructor(private compraRepository: ICompraRepository) { }

  async execute(): Promise<IResponse[] | null> {
    const compras = await this.compraRepository.comprasPendentesCountForEachCliente()

    return compras;
  }
}