import { User } from "../../../prisma/generated/zod";
import { PrismaClient } from "@prisma/client";


export default class UsersService {
  constructor(
    private prisma = new PrismaClient()
  ) { }

  public async list() {
    const users: User[] = await this.prisma.user.findMany();
    return users;
  };

  public async getById(id: number) {
    const user: User | null = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  };

  public async create(userDdata: Omit<User, "id">) {
    const user: User = await this.prisma.user.create({
      data: userDdata,
    });
    return user;
  }

  public async delete(id: number) {
    const deletedUser = await this.prisma.user.delete({
      where: {
        id,
      },
    })
    return deletedUser;
  }
};
