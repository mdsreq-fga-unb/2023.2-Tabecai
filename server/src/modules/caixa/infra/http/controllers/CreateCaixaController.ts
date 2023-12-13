import { FastifyReply, FastifyRequest } from "fastify";
import { MakeCreateCaixa } from "../../../useCases/factories/MakeCreateCaixa";

export async function CreateCaixaController(request: FastifyRequest, response: FastifyReply) {
  const { id } = request.params as { id: string }

  const createCaixaUseCase = MakeCreateCaixa()
  const caixa = await createCaixaUseCase.execute({
    idFuncionario: id
  })

  return response.status(201).send(caixa)
}