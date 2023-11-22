import { Funcionario, Prisma } from "@prisma/client";

export interface IFuncionarioRepository {
  create(data: Prisma.FuncionarioUncheckedCreateInput): Promise<Funcionario>
  findByEmail(email: string): Promise<Funcionario | null>
  listAll(): Promise<Funcionario[]>
  update(id: string, data: Prisma.FuncionarioUpdateInput): Promise<Funcionario>
  delete(id: string): Promise<Funcionario>
}