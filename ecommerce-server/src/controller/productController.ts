import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
// import { Product } from '../../prisma/generated/zod';

const prisma = new PrismaClient();

const NOT_FOUND_MESSAGE = (fieldName: string, field: string) =>
  `No product found with ${fieldName} ${field}`;

const randomSku = Math.random().toString(36).substring(7);

const findProduct = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      category: true,
      collection: true,
      productItems: true,
    },
  });
  if (!product) {
    throw new Error(NOT_FOUND_MESSAGE('id', id));
  }
  return product;
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id)
    return errorResponse(res, StatusCodes.BAD_REQUEST, {
      message: 'Id is required',
    });

  try {
    const foundProduct = await findProduct(id);
    return res.status(StatusCodes.OK).json(foundProduct);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.NOT_FOUND, err);
  }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;

  if (!category)
    return errorResponse(res, StatusCodes.BAD_REQUEST, {
      message: 'Id is required',
    });

  try {
    const foundProduct = await prisma.product.findMany({
      where: {
        category: {
          name: category,
        },
      },
      include: {
        category: true,
        collection: true,
        productItems: true,
      },
    });
    return res.status(StatusCodes.OK).json(foundProduct);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.NOT_FOUND, err);
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
    colorId,
    size,
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
        productItems: {
          create: {
            colorId,
            size,
            quantity,
            image,
            sku: randomSku,
          },
        },
        tags: {
          connect: [ ...tags ],
        }
      }
    });
    return res.status(StatusCodes.CREATED).json(createdProduct);
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

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return errorResponse(res, StatusCodes.BAD_REQUEST, 'Id is required');

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

// export const updateProduct = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   if (!id) return errorResponse(res, StatusCodes.BAD_REQUEST, 'Id is required');

//   const {
//     title,
//     currentPrice,
//     image,
//     tags,
//     colorId,
//     size,
//     quantity,
//   } = req.body;


//   try {
//     const product = await findProduct(id);
//     console.log(
//       `Updating product ${product.title} with body:`
//     );
//     console.table(req.body)
//     const updatedProduct = await prisma.product.update({
//       where: { id: Number(id) },
//       data: {
//         title,
//         currentPrice,
//         image,
//         productItems: {
//           upsert: {
//             where: {
//               id: '', // Replace with the actual ID of the product item
//               sku: '', // Replace with the actual SKU of the product item
//             },
//             update: { quantity },
//           },
//         },
//         tags: {
//           connect: [ ...tags ],
//         }
//       }
//     });
//     return res.status(StatusCodes.OK).json({ ...updatedProduct });
//   } catch (error: any) {
//     return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
//   }
// };
