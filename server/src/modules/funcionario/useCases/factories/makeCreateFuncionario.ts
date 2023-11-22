import { FuncionarioPrismaRepository } from "../../infra/http/controllers/repositories/FuncionarioPrismaRepository";
import { CreateFuncionario } from "../CreateFuncionario";

export function MakeCreateFuncionario() {
  const funcionarioRepository = new FuncionarioPrismaRepository()

  return new CreateFuncionario(funcionarioRepository)
}