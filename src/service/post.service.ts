import { Post } from "@prisma/client";
import prisma from "../prisma/prisma.service";

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
  

  return result;
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
