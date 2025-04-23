import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationOrSorting = async () => {
  // pagination
  const paginationData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 10,
    },
  });

  // console.log(paginationData)

  // sorting
  const sortingData = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
    skip: 1,
    take: 1,
    where: {
      title: "title1",
    },
  });
  console.log(sortingData);
};

paginationOrSorting();
