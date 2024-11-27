import 'server-only'

import { PrismaClient } from '@prisma/client'
//import "reflect-metadata"

const prisma = new PrismaClient(); // https://www.prisma.io/docs/orm/prisma-client

export default prisma;