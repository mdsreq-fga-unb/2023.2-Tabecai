import { CompraPrismaRepository } from "../../infra/repositories/CompraPrismaRepository";
import { CreateCompra } from "../CreateCompra";

export function MakeCreateCompra() {
  const compraRepository = new CompraPrismaRepository()

  return new CreateCompra(compraRepository)
}