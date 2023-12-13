import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { MakeUpdateClientes } from '../../../useCases/factories/MakeUpdateCliente';

export async function UpdateClienteController(request: FastifyRequest, response: FastifyReply) {
  const updateClienteBodySchema = z.object({
    name: z.string(),
    cellphone: z.string().min(11).max(20),
    cpf: z.string().min(11).max(20)
  })

  const data = updateClienteBodySchema.parse(request.body)
  const { id } = request.params as { id: string }

  const updateClienteUseCase = MakeUpdateClientes()
  const cliente = await updateClienteUseCase.execute(id, data)

  return response.status(200).send(cliente)
}