import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user2",
  //       email: "user2@gmail.com",
  //       role: UserRole.user,
  //     },
  //   });
  //   console.log(createUser)

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "This is profile bio",
  //       userId: 1,
  //     },
  //   });
  //   console.log(createProfile)

  // const createCategory = await prisma.category.create({
  //     data: {
  //       name: "",
  //     },
  //   });
  //   console.log(createCategory)

  const createPost = await prisma.post.create({
    data: {
      title: "This is Title",
      content: "This is content Post",
      authorId: 1,
      postCategory: {
        // create: {
        //     categoryId:3
        // //   category: {
        // //     connect: {
        // //       id: 1,
        // //     },
        // //   },
        //   },
        create:[
            {
                categoryId:5
            },
            {
                categoryId:6
            },
            {
                categoryId:7
            },
        ]
        
      },
    },
    include:{
        postCategory:true
    }
  });
  console.log(createPost);
};
main();
