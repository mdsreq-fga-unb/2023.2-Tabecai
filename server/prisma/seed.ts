import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.admin.create({
    data: {
      name: "Admin",
      email: "admin@admin.com",
      password: await hash("admin1", 12),
      cellphone: "1234567890",
    },
  });

  const funcionario = await prisma.funcionario.create({
    data: {
      name: "Funcionario",
      email: "funcionario@funcionario.com",
      password: await hash("funcionario1", 12),
      cellphone: "1234567890",
      cpf: "12345678901",
    },
  });

  await prisma.caixa.create({
    data: {
      funcionarioId: funcionario.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
