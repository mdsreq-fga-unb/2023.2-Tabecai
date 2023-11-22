import { FastifyReply, FastifyRequest } from 'fastify';
import { MakeCreateFuncionario } from '../../../useCases/factories/makeCreateFuncionario';
import { z } from 'zod';

export async function CreateFuncionarioController(request: FastifyRequest, response: FastifyReply) {
  const createFuncionarioBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    cellphone: z.string().length(11),
    cpf: z.string().length(11)
  })

  const data = createFuncionarioBodySchema.parse(request.body)

  const createFuncionarioUseCase = MakeCreateFuncionario()
  const funcionario = await createFuncionarioUseCase.execute(data)

  return response.status(201).send(funcionario)
}