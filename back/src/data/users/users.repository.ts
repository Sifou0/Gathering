import { PrismaClient } from "@prisma/client";
import { UserModel } from "../../domain/models/UserModel";
import { DataSource } from "../data.repository";
import { UserDto } from "../../domain/dto/UserDto";

export default class UsersRepository
  implements DataSource<UserModel, UserDto, number>
{
  private db;

  constructor() {
    this.db = new PrismaClient();
  }

  async create(t: UserModel): Promise<UserDto> {
    const res = await this.db.user.create({ data: t });
    this.db.$disconnect();
    return res;
  }

  async getAll(): Promise<UserDto[]> {
    const res = await this.db.user.findMany();
    this.db.$disconnect();
    return res;
  }
  async getOne(id: number): Promise<UserDto | null> {
    const res = await this.db.user.findUnique({
      where: {
        id: id,
      },
    });
    this.db.$disconnect();
    return res;
  }
  async deleteOne(id: number): Promise<void> {
    await this.db.user.delete({ where: { id } });
    this.db.$disconnect();
  }
  async updateOne(id: number, t: UserModel): Promise<UserDto> {
    const res = await this.db.user.update({ where: { id: id }, data: t });
    this.db.$disconnect();
    return res;
  }
}
