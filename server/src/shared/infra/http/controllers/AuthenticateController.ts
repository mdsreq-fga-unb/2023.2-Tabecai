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
  let { admin, funcionario } = await authenticateUseCase.execute({ email, password });

  if (admin) {
    return response.status(200).send(admin);
  }

  if (funcionario) {
    return response.status(200).send(funcionario);
  }

  return response.status(404).send();
}
