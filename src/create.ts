import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create many
const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "title1",
        content: "content..1",
        author: "Setu akter..1",
      },
      {
        title: "title2",
        content: "content..2",
        author: "Setu akter..2",
      },
      {
        title: "title3",
        content: "content..3",
        author: "Setu akter..3",
      },
    ],
  });
  console.log(createMany);
};
main();
