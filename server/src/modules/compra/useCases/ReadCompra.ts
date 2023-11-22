import { Method } from "@prisma/client";
import { ICompraRepository } from "../repositories/ICompraRepository";

interface IResponse {
  id: string;
  price: number;
  method: Method;
  createdAt: Date;
  updatedAt: Date;
}

export class ReadCompra {
  constructor(private compraRepository: ICompraRepository) { }

  async execute(): Promise<IResponse[]> {
    const compras = await this.compraRepository.listAll();

    return compras;
  }
}