import { Admin, Funcionario } from "@prisma/client";

export interface ISharedRepository {
  findByEmail(email: string): Promise<Admin | Funcionario | null>;
}
