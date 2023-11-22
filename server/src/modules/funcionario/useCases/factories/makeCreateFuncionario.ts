import { FuncionarioPrismaRepository } from "../../infra/repositories/FuncionarioPrismaRepository";
import { CreateFuncionario } from "../CreateFuncionario";

export function MakeCreateFuncionario() {
  const funcionarioRepository = new FuncionarioPrismaRepository()

  return new CreateFuncionario(funcionarioRepository)
}