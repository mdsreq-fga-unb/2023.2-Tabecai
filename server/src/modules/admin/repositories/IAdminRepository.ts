import { Admin, Prisma } from "@prisma/client";

export interface IAdminRepository {
  create(data: Prisma.AdminUncheckedCreateInput): Promise<Admin>
  findByEmail(email: string): Promise<Admin | null>
}