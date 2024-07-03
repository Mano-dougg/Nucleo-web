import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const Sales = prisma.sales;

export const getStats = async (req: Request, res: Response) => {
  try {
    const people = await Sales.count({
      where: {
        deleted: {
          not: true
        }
      }
    });
    const breads = await Sales.aggregate({
      _sum: {
        breads_qt: true,
      },
    });
    const prices = await Sales.aggregate({
      _sum: {
        total_cost: true,
      },
    });

    const data = {
      total_people: people,
      total_breads: breads._sum.breads_qt || 0,
      total_cost: prices._sum.total_cost || 0
    };

    return res.json(data);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving data' });
  } finally {
    await prisma.$disconnect();
  }
};

export const getQueue = async (req: Request, res: Response) => {
  try {
    const data = await Sales.findMany({
      where: {
        deleted: {
          not: true
        }
      }
    });

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving data' });
  } finally {
    await prisma.$disconnect();
  }
};

export const getSales = async (req: Request, res: Response) => {
  try {
    const data = await Sales.findMany();

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving data' });
  } finally {
    await prisma.$disconnect();
  }
};

export const addSale = async (req: Request, res: Response) => {
  try {
    const { name, breads } = req.body;
    const cost = breads * 0.5;

    const data = {
      client_name: name,
      breads_qt: breads,
      total_cost: cost,
      deleted: false
    };

    const newSale = await Sales.create({ data });

    return res.json({
      message: 'Person added successfully',
      data: newSale
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while creating' });
  } finally {
    await prisma.$disconnect();
  }
};

export const removePerson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await Sales.update({
      where: { id: parseInt(id, 10) },
      data: { deleted: true }
    });

    return res.json({
      message: 'Person removed from queue',
      data
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while deleting' });
  } finally {
    await prisma.$disconnect();
  }
};
