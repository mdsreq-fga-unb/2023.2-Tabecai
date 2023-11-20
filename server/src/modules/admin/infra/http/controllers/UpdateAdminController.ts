import { FastifyReply, FastifyRequest } from "fastify";
import { MakeUpdateAdmin } from "../../../useCases/factories/MakeUpdateAdmin";

interface IBody {
  email: string;
  password: string;
  name: string;
  cellphone: string;
}

export async function UpdateAdminController(request: FastifyRequest, response: FastifyReply) {
  const { email, password, name, cellphone } = request.body as IBody
  const { id } = request.params as { id: string }

  const updateAdminUseCase = MakeUpdateAdmin()
  const admin = await updateAdminUseCase.execute({
    id,
    email,
    password,
    name,
    cellphone
  })

  return response.status(200).send(admin)
}