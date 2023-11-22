import { FastifyReply, FastifyRequest } from "fastify";
import { MakeReadAdmins } from "../../../useCases/factories/MakeReadAdmins";

export async function ReadAdminsController(request: FastifyRequest, response: FastifyReply) {
  const readAdminsUseCase = MakeReadAdmins()
  const admins = await readAdminsUseCase.execute()

  return response.status(200).send(admins)
}