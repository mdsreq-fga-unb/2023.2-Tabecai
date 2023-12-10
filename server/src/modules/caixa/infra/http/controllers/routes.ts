import { FastifyInstance } from "fastify"
import { CreateCaixaController } from "./CreateCaixaController"
import { ReadCaixasController } from "./ReadCaixasController"
import { AddCompraController } from "./AddCompraController"
import { ReadCaixaController } from "./ReadCaixaController"

export async function caixaRoutes(fastify: FastifyInstance) {
  fastify.post('/:id', CreateCaixaController)
  fastify.get('/all', ReadCaixasController)
  fastify.get('/:id', ReadCaixaController)
  fastify.patch('/add/:id', AddCompraController)
}