import { type DonationHeader } from "@prisma/client";
import prisma from "../../../configs/prisma";

// Create a single donation header
const createDonationHeader = async (donationHeader: DonationHeader) => {
  return await prisma.donationHeader.create({
    data: donationHeader,
  });
};

// Create multiple donation headers
const createManyDonationHeaders = async (donationHeaders: DonationHeader[]) => {
  return await prisma.donationHeader.createMany({
    data: donationHeaders,
  });
};

// Find a donation header by id
const findDonationHeader = async (id: string) => {
  return await prisma.donationHeader.findUnique({
    where: { id },
  });
};

// Find many donation headers
const findManyDonationHeaders = async () => {
  return await prisma.donationHeader.findMany();
};

// Update a donation header
const updateDonationHeader = async (
  id: string,
  donationHeader: DonationHeader
) => {
  return await prisma.donationHeader.update({
    where: { id },
    data: donationHeader,
  });
};

// Delete a donation header
const deleteDonationHeader = async (id: string) => {
  return await prisma.donationHeader.delete({
    where: { id },
  });
};

export {
  createDonationHeader,
  createManyDonationHeaders,
  findDonationHeader,
  findManyDonationHeaders,
  updateDonationHeader,
  deleteDonationHeader,
};
