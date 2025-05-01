import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = await prisma.user.create({
    data: {
      username: "test1",
      email: "test1@gmail.com",
    },
  });
  //   console.log(createUser);

  const updateUser = await prisma.user.update({
    where: {
      id: 8,
    },
    data: {
      age: 30,
    },
  });
  
};

batchTransaction();
