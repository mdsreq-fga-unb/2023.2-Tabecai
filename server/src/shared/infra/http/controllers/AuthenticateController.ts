import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeAuthenticate } from "../../../useCases/factories/MakeAuthenticate";

export async function AuthenticateController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  const registerBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  const { email, password } = registerBodySchema.parse(request.body);

  const authenticateUseCase = MakeAuthenticate();
  const authenticateResponse = await authenticateUseCase.execute({
    email,
    password,
  });

  if (authenticateResponse.admin) {
    return response.status(200).send({
      admin: authenticateResponse.admin,
      funcionario: null,
      caixaId: authenticateResponse.caixaId,
    });
  }

  if (authenticateResponse.funcionario) {
    return response.status(200).send({
      admin: null,
      funcionario: authenticateResponse.funcionario,
      caixaId: authenticateResponse.caixaId,
    });
  }

  return response.status(404).send();
}
