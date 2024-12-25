import { PrismaClient } from "@prisma/client";


export const db = globalThis.prisma || new PrismaClient();


if(process.env.NODE_ENV !== "production") globalThis.prisma = db

// globalThis.prisma: This global variable ensures that the Prisma client instance is reused across hot relods during development. Without this, each time your application.

// reloads, a new instace of the Prisma client will be created. Potentially leading to connection issues.