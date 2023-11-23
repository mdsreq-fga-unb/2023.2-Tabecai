import { FastifyInstance } from 'fastify'
import { CreateCompraController } from './CreateCompra'
import { DeleteCompraController } from './DeleteCompra'
import { ReadCompraController } from './ReadCompra'
import { UpdateCompraController } from './UpdateCompra'

export async function compraRoutes(fastify: FastifyInstance) {
  fastify.post('/', CreateCompraController)
  fastify.get('/all', ReadCompraController)
  fastify.patch('/:id', UpdateCompraController)
  fastify.delete('/:id', DeleteCompraController)
}