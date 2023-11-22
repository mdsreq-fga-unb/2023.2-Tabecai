import { Method } from "@prisma/client";
import { ICompraRepository } from "../repositories/ICompraRepository";

interface IRequest {
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

export class CreateCompra {
  constructor(private compraRepository: ICompraRepository) { }

  public async execute({ price, method }: IRequest): Promise<IResponse> {
    const compra = await this.compraRepository.create({
      price,
      method
    });

    return compra
  }
}