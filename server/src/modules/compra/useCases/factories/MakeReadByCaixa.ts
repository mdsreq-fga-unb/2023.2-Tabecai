import { CompraPrismaRepository } from "../../infra/repositories/CompraPrismaRepository";
import { ReadByCaixa } from "../ReadByCaixa";

export function MakeReadByCaixa() {
  const compraRepository = new CompraPrismaRepository()

  return new ReadByCaixa(compraRepository)
}