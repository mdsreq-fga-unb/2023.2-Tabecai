import { FastifyReply, FastifyRequest } from "fastify";
import { MakeReadCaixa } from "../../../useCases/factories/MakeReadCaixa";

export async function ReadCaixaController(request: FastifyRequest, response: FastifyReply) {
  const { id } = request.params as { id: string }

  const readCaixaUseCase = MakeReadCaixa()
  const caixa = await readCaixaUseCase.execute(id)

  return response.status(200).send(caixa)
}