import { FastifyReply, FastifyRequest } from "fastify";
import { MakeUpdateAdmin } from "../../../useCases/factories/MakeUpdateAdmin";
import { z } from "zod"

export async function UpdateAdminController(request: FastifyRequest, response: FastifyReply) {
  const updateAdminBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string(),
    cellphone: z.string().length(11)
  })

  const data = updateAdminBodySchema.parse(request.body)
  const { id } = request.params as { id: string }

  const updateAdminUseCase = MakeUpdateAdmin()
  const admin = await updateAdminUseCase.execute({
    ...data,
    id
  })

  return response.status(200).send(admin)
}