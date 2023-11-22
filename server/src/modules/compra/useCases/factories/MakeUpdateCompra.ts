import { CompraPrismaRepository } from "../../infra/repositories/CompraPrismaRepositoty";
import { UpdateCompra } from "../UpdateCompra";

export function MakeUpdateCompra() {
  const compraRepository = new CompraPrismaRepository()

  return new UpdateCompra(compraRepository)
}