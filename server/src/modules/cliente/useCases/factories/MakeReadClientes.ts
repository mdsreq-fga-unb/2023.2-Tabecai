import { ClientePrismaRepository } from "../../infra/repositories/ClientePrismaRepository"
import { ReadClientes } from "../ReadClientes"

export function MakeReadClientes() {
  const clienteRepository = new ClientePrismaRepository()

  return new ReadClientes(clienteRepository)
}