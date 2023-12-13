import { ICompraRepository } from "../repositories/ICompraRepository";
import { Method, Status } from "@prisma/client";

interface IRequest {
  id: string;
  price: number;
  method: Method;
  status: Status;
  createdAt: string;
}

interface IResponse {
  id: string;
  price: number;
  method: Method;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export class UpdateCompra {
  constructor(private compraRepository: ICompraRepository) { }

  public async execute({ id, price, method, status, createdAt }: IRequest): Promise<IResponse> {
    const compra = await this.compraRepository.update(id, {
      id,
      price,
      method,
      status,
      createdAt,
    });

    return compra
  }
}