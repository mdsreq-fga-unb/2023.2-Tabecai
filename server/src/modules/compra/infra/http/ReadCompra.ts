import { FastifyRequest, FastifyReply } from "fastify";
import { MakeReadCompra } from "../../useCases/factories/MakeReadCompra";

export async function ReadCompraController(request: FastifyRequest, response: FastifyReply) {
  const readCompraUseCase = MakeReadCompra()
  const compras = await readCompraUseCase.execute()

  return response.status(200).send(compras)
}