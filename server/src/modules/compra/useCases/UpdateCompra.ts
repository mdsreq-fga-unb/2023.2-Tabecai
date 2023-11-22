import { ICompraRepository } from "../repositories/ICompraRepository";
import { Method } from "@prisma/client";

interface IRequest {
  id: string;
  price: number;
  method: Method;
}

interface IResponse {
  id: string;
  price: number;
  method: Method;
  createdAt: Date;
  updatedAt: Date;
}

export class UpdateCompra {
  constructor(private compraRepository: ICompraRepository) { }

  public async execute({ id, price, method }: IRequest): Promise<IResponse> {
    const compra = await this.compraRepository.update(id, {
      id,
      price,
      method
    });

    return compra
  }
}