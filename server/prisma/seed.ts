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
