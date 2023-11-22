import { FastifyReply, FastifyRequest } from "fastify";
import { MakeUpdateFuncionario } from "../../../useCases/factories/MakeUpdateFuncionario";
import { z } from "zod"



export async function UpdateFuncionarioController(request: FastifyRequest, response: FastifyReply) {
  const updateFuncionarioBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string(),
    cellphone: z.string().length(11),
    cpf: z.string().length(11)
  })

  const data = updateFuncionarioBodySchema.parse(request.body)
  const { id } = request.params as { id: string }

  const updateFuncionarioUseCase = MakeUpdateFuncionario()
  const funcionario = await updateFuncionarioUseCase.execute({
    ...data,
    id
  })

  return response.status(200).send(funcionario)

}