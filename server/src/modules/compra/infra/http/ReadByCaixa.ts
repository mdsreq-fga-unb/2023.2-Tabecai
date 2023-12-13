import { FastifyRequest, FastifyReply } from "fastify";
import { MakeReadByCaixa } from "../../useCases/factories/MakeReadByCaixa";

export async function ReadByCaixaController(request: FastifyRequest, response: FastifyReply) {
  const { caixaId } = request.params as { caixaId: string }

  const readByCaixaUseCase = MakeReadByCaixa()
  const compras = await readByCaixaUseCase.execute(caixaId)

  return response.status(200).send(compras)
}