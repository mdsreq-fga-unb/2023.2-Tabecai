import { Funcionario, Prisma, PrismaClient } from "@prisma/client";
import { IFuncionarioRepository } from "../../repositories/IFuncionarioRepository";

export class FuncionarioPrismaRepository implements IFuncionarioRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  public async create(data: Prisma.FuncionarioUncheckedCreateInput): Promise<Funcionario> {
    const funcionario = await this.prisma.funcionario.create({ data })

    return funcionario
  }

  public async findByEmail(email: string): Promise<Funcionario | null> {
    const funcionario = await this.prisma.funcionario.findUnique({ where: { email } })

    return funcionario
  }

  public async listAll(): Promise<Funcionario[]> {
    const funcionario = await this.prisma.funcionario.findMany()

    return funcionario
  }

  public async update(id: string, data: Prisma.FuncionarioUpdateInput): Promise<Funcionario> {
    const funcionario = await this.prisma.funcionario.update({ where: { id }, data })

    return funcionario
  }

  public async delete(id: string): Promise<Funcionario> {
    const funcionario = await this.prisma.funcionario.delete({ where: { id } })

    return funcionario
  }
}