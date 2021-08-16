import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express'
// import { IncomingMessage } from 'http'

export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  userId?: number;
}
