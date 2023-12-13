import { ClientePrismaRepository } from "../../infra/repositories/ClientePrismaRepository"
import { UpdateCliente } from "../UpdateCliente"

export function MakeUpdateClientes() {
  const clienteRepository = new ClientePrismaRepository()

  return new UpdateCliente(clienteRepository)
}