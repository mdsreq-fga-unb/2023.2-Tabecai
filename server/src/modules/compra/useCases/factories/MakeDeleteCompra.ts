import { CompraPrismaRepository } from "../../infra/repositories/CompraPrismaRepository";
import { DeleteCompra } from "../DeleteCompra";

export function MakeDeleteCompra() {
  const compraRepository = new CompraPrismaRepository()

  return new DeleteCompra(compraRepository)
}