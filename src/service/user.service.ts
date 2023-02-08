import { User } from "@prisma/client";
import prisma from "../prisma/prisma.service";

const count = async (): Promise<number> => {
  return await prisma.user.count();
};

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

export const getAllUsers = async (): Promise<User[] | [] | null> => {
  const result = await prisma.user.findMany({
    include: {
      posts: {},
    },
  });

  return result;
};

export const updateUser = async (
  id: string,
  input: any
): Promise<User | null> => {
  const { email, name } = input || {};

  const result = await prisma.user.update({
    data: {
      email,
      name,
    },
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
