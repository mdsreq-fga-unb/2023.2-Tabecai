import { Compra, Prisma, PrismaClient } from "@prisma/client";
import { ICompraRepository } from "../../repositories/ICompraRepository";

export class CompraPrismaRepository implements ICompraRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  public async create(data: Prisma.CompraUncheckedCreateInput): Promise<Compra> {
    const compra = await this.prisma.compra.create({ data })

    return compra
  }

  public async listAll(): Promise<Compra[]> {
    const compra = await this.prisma.compra.findMany()

    return compra
  }

  public async update(id: string, data: Prisma.CompraUpdateInput): Promise<Compra> {
    const compra = await this.prisma.compra.update({ where: { id }, data })

    return compra
  }

  public async delete(id: string): Promise<Compra> {
    const compra = await this.prisma.compra.delete({ where: { id } })

    return compra
  }
}