import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const prisma = new PrismaClient();

const CATEGORY_RELATED_FIELDS = {
  products: true,
}

const NOT_FOUND_MESSAGE = (fieldName: string, field: string) =>
  `No category found with ${fieldName} ${field}`;

const findCategory = async (id: string) => {
  const category = await prisma.category.findUnique({
    where: {
      id: Number(id),
    },
    include: CATEGORY_RELATED_FIELDS,
  });
  if (!category) {
    throw new Error(NOT_FOUND_MESSAGE('id', id));
  }
  return category;
};

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id)
    return errorResponse(res, StatusCodes.BAD_REQUEST, {
      message: 'Id is required',
    });

  try {
    const foundCategory = await findCategory(id);
    return res.status(StatusCodes.OK).json(foundCategory);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.NOT_FOUND, err);
  }
};

export const listCategories = async (req: Request, res: Response) => {
  try {
    const allcategorys = await prisma.category.findMany({
      include: CATEGORY_RELATED_FIELDS,
    });
    return res.status(StatusCodes.OK).json(allcategorys);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, err);
  }
};

const errorResponse = (
  res: Response,
  responseCode: StatusCodes,
  err: any,
  attribute?: string
) => {
  switch (responseCode) {
    case StatusCodes.BAD_REQUEST:
      return res.status(responseCode).json({ error: err.message });
    case StatusCodes.NOT_FOUND:
      return res.status(responseCode).json({ error: err.message });
    case StatusCodes.INTERNAL_SERVER_ERROR:
      return res.status(responseCode).json({ error: 'Internal server error' });
    case StatusCodes.CONFLICT:
      return res
        .status(responseCode)
        .json({
          error: `Unique attribute ${attribute ?? 'provided'} already taken`,
        });
    default:
      break;
  }
};

export const createCategory = async (req: Request, res: Response) => {
  console.log(
    'Creating category with body:'
  );
  console.table(req.body)

  const {
    name,
    image,
    products,
  } = req.body;

  try {
    const createdcategory = await prisma.category.create({
      data: {
        name,
        image,
        products: {
          connect: products ? [ ...products ] : undefined,
        },
      },
      include: CATEGORY_RELATED_FIELDS,
    });
    return res.status(StatusCodes.CREATED).json(createdcategory);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        const attribute = err.message?.slice(err.message.lastIndexOf(' ') + 1);
        return errorResponse(res, StatusCodes.CONFLICT, err, attribute);
      }
      return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, err);
    }
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id)
    return errorResponse(res, StatusCodes.BAD_REQUEST, {
      message: 'Id is required',
    });

  try {
    const category = await findCategory(id);
    await prisma.category.delete({
      where: { id: Number(id) },
    });
    return res
      .status(StatusCodes.OK)
      .json({ message: `Category ${category.name} deleted` });
  } catch (error: any) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id)
    return errorResponse(res, StatusCodes.BAD_REQUEST, {
      message: 'Id is required',
    });

  const {
    name,
    image
  } = req.body;


  try {
    const category = await findCategory(id);
    console.log(
      `Updating category ${category.name} with body:`
    );
    console.table(req.body)
    const updatedcategory = await prisma.category.update({
      where: { id: Number(id) },
      data: {
        image,
        name,
      },
      include: CATEGORY_RELATED_FIELDS,
    });
    return res.status(StatusCodes.OK).json(updatedcategory);
  } catch (error: any) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
};
