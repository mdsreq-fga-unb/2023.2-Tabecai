import { AdminPrismaRepository } from "../../infra/repositories/AdminPrismaRepository";
import { DeleteAdmin } from "../DeleteAdmin";

export function MakeDeleteAdmin() {
  const adminRepository = new AdminPrismaRepository()

  return new DeleteAdmin(adminRepository)
}