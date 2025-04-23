import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  const singleUpdateData = await prisma.post.update({
    where: {
      id: 2,
    },
    data: {
      title: "title2",
      content: "content..2",
      author: "Setu akter..2",
    },
  });
  console.log(singleUpdateData)
};
updates();
