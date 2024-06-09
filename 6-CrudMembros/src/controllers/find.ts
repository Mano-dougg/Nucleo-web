import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  log: ["query"],
});

export const findById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Falha ao importar usuário" });
  }
};

export const findByEmail = async (req: Request, res: Response) => {
  const userEmail = req.params.email;

  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "E-mail não encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Falha ao importar usuário", error);
    res.status(500).json({ error: "Falha ao importar usuário" });
  }
};

export const findByName = async (req: Request, res: Response) => {
  const userName = req.params.name;

  try {
    const users = await prismaClient.user.findMany({
      where: {
        name: userName,
      },
    });

    if (users.length === 0) {
      return res.status(404).json({ error: "Nome não encontrado" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Falha ao importar usuário", error);
    res.status(500).json({ error: "Falha ao importar usuário" });
  }
};

export const findAll = async (res: Response) => {
  try {
    const users = await prismaClient.user.findMany();
    if (users.length === 0) {
      return res.status(404).json({ error: "Nenhum usuário encontrado" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Falha ao importar usuário", error);
    res.status(500).json({ error: "Falha ao importar usuário" });
  }
};
