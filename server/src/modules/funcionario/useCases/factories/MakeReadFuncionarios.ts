import { FuncionarioPrismaRepository } from "../../infra/repositories/FuncionarioPrismaRepository";
import { ReadFuncionarios } from "../ReadFuncionarios";


export default function MakeReadFuncionarios() {
  const funcionarioRepository = new FuncionarioPrismaRepository()

  return new ReadFuncionarios(funcionarioRepository)
}