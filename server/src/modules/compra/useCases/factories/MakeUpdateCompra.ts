import { CompraPrismaRepository } from "../../infra/repositories/CompraPrismaRepository";
import { UpdateCompra } from "../UpdateCompra";

export function MakeUpdateCompra() {
  const compraRepository = new CompraPrismaRepository()

  return new UpdateCompra(compraRepository)
}