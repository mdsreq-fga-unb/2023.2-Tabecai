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

export class ReadByCaixa {
  constructor(private compraRepository: ICompraRepository) { }

  async execute(caixaId: string): Promise<IResponse[]> {
    const compras = await this.compraRepository.listByCaixa(caixaId);

    return compras;
  }
}