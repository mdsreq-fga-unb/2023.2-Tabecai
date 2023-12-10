import { FastifyInstance } from "fastify"
import { CreateClienteControoler } from "./CreateClienteController"
import { ReadClientesControler } from "./ReadClientesController"
import { UpdateClienteController } from "./UpdateClienteController"
import { DeleteClienteController } from "./DeleteClienteController"

export async function clienteRoutes(fastify: FastifyInstance) {
  fastify.post('/', CreateClienteControoler)
  fastify.get('/all', ReadClientesControler)
  fastify.patch('/:id', UpdateClienteController)
  fastify.delete('/:id', DeleteClienteController)
}