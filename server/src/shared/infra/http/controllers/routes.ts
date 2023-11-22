import { FastifyInstance } from "fastify";
import { AuthenticateController } from "./AuthenticateController";

export async function sharedRoutes(app: FastifyInstance) {
  app.post("/login", AuthenticateController);
}
