import { FastifyReply, FastifyRequest } from "fastify";
import { MakeReadCaixas } from "../../../useCases/factories/MakeReadCaixas";

export async function ReadCaixasController(request: FastifyRequest, response: FastifyReply) {
  const readCaixasUseCase = MakeReadCaixas()
  const caixas = await readCaixasUseCase.execute()

  return response.status(200).send(caixas)
}