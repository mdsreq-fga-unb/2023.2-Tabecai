import { FuncionarioPrismaRepository } from "../../infra/http/controllers/repositories/FuncionarioPrismaRepository";
import { DeleteFuncionario } from "../DeleteFuncionario";

export function MakeDeleteFuncionario() {
  const funcionarioRepository = new FuncionarioPrismaRepository()

  return new DeleteFuncionario(funcionarioRepository)
}