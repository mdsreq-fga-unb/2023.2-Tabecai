import { FastifyReply, FastifyRequest } from "fastify";
import { MakeCreateCompra } from "../../useCases/factories/MakeCreateCompra";
import { z } from "zod"

export async function CreateCompraController(request: FastifyRequest, response: FastifyReply) {
  const createCompraBodySchema = z.object({
    price: z.number(),
    method: z.enum(['CREDITO', 'DEBITO', 'DINHEIRO', 'PIX']),
    status: z.enum(['PENDENTE', 'PAGO', 'CANCELADO']),
    createdAt: z.string(),
    caixaId: z.string(),
    clienteId: z.string().optional()
  })

  const data = createCompraBodySchema.parse(request.body)

  const createCompraUseCase = MakeCreateCompra()
  const compra = await createCompraUseCase.execute(data)

  return response.status(201).send(compra)
}