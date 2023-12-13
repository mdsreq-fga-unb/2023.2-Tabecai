import { CaixaPrismaRepository } from "../../infra/repositories/CaixaPrismaRepository"
import { AddCompra } from "../AddCompra"

export function MakeAddCompra() {
  const caixaRepository = new CaixaPrismaRepository()

  return new AddCompra(caixaRepository)
}