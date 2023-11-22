import { FuncionarioPrismaRepository } from "../../infra/repositories/FuncionarioPrismaRepository";
import { UpdateFuncionario } from "../UpdateFuncionario";

export function MakeUpdateFuncionario() {
  const adminRepository = new FuncionarioPrismaRepository()

  return new UpdateFuncionario(adminRepository)
}