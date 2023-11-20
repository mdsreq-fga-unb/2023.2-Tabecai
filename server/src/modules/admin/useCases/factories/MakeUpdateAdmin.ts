import { AdminPrismaRepository } from "../../infra/repositories/AdminPrismaRepository";
import { UpdateAdmin } from "../UpdateAdmin";

export function MakeUpdateAdmin() {
  const adminRepository = new AdminPrismaRepository()

  return new UpdateAdmin(adminRepository)
}