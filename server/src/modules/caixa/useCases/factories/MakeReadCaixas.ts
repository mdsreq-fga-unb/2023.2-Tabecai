import { CaixaPrismaRepository } from "../../infra/repositories/CaixaPrismaRepository"
import { ReadCaixas } from "../ReadCaixas"

export function MakeReadCaixas() {
  const caixaRepository = new CaixaPrismaRepository()

  return new ReadCaixas(caixaRepository)
}