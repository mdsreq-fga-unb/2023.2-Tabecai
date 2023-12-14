import { CompraPrismaRepository } from "../../infra/repositories/CompraPrismaRepository";
import { ReadByCliente } from "../ReadByCliente";

export function MakeReadByCliente() {
  const compraRepository = new CompraPrismaRepository()

  return new ReadByCliente(compraRepository)
}