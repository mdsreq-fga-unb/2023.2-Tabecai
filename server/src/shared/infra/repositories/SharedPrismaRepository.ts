import { Admin, Funcionario, PrismaClient } from "@prisma/client";
import { ISharedRepository } from "../../repositories/ISharedRepository";

export class SharedPrismaRepository implements ISharedRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAdminByEmail(email: string): Promise<Admin | null> {
    const admin = await this.prisma.admin.findUnique({
      where: {
        email
      }
    })

    return admin
  }

  async findFuncionarioByEmail(email: string): Promise<Funcionario | null> {
    const funcionario = await this.prisma.funcionario.findUnique({
      where: {
        email
      }
    })

    return funcionario
  }

  async findCaixaByFuncionarioId(funcionarioId: string): Promise<string | null> {
    const caixa = await this.prisma.caixa.findFirst({
      where: {
        funcionarioId
      }
    })

    if (caixa) {
      return caixa.id
    }

    return null
  }
}