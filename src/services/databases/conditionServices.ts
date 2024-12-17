import { type Condition } from "@prisma/client";
import prisma from "../../configs/prisma";

// Create a single condition
const createCondition = async (condition: Condition) => {
  return await prisma.condition.create({
    data: condition,
  });
};

// Create multiple conditions
const createManyConditions = async (conditions: Condition[]) => {
  return await prisma.condition.createMany({
    data: conditions,
  });
};

// Find a condition by id
const findCondition = async (id: string) => {
  return await prisma.condition.findUnique({
    where: { id },
  });
};

// Find many conditions
const findManyConditions = async () => {
  return await prisma.condition.findMany();
};

// Update a condition
const updateCondition = async (id: string, condition: Condition) => {
  return await prisma.condition.update({
    where: { id },
    data: condition,
  });
};

// Delete a condition
const deleteCondition = async (id: string) => {
  return await prisma.condition.delete({
    where: { id },
  });
};

export {
  createCondition,
  createManyConditions,
  findCondition,
  findManyConditions,
  updateCondition,
  deleteCondition,
};
