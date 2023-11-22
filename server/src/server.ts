import Fastify from 'fastify'
import fastifyCors from "@fastify/cors";
import { adminRoutes } from './modules/admin/infra/http/controllers/routes'
import { funcionarioRoutes } from './modules/funcionario/infra/http/controllers/routes'
import { sharedRoutes } from './shared/infra/http/controllers/routes'

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyCors);

fastify.register(adminRoutes, { prefix: '/admin' })
fastify.register(funcionarioRoutes, { prefix: '/funcionario' })
fastify.register(sharedRoutes, { prefix: '/shared' })

const start = async () => {
  try {
    await fastify.listen({ port: 3535, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()