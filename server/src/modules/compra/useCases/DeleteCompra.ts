import { Method } from "@prisma/client";
import { ICompraRepository } from "../repositories/ICompraRepository";

interface IRequest {
  id: string;
}

interface IResponse {
  id: string;
  price: number;
  method: Method;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteCompra {
  constructor(private compraRepository: ICompraRepository) { }

  public async execute({ id }: IRequest): Promise<IResponse> {
    const compra = await this.compraRepository.delete(id)

    return compra
  }
}