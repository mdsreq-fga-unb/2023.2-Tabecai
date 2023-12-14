import { Compra, Prisma, PrismaClient } from "@prisma/client";
import { ICompraRepository, ICounter } from "../../repositories/ICompraRepository";

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
    const compra = await this.prisma.compra.findMany({
      orderBy: {
        createdAt: 'desc'
      }, include: {
        cliente: true,
        Caixa: {
          include: {
            funcionario: true
          }
        }
      }
    })

    return compra
  }

  public async listByCaixa(caixaId: string): Promise<Compra[]> {
    const compra = await this.prisma.compra.findMany({
      where: { caixaId }, include: {
        cliente: true,
        Caixa: {
          include: {
            funcionario: true
          }
        }
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    return compra
  }

  public async listByCliente(clienteId: string): Promise<Compra[]> {
    const compra = await this.prisma.compra.findMany({
      where: { clienteId }, include: {
        cliente: true,
        Caixa: {
          include: {
            funcionario: true
          }
        }
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

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

  public async comprasPendentesCountForEachCliente(): Promise<ICounter[] | null> {
    const compras = await this.prisma.compra.groupBy({
      by: ['clienteId'],
      where: {
        status: 'PENDENTE'
      },
      _count: {
        status: true
      },
    })

    const clientes = []

    for (let i = 0; i < compras.length; i++) {
      if (compras[i].clienteId) {
        const cliente = await this.prisma.cliente.findUnique({
          where: {
            id: compras[i].clienteId as string
          }
        })

        clientes.push({
          devendo: compras[i]._count.status,
          cliente
        })
      }
    }

    return clientes as ICounter[]
  }
}