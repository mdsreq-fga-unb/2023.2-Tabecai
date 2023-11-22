import { FastifyReply, FastifyRequest } from "fastify";
import { MakeCreateAdmin } from "../../../useCases/factories/MakeCreateAdmin";
import { z } from "zod";

export async function CreateAdminController(request: FastifyRequest, response: FastifyReply) {
  const createAdminBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    cellphone: z.string().min(11).max(20)
  })

  const data = createAdminBodySchema.parse(request.body)

  const createAdminUseCase = MakeCreateAdmin()
  const admin = await createAdminUseCase.execute(data)

  return response.status(201).send(admin)
}