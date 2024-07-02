const prismaClient = require("@prisma/client")
const prisma = new prismaClient.PrismaClient();
const Sales = prisma.sales;

const getStats = async (req, res) => {
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
      total_breads: breads._sum.breads_qt,
      total_cost: prices._sum.total_cost
    }

    return res.json(data);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving data' });
  } finally {
    await prisma.$disconnect();
  }
}

const getQueue = async (req, res) => {
  try {
    const data = await Sales.findMany({
      where: {deleted: {
        not: true
      }}
    });

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving data' });
  } finally {
    await prisma.$disconnect();
  }
}

const getSales = async (req, res) => {
  try {
    const data = await Sales.findMany();

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving data' });
  } finally {
    await prisma.$disconnect();
  }
}

const addSale = async (req, res) => {
  try {
    const { name, breads } = req.body;
    const cost = breads * 0.5;
    
    const data = {
      client_name: name,
      breads_qt: breads,
      total_cost: cost,
      deleted: false
    }

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
}

const removePerson = async (req, res) => {
  try{
    const { id } = req.params;

    const data = await Sales.update({
      where: { id: parseInt(id, 10) },
      data: { deleted: true }
    })

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
}

module.exports = {
  getStats,
  getQueue,
  getSales,
  addSale,
  removePerson
};