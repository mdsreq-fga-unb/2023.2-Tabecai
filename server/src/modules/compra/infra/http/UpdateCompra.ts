import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod"
import { MakeUpdateCompra } from "../../useCases/factories/MakeUpdateCompra";

export async function UpdateCompraController(request: FastifyRequest, response: FastifyReply) {
  const updateCompraBodySchema = z.object({
    price: z.number(),
    method: z.enum(['CREDITO', 'DEBITO', 'DINHEIRO', 'PIX']),
    status: z.enum(['PENDENTE', 'PAGO', 'CANCELADO']),
    createdAt: z.string()
  })

  const data = updateCompraBodySchema.parse(request.body)
  const { id } = request.params as { id: string }

  const updateCompraUseCase = MakeUpdateCompra()
  const compra = await updateCompraUseCase.execute({
    ...data,
    id
  })

  return response.status(200).send(compra)
}