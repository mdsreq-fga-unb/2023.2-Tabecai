import { Cliente, Compra, Prisma } from "@prisma/client";

export interface ICounter {
  devendo: number
  cliente: Cliente
}

export interface ICompraRepository {
  create(data: Prisma.CompraUncheckedCreateInput): Promise<Compra>
  listAll(): Promise<Compra[]>
  listByCaixa(caixaId: string): Promise<Compra[]>
  listByCliente(clienteId: string): Promise<Compra[]>
  update(id: string, data: Prisma.CompraUpdateInput): Promise<Compra>
  delete(id: string): Promise<Compra>
  comprasPendentesCountForEachCliente(): Promise<ICounter[] | null>
}