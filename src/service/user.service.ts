import { User } from "@prisma/client";
import prisma from "../prisma/prisma.service";

export const createUser = async (user: any) => {
  const { email, name, posts } = user || {};

  const result = await prisma.user.create({
    data: {
      email: email,
      name: name,
      posts: posts,
    },
  });

  return result;
};

export const getUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return result;
};

export const deleteUser = async (id: string): Promise<number | null> => {
  const result = await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });

  return result.id;
};
