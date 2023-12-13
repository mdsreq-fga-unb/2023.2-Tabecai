import { Caixa, Prisma } from "@prisma/client";

export interface ICaixaRepository {
  create(data: Prisma.CaixaUncheckedCreateInput): Promise<Caixa>
  findByFuncionarioId(id: string): Promise<Caixa | null>
  listAll(): Promise<Caixa[]>
  read(id: string): Promise<Caixa | null>
  update(id: string, data: Prisma.CaixaUpdateInput): Promise<Caixa>
  delete(id: string): Promise<Caixa>
  addCompra(id: string, idCompra: string): Promise<Caixa>
}