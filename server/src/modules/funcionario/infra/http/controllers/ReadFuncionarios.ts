import { FastifyReply, FastifyRequest } from "fastify";
import MakeReadFuncionarios from "../../../useCases/factories/MakeReadFuncionarios"

export async function ReadFuncionariosController(request: FastifyRequest, response: FastifyReply) {
  const readFuncionariosUseCase = MakeReadFuncionarios()
  const funcionarios = await readFuncionariosUseCase.execute()

  return response.status(200).send(funcionarios)

}