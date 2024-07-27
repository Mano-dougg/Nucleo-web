import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { errorResponse, NOT_FOUND_MESSAGE } from '../utils/errorResponse';

const prisma = new PrismaClient();

const TAG_RELATED_FIELDS = {
  products: true,
}

const findTag = async (id: string) => {
  const tag = await prisma.tag.findUnique({
    where: {
      id: Number(id),
    },
    include: TAG_RELATED_FIELDS,
  });
  if (!tag) {
    throw new Error(NOT_FOUND_MESSAGE(id));
  }
  return tag;
};

export const getTagById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const foundTag = await findTag(id);
    return res.status(StatusCodes.OK).json(foundTag);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.NOT_FOUND, err);
  }
};

export const listTags = async (req: Request, res: Response) => {
  try {
    const allTags = await prisma.tag.findMany({
      include: TAG_RELATED_FIELDS,
    });
    return res.status(StatusCodes.OK).json(allTags);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, err);
  }
};

export const createTag = async (req: Request, res: Response) => {
  console.log(
    'Creating tag with body:'
  );
  console.table(req.body)

  const {
    title,
    products,
  } = req.body;

  try {
    const createdTag = await prisma.tag.create({
      data: {
        title,
        products: {
          connect: products ? [ ...products ] : undefined,
        },
      },
      include: TAG_RELATED_FIELDS,
    });
    return res.status(StatusCodes.CREATED).json(createdTag);
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

export const deleteTag = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const tag = await findTag(id);
    await prisma.tag.delete({
      where: { id: Number(id) },
    });
    return res
      .status(StatusCodes.OK)
      .json({ message: `tag ${tag.title} deleted` });
  } catch (error: any) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
};

export const updateTag = async (req: Request, res: Response) => {
  const { id } = req.params;

  const {
    title,
  } = req.body;

  try {
    const tag = await findTag(id);
    console.log(
      `Updating tag ${tag.title} with body:`
    );
    console.table(req.body)
    const updatedTag = await prisma.tag.update({
      where: { id: Number(id) },
      data: {
        title,
      },
      include: TAG_RELATED_FIELDS,
    });
    return res.status(StatusCodes.OK).json(updatedTag);
  } catch (error: any) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
};
