import { ClientePrismaRepository } from "../../infra/repositories/ClientePrismaRepository"
import { DeleteCliente } from "../DeleteCliente"

export function MakeDeleteCliente() {
  const clienteRepository = new ClientePrismaRepository()

  return new DeleteCliente(clienteRepository)
}