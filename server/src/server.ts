import Fastify from 'fastify'
import { Prisma, PrismaClient } from '@prisma/client'

(async () => {
  const fastify = Fastify({
    logger: true
  })

  const prisma = new PrismaClient()

  fastify.get('/', async function handler(request, reply) {
    return { hello: 'world' }
  })

  try {
    await fastify.listen({ port: 3333, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})()