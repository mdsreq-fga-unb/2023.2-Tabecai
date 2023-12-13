import { Cliente, Prisma } from "@prisma/client"

export interface IClienteRepository {
  create(data: Prisma.ClienteUncheckedCreateInput): Promise<Cliente>
  listAll(): Promise<Cliente[]>
  update(id: string, data: Prisma.ClienteUpdateInput): Promise<Cliente>
  delete(id: string): Promise<Cliente>
  findByCpf(cpf: string): Promise<Cliente | null>
}