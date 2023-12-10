import { Cliente, Prisma, PrismaClient } from "@prisma/client";
import { IClienteRepository } from "../../repositories/IClienteRepository";

export class ClientePrismaRepository implements IClienteRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: Prisma.ClienteUncheckedCreateInput): Promise<Cliente> {
    const cliente = await this.prisma.cliente.create({ data })

    return cliente
  }

  async listAll(): Promise<Cliente[]> {
    const clientes = await this.prisma.cliente.findMany()

    return clientes
  }

  async update(id: string, data: Prisma.ClienteUpdateInput): Promise<Cliente> {
    const cliente = await this.prisma.cliente.update({ where: { id }, data })

    return cliente
  }

  async delete(id: string): Promise<Cliente> {
    const cliente = await this.prisma.cliente.delete({ where: { id } })

    return cliente
  }

  async findByCpf(cpf: string): Promise<Cliente | null> {
    const cliente = await this.prisma.cliente.findFirst({ where: { cpf } })

    return cliente
  }
}