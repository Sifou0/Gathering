import { PrismaClient } from "@prisma/client";

export class DataBase extends PrismaClient {
  constructor() {
    super();
  }
}
