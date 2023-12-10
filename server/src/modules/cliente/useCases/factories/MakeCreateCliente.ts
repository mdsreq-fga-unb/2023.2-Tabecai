import { ClientePrismaRepository } from "../../infra/repositories/ClientePrismaRepository"
import { CreateCliente } from "../CreateCliente"

export function MakeCreateCliente() {
  const clienteRepository = new ClientePrismaRepository()

  return new CreateCliente(clienteRepository)
}