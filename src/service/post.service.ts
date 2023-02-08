import { Post } from "@prisma/client";
import { getCached, set } from "../cache/user.cache";
import prisma from "../prisma/prisma.service";

const KEY = "post-list";

const count = async (): Promise<number> => {
  return await prisma.post.count();
};

export const createPost = async (input: any): Promise<Post | null> => {
  const { title, content, published, authorId } = input || {};

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published,
      authorId: parseInt(authorId),
    },
  });

  return result;
};

export const getPost = async (id: string): Promise<Post | null> => {
  const result = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return result;
};

export const getAllPosts = async (): Promise<Post[] | null> => {
  const result = await prisma.post.findMany();

  set(KEY, result);
  const resultCache = getCached(KEY);

  return resultCache;
};

export const updatePost = async (
  id: string,
  input: any
): Promise<Post | null> => {
  const { title, content, published, authorId } = input || {};

  const result = await prisma.post.update({
    data: {
      title,
      content,
      published,
      authorId,
    },
    where: {
      id: parseInt(id),
    },
  });

  return result;
};

export const deletePost = async (id: string): Promise<number | null> => {
  const result = await prisma.post.delete({
    where: {
      id: parseInt(id),
    },
  });

  return result.id;
};
