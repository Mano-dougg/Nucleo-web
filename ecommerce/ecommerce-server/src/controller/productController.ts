import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { errorResponse, NOT_FOUND_MESSAGE } from '../utils/errorResponse';

const prisma = new PrismaClient();

const PRODUCT_RELATED_FIELDS: Record<
  keyof Omit<Prisma.ProductInclude, '_count'>,
  boolean
> = {
  category: true,
  collection: true,
  tags: true,
  colors: true,
}

const findProduct = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
    include: PRODUCT_RELATED_FIELDS,
  });
  if (!product) {
    throw new Error(NOT_FOUND_MESSAGE(id));
  }
  return product;
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const foundProduct = await findProduct(id);
    return res.status(StatusCodes.OK).json(foundProduct);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.NOT_FOUND, err);
  }
};

export const listProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await prisma.product.findMany({
      include: PRODUCT_RELATED_FIELDS,
    });
    return res.status(StatusCodes.OK).json(allProducts);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, err);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius nunc. Nulla facilisi';
  const previousPrice = 0;
  const inPromotion = false;
  const fitting = 'LOOSE';
  const style = 'CASUAL';
  const categoryId = 1;
  const collectionId = 1;

  console.log(
    'Creating product with body:'
  );
  console.table(req.body)

  const {
    title,
    currentPrice,
    image,
    tags,
    colors,
    sizes,
    quantity,
  } = req.body;

  try {
    const createdProduct = await prisma.product.create({
      data: {
        title,
        description,
        currentPrice,
        previousPrice,
        inPromotion,
        fitting,
        style,
        image,
        categoryId,
        collectionId,
        sizes,
        quantity,
        colors: colors ?? undefined,
        tags: tags ?? undefined,
      },
      include: PRODUCT_RELATED_FIELDS,
    });
    return res.status(StatusCodes.CREATED).json(createdProduct);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        const attribute = err.message?.slice(err.message.lastIndexOf(' ') + 1);
        return errorResponse(res, StatusCodes.CONFLICT, err, attribute);
      }
    }
    return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, err);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await findProduct(id);
    await prisma.product.delete({
      where: { id: Number(id) },
    });
    return res
      .status(StatusCodes.OK)
      .json({ message: `Product ${product.title} deleted` });
  } catch (error: any) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const {
    title,
    currentPrice,
    image,
    tags,
    colors,
    sizes,
    quantity,
  } = req.body;


  try {
    const product = await findProduct(id);
    console.log(
      `Updating product ${product.title} with body:`
    );
    console.table(req.body)
    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        title,
        currentPrice,
        image,
        sizes,
        quantity,
        colors: colors ?? undefined,
        tags: tags ?? undefined,
      },
      include: PRODUCT_RELATED_FIELDS,
    });
    return res.status(StatusCodes.OK).json(updatedProduct);
  } catch (error: any) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
};

// Filter routes

const getProductsByCategory = async (categoryIds: string[]) => {
  const categoryIdNumbers = categoryIds.map(id => Number(id));
  const foundProducts = await prisma.product.findMany({
    where: {
      OR: categoryIdNumbers.map(id => ({ categoryId: id })),
    },
    distinct: [ 'id' ],
    include: PRODUCT_RELATED_FIELDS,
  });
  return foundProducts;
}

export const filterProductsByQuery = async (req: Request, res: Response) => {
  const queryParams: {
    [ key: string ]: string | Array<string>
  } = {};

  // Iterate over all query parameters and add them to the queryParams object
  Object.entries(req.query).forEach(([ key, value ]) => {
    queryParams[ key ] = Array.isArray(value)
      ? value.filter(v => typeof v === 'string')
      : [ value ].filter(v => typeof v === 'string');
  });
  const filters = Object.entries(queryParams)
  console.log(filters);

  if (queryParams.category) {
    const foundProducts = await getProductsByCategory([ ...queryParams.category ]);
    return res.status(StatusCodes.OK).json(foundProducts);
  }
  return res.status(StatusCodes.OK).json([]);
};
