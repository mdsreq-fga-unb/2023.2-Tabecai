import { Admin, Funcionario } from "@prisma/client";

export interface ISharedRepository {
  findAdminByEmail(email: string): Promise<Admin | null>;
  findFuncionarioByEmail(email: string): Promise<Funcionario | null>;
  findCaixaByFuncionarioId(funcionarioId: string): Promise<string | null>;
}
