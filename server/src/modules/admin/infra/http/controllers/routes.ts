import { FastifyInstance } from "fastify";
import { CreateAdminController } from "./CreateAdminController";
import { ReadAdminsController } from "./ReadAdminsController";
import { UpdateAdminController } from "./UpdateAdminController";
import { DeleteAdminController } from "./DeleteAdminController";

export async function adminRoutes(fastify: FastifyInstance) {
  fastify.post('/', CreateAdminController)
  fastify.get('/all', ReadAdminsController)
  fastify.patch('/:id', UpdateAdminController)
  fastify.delete('/:id', DeleteAdminController)
}