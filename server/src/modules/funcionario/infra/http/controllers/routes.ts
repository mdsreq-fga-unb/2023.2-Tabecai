import { FastifyInstance } from 'fastify'
import { DeleteFuncionarioController } from './DeleteFuncionarioController'
import { CreateFuncionarioController } from './CreateFuncionarioController'
import { ReadFuncionariosController } from './ReadFuncionariosController'
import { UpdateFuncionarioController } from './UpdateFuncionarioController'

export async function funcionarioRoutes(fastify: FastifyInstance) {
  fastify.post('/', CreateFuncionarioController)
  fastify.get('/all', ReadFuncionariosController)
  fastify.patch('/:id', UpdateFuncionarioController)
  fastify.delete('/:id', DeleteFuncionarioController)
}