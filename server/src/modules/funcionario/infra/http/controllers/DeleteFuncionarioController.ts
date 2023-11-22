import { FastifyReply, FastifyRequest } from "fastify";
import { MakeDeleteFuncionario } from "../../../useCases/factories/MakeDeleteFuncionario";

export async function DeleteFuncionarioController(request: FastifyRequest, response: FastifyReply) {
  const { id } = request.params as { id: string }

  const deleteFuncionarioUseCase = MakeDeleteFuncionario()
  const funcionario = await deleteFuncionarioUseCase.execute({ id })

  return response.status(200).send({
    message: 'Funcionario deletado com sucesso',
    funcionario
  })
}