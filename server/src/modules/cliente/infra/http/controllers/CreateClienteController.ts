import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { MakeCreateCliente } from '../../../useCases/factories/MakeCreateCliente';

export async function CreateClienteControoler(request: FastifyRequest, response: FastifyReply) {
  const createClienteBodySchema = z.object({
    name: z.string(),
    cellphone: z.string().min(11).max(20),
    cpf: z.string().min(11).max(20)
  })

  const data = createClienteBodySchema.parse(request.body)

  const createClienteUseCase = MakeCreateCliente()
  const cliente = await createClienteUseCase.execute(data)

  return response.status(201).send(cliente)
}