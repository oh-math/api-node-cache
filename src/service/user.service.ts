import { User } from "@prisma/client";
import { getCached, set } from "../cache/user.cache";
import prisma from "../prisma/prisma.service";

const KEY = "user-list";

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
  let userCache: [] | null = getCached(KEY);

  const countUser = await count();
  const userCacheLength = userCache?.length || 0;

  if (countUser > userCacheLength || countUser < userCacheLength) {
    const result = await prisma.user.findMany({
      include: {
        posts: {},
      },
    });

    set(KEY, result);
    userCache = getCached(KEY);

    console.log('QUERY FEITA');
    
    return userCache;
  }

  return userCache;
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
