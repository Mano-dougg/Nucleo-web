import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  log: ["query"],
});

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const userId = parseInt(id);

    await prismaClient.user.delete({
      where: {
        id: userId,
      },
    });

    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};
