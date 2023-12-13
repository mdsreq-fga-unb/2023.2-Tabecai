import { CompraPrismaRepository } from "../../infra/repositories/CompraPrismaRepository";
import { ReadCompra } from "../ReadCompra";

export function MakeReadCompra() {
  const compraRepository = new CompraPrismaRepository()

  return new ReadCompra(compraRepository)
}