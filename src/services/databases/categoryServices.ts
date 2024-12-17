import { type Category } from "@prisma/client";
import prisma from "../../configs/prisma";

const createCategory = async (category: Category) => {
  return await prisma.category.create({
    data: category,
  });
};

const createManyCategories = async (categories: Category[]) => {
  return await prisma.category.createMany({
    data: categories,
  });
};

const findCategory = async (id: string) => {
  return await prisma.category.findUnique({
    where: { id },
  });
};

const findManyCategories = async () => {
  return await prisma.category.findMany();
};

const updateCategory = async (id: string, category: Category) => {
  return await prisma.category.update({
    where: { id },
    data: category,
  });
};

const deleteCategory = async (id: string) => {
  return await prisma.category.delete({
    where: { id },
  });
};

export {
  createCategory,
  createManyCategories,
  findCategory,
  findManyCategories,
  updateCategory,
  deleteCategory,
};
