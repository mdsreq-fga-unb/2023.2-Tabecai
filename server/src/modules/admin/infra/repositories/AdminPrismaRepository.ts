import { Admin, Prisma, PrismaClient } from "@prisma/client";
import { IAdminRepository } from "../../repositories/IAdminRepository";

export class AdminPrismaRepository implements IAdminRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  public async create(data: Prisma.AdminUncheckedCreateInput): Promise<Admin> {
    const admin = await this.prisma.admin.create({ data })

    return admin
  }

  public async findByEmail(email: string): Promise<Admin | null> {
    const admin = await this.prisma.admin.findUnique({ where: { email } })

    return admin
  }

  public async listAll(): Promise<Admin[]> {
    const admins = await this.prisma.admin.findMany()

    return admins
  }

  public async update(id: string, data: Prisma.AdminUpdateInput): Promise<Admin> {
    const admin = await this.prisma.admin.update({ where: { id }, data })

    return admin
  }

  public async delete(id: string): Promise<Admin> {
    const admin = await this.prisma.admin.delete({ where: { id } })

    return admin
  }
}