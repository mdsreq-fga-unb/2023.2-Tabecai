import { FastifyInstance } from "fastify";
import { CreateAdminController } from "./CreateAdminController";

export async function adminRoutes(fastify: FastifyInstance) {
  fastify.post('/', CreateAdminController)
}