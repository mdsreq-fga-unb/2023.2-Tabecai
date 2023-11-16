import { AdminPrismaRepository } from "../../infra/repositories/AdminPrismaRepository";
import { CreateAdmin } from "../CreateAdmin";

export function MakeCreateAdmin() {
  const adminRepository = new AdminPrismaRepository()

  return new CreateAdmin(adminRepository)
}