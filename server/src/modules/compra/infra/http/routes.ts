import { FastifyInstance } from 'fastify'
import { CreateCompraController } from './CreateCompra'
import { DeleteCompraController } from './DeleteCompra'
import { ReadCompraController } from './ReadCompra'
import { UpdateCompraController } from './UpdateCompra'
import { ReadByCaixaController } from './ReadByCaixa'
import { ReadByClienteController } from './ReadByCliente'

export async function compraRoutes(fastify: FastifyInstance) {
  fastify.post('/', CreateCompraController)
  fastify.get('/all', ReadCompraController)
  fastify.patch('/:id', UpdateCompraController)
  fastify.delete('/:id', DeleteCompraController)
  fastify.get('/:caixaId', ReadByCaixaController)
  fastify.get('/cliente/:clienteId', ReadByClienteController)
}