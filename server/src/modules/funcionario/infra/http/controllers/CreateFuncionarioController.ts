import { FastifyReply, FastifyRequest } from 'fastify';
import { MakeCreateFuncionario } from '../../../useCases/factories/makeCreateFuncionario';
import { z } from 'zod';

export async function CreateFuncionarioController(request: FastifyRequest, response: FastifyReply) {
  const createFuncionarioBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    cellphone: z.string().min(11).max(20),
    cpf: z.string().min(11).max(20)
  })

  const data = createFuncionarioBodySchema.parse(request.body)

  const createFuncionarioUseCase = MakeCreateFuncionario()
  const funcionario = await createFuncionarioUseCase.execute(data)

  return response.status(201).send(funcionario)
}