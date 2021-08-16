import { PrismaClient } from "@prisma/client";
import { Context } from "../types"

export const prisma = new PrismaClient()

export const createContext = (ctx: any): Context => {
  let userId: number
  try {
    userId = 1;
  } catch (e) {
    userId = -1
  }

  return {
    ...ctx,
    prisma,
    userId,
  }
};
