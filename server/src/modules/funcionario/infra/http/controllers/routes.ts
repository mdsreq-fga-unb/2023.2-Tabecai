import { FastifyInstance } from 'fastify'
import { CreateFuncionarioController } from './CreateFuncionario'
import { ReadFuncionariosController } from './ReadFuncionarios'
import { UpdateFuncionarioController } from './UpdateFuncionario'
import { DeleteFuncionarioController } from './DeleteFuncionarioController'

export async function funcionarioRoutes(fastify: FastifyInstance) {
  fastify.post('/', CreateFuncionarioController)
  fastify.get('/all', ReadFuncionariosController)
  fastify.patch('/:id', UpdateFuncionarioController)
  fastify.delete('/:id', DeleteFuncionarioController)
}