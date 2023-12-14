import { FastifyRequest, FastifyReply } from "fastify";
import { MakeReadByCliente } from "../../useCases/factories/MakeReadByCliente";

export async function ReadByClienteController(request: FastifyRequest, response: FastifyReply) {
  const { clienteId } = request.params as { clienteId: string }

  const readByClienteUseCase = MakeReadByCliente()
  const compras = await readByClienteUseCase.execute(clienteId)

  return response.status(200).send(compras)
}