import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all data
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
  const findFirst = await prisma.post.findFirst({
    where: {
      id: 1,
    },
  });
  console.log({findFirst})
};
main();
