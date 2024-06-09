import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";

export const prismaClient = new PrismaClient({
  log: ["query"],
});

export const update = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const { name, email, password, age, state, city } = req.body;

  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser && existingUser.id !== userId) {
      return res.status(400).json({ error: "E-mail já em uso" });
    }

    const updatedUser = await prismaClient.user.update({
      where: { id: userId },
      data: {
        name: name,
        email: email,
        password: hashSync(password, 10),
        age: age,
        state: state,
        city: city,
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Erro ao atualizar usuário", error);
    res.status(500).json({ error: "Falha ao atualizar usuário" });
  }
};
