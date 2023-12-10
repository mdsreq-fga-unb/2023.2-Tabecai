import { CaixaPrismaRepository } from "../../infra/repositories/CaixaPrismaRepository"
import { CreateCaixa } from "../CreateCaixa"

export function MakeCreateCaixa() {
  const caixaRepository = new CaixaPrismaRepository()

  return new CreateCaixa(caixaRepository)
}