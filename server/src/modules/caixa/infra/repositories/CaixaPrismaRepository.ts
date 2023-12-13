import { Caixa, Prisma, PrismaClient } from "@prisma/client";
import { ICaixaRepository } from "../../repositories/ICaixaRepository";

export class CaixaPrismaRepository implements ICaixaRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(data: Prisma.CaixaUncheckedCreateInput): Promise<Caixa> {
    const caixa = await this.prisma.caixa.create({
      data
    });
    return caixa;
  }

  async findByFuncionarioId(id: string): Promise<Caixa | null> {
    const caixa = await this.prisma.caixa.findFirst({
      where: {
        funcionarioId: id
      }
    });
    return caixa;
  }

  async listAll(): Promise<Caixa[]> {
    const caixas = await this.prisma.caixa.findMany({
      include: {
        compras: {
          include: {
            Caixa: {
              include: {
                funcionario: true
              }
            },
          }
        }
      }
    });

    return caixas;
  }

  async update(id: string, data: Prisma.CaixaUpdateInput): Promise<Caixa> {
    const caixa = await this.prisma.caixa.update({
      where: {
        id
      },
      data
    });
    return caixa;
  }

  async delete(id: string): Promise<Caixa> {
    const caixa = await this.prisma.caixa.delete({
      where: {
        id
      }
    });
    return caixa;
  }

  async addCompra(id: string, idCompra: string): Promise<Caixa> {
    const compra = await this.prisma.compra.findUnique({
      where: {
        id: idCompra
      }
    });

    const caixa = await this.prisma.caixa.update({
      where: {
        id
      },
      data: {
        compras: {
          connect: {
            id: compra?.id
          }
        }
      },
      include: {
        compras: true
      }
    });
    return caixa;
  }

  async read(id: string): Promise<Caixa | null> {
    const caixa = await this.prisma.caixa.findFirst({
      where: {
        funcionarioId: id
      },
      include: {
        compras: true
      }
    });
    return caixa;
  }
}