import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  //   console.log(avgAge);

  // find sum aggregate
  const sumAvg = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
//   console.log(sumAvg);

  // find max aggregate
  const maxAvg = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
//   console.log(maxAvg);

  // find min aggregate
  const minAvg = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
//   console.log(minAvg);

  // find count aggregate - eta sudu matro table er column er nmbr count korbe
  const countAvg = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
//   console.log(countAvg);

  // eti akta table er sob ghulo data ke count kore
  const countTableAvg = await prisma.user.count()
  console.log(countTableAvg)

};

aggregates();
