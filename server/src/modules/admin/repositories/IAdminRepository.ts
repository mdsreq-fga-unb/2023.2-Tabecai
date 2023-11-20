import { Admin, Prisma } from "@prisma/client";

export interface IAdminRepository {
  create(data: Prisma.AdminUncheckedCreateInput): Promise<Admin>
  findByEmail(email: string): Promise<Admin | null>
  listAll(): Promise<Admin[]>
  update(id: string, data: Prisma.AdminUpdateInput): Promise<Admin>
  delete(id: string): Promise<Admin>
}