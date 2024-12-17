import { type Product } from "@prisma/client";
import prisma from "../../configs/prisma";

// Create a single product
const createProduct = async (product: Product) => {
  return await prisma.product.create({
    data: product,
  });
};

// Create multiple products
const createManyProducts = async (products: Product[]) => {
  return await prisma.product.createMany({
    data: products,
  });
};

// Find a product by id
const findProduct = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
  });
};

// Find many products
const findManyProducts = async () => {
  return await prisma.product.findMany();
};

// Update a product
const updateProduct = async (id: string, product: Product) => {
  return await prisma.product.update({
    where: { id },
    data: product,
  });
};

// Delete a product
const deleteProduct = async (id: string) => {
  return await prisma.product.delete({
    where: { id },
  });
};

export {
  createProduct,
  createManyProducts,
  findProduct,
  findManyProducts,
  updateProduct,
  deleteProduct,
};
