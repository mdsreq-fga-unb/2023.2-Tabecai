import { CompraPrismaRepository } from "../../infra/repositories/CompraPrismaRepositoty";
import { DeleteCompra } from "../DeleteCompra";

export function MakeDeleteCompra() {
  const compraRepository = new CompraPrismaRepository()

  return new DeleteCompra(compraRepository)
}