import { AdminPrismaRepository } from "../../infra/repositories/AdminPrismaRepository";
import { ReadAdmins } from "../ReadAdmins";

export function MakeReadAdmins() {
  const adminRepository = new AdminPrismaRepository()

  return new ReadAdmins(adminRepository)
}