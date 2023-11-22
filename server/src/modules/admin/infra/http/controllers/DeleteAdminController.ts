import { FastifyReply, FastifyRequest } from "fastify";
import { MakeDeleteAdmin } from "../../../useCases/factories/MakeDeleteAdmin";

export async function DeleteAdminController(request: FastifyRequest, response: FastifyReply) {
  const { id } = request.params as { id: string }

  const deleteAdminUseCase = MakeDeleteAdmin()
  const admin = await deleteAdminUseCase.execute({ id })

  return response.status(200).send({
    message: 'Admin deletado com sucesso',
    admin
  })
}