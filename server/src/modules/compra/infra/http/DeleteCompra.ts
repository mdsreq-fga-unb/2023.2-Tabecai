import { FastifyRequest, FastifyReply } from "fastify";
import { MakeDeleteCompra } from "../../useCases/factories/MakeDeleteCompra";


export async function DeleteCompraController(request: FastifyRequest, response: FastifyReply) {
  const { id } = request.params as { id: string }

  const deleteCompraUseCase = MakeDeleteCompra()
  const compra = await deleteCompraUseCase.execute({ id })

  return response.status(200).send({
    message: 'Compra deletada com sucesso',
    compra
  })
}