import { CaixaPrismaRepository } from "../../infra/repositories/CaixaPrismaRepository"
import { ReadCaixas } from "../ReadCaixa"

export function MakeReadCaixa() {
  const caixaRepository = new CaixaPrismaRepository()

  return new ReadCaixas(caixaRepository)
}