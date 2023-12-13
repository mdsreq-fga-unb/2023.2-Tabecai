import { Method, Status } from "@prisma/client";
import { ICompraRepository } from "../repositories/ICompraRepository";

interface IRequest {
  price: number;
  method: Method;
  status: Status;
  createdAt: string;
  caixaId: string;
  clienteId?: string;
}

interface IResponse {
  id: string;
  price: number;
  method: Method;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateCompra {
  constructor(private compraRepository: ICompraRepository) { }

  public async execute({ price, method, status, createdAt, caixaId, clienteId }: IRequest): Promise<IResponse> {
    const compra = await this.compraRepository.create({
      price,
      method,
      status,
      createdAt,
      caixaId,
      clienteId
    });

    return compra
  }
}