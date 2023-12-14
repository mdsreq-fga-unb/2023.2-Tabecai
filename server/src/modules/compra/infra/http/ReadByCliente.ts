import { FastifyRequest, FastifyReply } from "fastify";
import { MakeReadByCliente } from "../../useCases/factories/MakeReadByCliente";

export async function ReadByClienteController(request: FastifyRequest, response: FastifyReply) {
  const readByClienteUseCase = MakeReadByCliente()
  const compras = await readByClienteUseCase.execute()

  return response.status(200).send(compras)
}