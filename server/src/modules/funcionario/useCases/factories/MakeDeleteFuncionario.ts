import { FuncionarioPrismaRepository } from "../../infra/repositories/FuncionarioPrismaRepository";
import { DeleteFuncionario } from "../DeleteFuncionario";

export function MakeDeleteFuncionario() {
  const funcionarioRepository = new FuncionarioPrismaRepository()

  return new DeleteFuncionario(funcionarioRepository)
}