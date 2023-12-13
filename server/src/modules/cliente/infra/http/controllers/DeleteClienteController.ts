import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { MakeUpdateClientes } from '../../../useCases/factories/MakeUpdateCliente';
import { MakeDeleteCliente } from '../../../useCases/factories/MakeDeleteCliente';

export async function DeleteClienteController(request: FastifyRequest, response: FastifyReply) {
  const { id } = request.params as { id: string }

  const deleteClienteUseCase = MakeDeleteCliente()
  const cliente = await deleteClienteUseCase.execute(id)

  return response.status(200).send(cliente)
}