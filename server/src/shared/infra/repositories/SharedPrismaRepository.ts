import { Admin, Funcionario, PrismaClient } from "@prisma/client";
import { ISharedRepository } from "../../repositories/ISharedRepository";

export class SharedPrismaRepository implements ISharedRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByEmail(email: string): Promise<Admin | Funcionario | null> {
    const admin = await this.prisma.admin.findUnique({
      where: {
        email
      }
    })

    if (admin) {
      return admin
    }

    const funcionario = await this.prisma.funcionario.findUnique({
      where: {
        email
      }
    })

    if (funcionario) {
      return funcionario
    }

    return null
  }
}