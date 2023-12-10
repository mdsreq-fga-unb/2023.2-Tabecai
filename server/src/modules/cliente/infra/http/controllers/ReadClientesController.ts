import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { MakeReadClientes } from '../../../useCases/factories/MakeReadClientes';

export async function ReadClientesControler(request: FastifyRequest, response: FastifyReply) {
  const readClientesUseCase = MakeReadClientes()
  const clientes = await readClientesUseCase.execute()

  return response.status(200).send(clientes)
}