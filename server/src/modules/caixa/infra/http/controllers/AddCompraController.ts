import { FastifyReply, FastifyRequest } from "fastify";
import { MakeAddCompra } from "../../../useCases/factories/MakeAddCompra";
import { z } from "zod";

export async function AddCompraController(request: FastifyRequest, response: FastifyReply) {
  const addCompraBodySchema = z.object({
    idCompra: z.string()
  })

  const data = addCompraBodySchema.parse(request.body)

  const { id } = request.params as { id: string }

  const addCompraUseCase = MakeAddCompra()

  const caixa = await addCompraUseCase.execute({
    id,
    idCompra: data.idCompra
  })

  return response.status(200).send(caixa)
}