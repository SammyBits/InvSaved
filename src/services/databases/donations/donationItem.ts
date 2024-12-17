import { type DonationItem } from "@prisma/client";
import prisma from "../../../configs/prisma";

// Create a single donation item
const createDonationItem = async (donationItem: DonationItem) => {
  return await prisma.donationItem.create({
    data: donationItem,
  });
};

// Create multiple donation items
const createManyDonationItems = async (donationItems: DonationItem[]) => {
  return await prisma.donationItem.createMany({
    data: donationItems,
  });
};

// Find a donation item by id
const findDonationItem = async (id: string) => {
  return await prisma.donationItem.findUnique({
    where: { id },
  });
};

// Find many donation items
const findManyDonationItems = async () => {
  return await prisma.donationItem.findMany();
};

// Update a donation item
const updateDonationItem = async (id: string, donationItem: DonationItem) => {
  return await prisma.donationItem.update({
    where: { id },
    data: donationItem,
  });
};

// Delete a donation item
const deleteDonationItem = async (id: string) => {
  return await prisma.donationItem.delete({
    where: { id },
  });
};

export {
  createDonationItem,
  createManyDonationItems,
  findDonationItem,
  findManyDonationItems,
  updateDonationItem,
  deleteDonationItem,
};
