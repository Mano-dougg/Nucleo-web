import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','password','role']);

export const TagScalarFieldEnumSchema = z.enum(['id','title']);

export const ProductScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','title','description','currentPrice','previousPrice','inPromotion','fitting','style','image','categoryId','collectionId']);

export const ProductItemScalarFieldEnumSchema = z.enum(['id','sku','quantity','size','image','productId','colorId']);

export const ColorScalarFieldEnumSchema = z.enum(['id','name','reference']);

export const CollectionScalarFieldEnumSchema = z.enum(['id','name','image']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','image']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const RoleSchema = z.enum(['USER','ADMIN']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export const FittingSchema = z.enum(['OVERSIZE','SKINNY','LOOSE','SLIMFIT']);

export type FittingType = `${z.infer<typeof FittingSchema>}`

export const StyleSchema = z.enum(['CASUAL','STREET','SENSUAL','SOCIAL']);

export type StyleType = `${z.infer<typeof StyleSchema>}`

export const SizeSchema = z.enum(['P','M','G','GG']);

export type SizeType = `${z.infer<typeof SizeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.number().int(),
  email: z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  password: z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.number().int(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// TAG PARTIAL SCHEMA
/////////////////////////////////////////

export const TagPartialSchema = TagSchema.partial()

export type TagPartial = z.infer<typeof TagPartialSchema>

// TAG RELATION SCHEMA
//------------------------------------------------------

export type TagRelations = {
  products: ProductWithRelations[];
};

export type TagWithRelations = z.infer<typeof TagSchema> & TagRelations

export const TagWithRelationsSchema: z.ZodType<TagWithRelations> = TagSchema.merge(z.object({
  products: z.lazy(() => ProductWithRelationsSchema).array(),
}))

// TAG PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type TagPartialRelations = {
  products?: ProductPartialWithRelations[];
};

export type TagPartialWithRelations = z.infer<typeof TagPartialSchema> & TagPartialRelations

export const TagPartialWithRelationsSchema: z.ZodType<TagPartialWithRelations> = TagPartialSchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
})).partial()

export type TagWithPartialRelations = z.infer<typeof TagSchema> & TagPartialRelations

export const TagWithPartialRelationsSchema: z.ZodType<TagWithPartialRelations> = TagSchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  fitting: FittingSchema,
  style: StyleSchema,
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  image: z.string().url(),
  categoryId: z.number().int(),
  collectionId: z.number().int(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// PRODUCT PARTIAL SCHEMA
/////////////////////////////////////////

export const ProductPartialSchema = ProductSchema.partial()

export type ProductPartial = z.infer<typeof ProductPartialSchema>

// PRODUCT RELATION SCHEMA
//------------------------------------------------------

export type ProductRelations = {
  category: CategoryWithRelations;
  collection: CollectionWithRelations;
  tags: TagWithRelations[];
  productItems: ProductItemWithRelations[];
};

export type ProductWithRelations = z.infer<typeof ProductSchema> & ProductRelations

export const ProductWithRelationsSchema: z.ZodType<ProductWithRelations> = ProductSchema.merge(z.object({
  category: z.lazy(() => CategoryWithRelationsSchema),
  collection: z.lazy(() => CollectionWithRelationsSchema),
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  productItems: z.lazy(() => ProductItemWithRelationsSchema).array(),
}))

// PRODUCT PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ProductPartialRelations = {
  category?: CategoryPartialWithRelations;
  collection?: CollectionPartialWithRelations;
  tags?: TagPartialWithRelations[];
  productItems?: ProductItemPartialWithRelations[];
};

export type ProductPartialWithRelations = z.infer<typeof ProductPartialSchema> & ProductPartialRelations

export const ProductPartialWithRelationsSchema: z.ZodType<ProductPartialWithRelations> = ProductPartialSchema.merge(z.object({
  category: z.lazy(() => CategoryPartialWithRelationsSchema),
  collection: z.lazy(() => CollectionPartialWithRelationsSchema),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  productItems: z.lazy(() => ProductItemPartialWithRelationsSchema).array(),
})).partial()

export type ProductWithPartialRelations = z.infer<typeof ProductSchema> & ProductPartialRelations

export const ProductWithPartialRelationsSchema: z.ZodType<ProductWithPartialRelations> = ProductSchema.merge(z.object({
  category: z.lazy(() => CategoryPartialWithRelationsSchema),
  collection: z.lazy(() => CollectionPartialWithRelationsSchema),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  productItems: z.lazy(() => ProductItemPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// PRODUCT ITEM SCHEMA
/////////////////////////////////////////

export const ProductItemSchema = z.object({
  size: SizeSchema,
  id: z.string().uuid(),
  sku: z.string(),
  /**
   * zod.number.int().nonnegative({ message: "Minimum 0" })
   */
  quantity: z.number().int(),
  image: z.string().url(),
  productId: z.number().int(),
  colorId: z.number().int().nullable(),
})

export type ProductItem = z.infer<typeof ProductItemSchema>

/////////////////////////////////////////
// PRODUCT ITEM PARTIAL SCHEMA
/////////////////////////////////////////

export const ProductItemPartialSchema = ProductItemSchema.partial()

export type ProductItemPartial = z.infer<typeof ProductItemPartialSchema>

// PRODUCT ITEM RELATION SCHEMA
//------------------------------------------------------

export type ProductItemRelations = {
  product: ProductWithRelations;
  color?: ColorWithRelations | null;
};

export type ProductItemWithRelations = z.infer<typeof ProductItemSchema> & ProductItemRelations

export const ProductItemWithRelationsSchema: z.ZodType<ProductItemWithRelations> = ProductItemSchema.merge(z.object({
  product: z.lazy(() => ProductWithRelationsSchema),
  color: z.lazy(() => ColorWithRelationsSchema).nullable(),
}))

// PRODUCT ITEM PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ProductItemPartialRelations = {
  product?: ProductPartialWithRelations;
  color?: ColorPartialWithRelations | null;
};

export type ProductItemPartialWithRelations = z.infer<typeof ProductItemPartialSchema> & ProductItemPartialRelations

export const ProductItemPartialWithRelationsSchema: z.ZodType<ProductItemPartialWithRelations> = ProductItemPartialSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema),
  color: z.lazy(() => ColorPartialWithRelationsSchema).nullable(),
})).partial()

export type ProductItemWithPartialRelations = z.infer<typeof ProductItemSchema> & ProductItemPartialRelations

export const ProductItemWithPartialRelationsSchema: z.ZodType<ProductItemWithPartialRelations> = ProductItemSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema),
  color: z.lazy(() => ColorPartialWithRelationsSchema).nullable(),
}).partial())

/////////////////////////////////////////
// COLOR SCHEMA
/////////////////////////////////////////

export const ColorSchema = z.object({
  id: z.number().int(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string(),
})

export type Color = z.infer<typeof ColorSchema>

/////////////////////////////////////////
// COLOR PARTIAL SCHEMA
/////////////////////////////////////////

export const ColorPartialSchema = ColorSchema.partial()

export type ColorPartial = z.infer<typeof ColorPartialSchema>

// COLOR RELATION SCHEMA
//------------------------------------------------------

export type ColorRelations = {
  products: ProductItemWithRelations[];
};

export type ColorWithRelations = z.infer<typeof ColorSchema> & ColorRelations

export const ColorWithRelationsSchema: z.ZodType<ColorWithRelations> = ColorSchema.merge(z.object({
  products: z.lazy(() => ProductItemWithRelationsSchema).array(),
}))

// COLOR PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ColorPartialRelations = {
  products?: ProductItemPartialWithRelations[];
};

export type ColorPartialWithRelations = z.infer<typeof ColorPartialSchema> & ColorPartialRelations

export const ColorPartialWithRelationsSchema: z.ZodType<ColorPartialWithRelations> = ColorPartialSchema.merge(z.object({
  products: z.lazy(() => ProductItemPartialWithRelationsSchema).array(),
})).partial()

export type ColorWithPartialRelations = z.infer<typeof ColorSchema> & ColorPartialRelations

export const ColorWithPartialRelationsSchema: z.ZodType<ColorWithPartialRelations> = ColorSchema.merge(z.object({
  products: z.lazy(() => ProductItemPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// COLLECTION SCHEMA
/////////////////////////////////////////

export const CollectionSchema = z.object({
  id: z.number().int(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string().url(),
})

export type Collection = z.infer<typeof CollectionSchema>

/////////////////////////////////////////
// COLLECTION PARTIAL SCHEMA
/////////////////////////////////////////

export const CollectionPartialSchema = CollectionSchema.partial()

export type CollectionPartial = z.infer<typeof CollectionPartialSchema>

// COLLECTION RELATION SCHEMA
//------------------------------------------------------

export type CollectionRelations = {
  products: ProductWithRelations[];
};

export type CollectionWithRelations = z.infer<typeof CollectionSchema> & CollectionRelations

export const CollectionWithRelationsSchema: z.ZodType<CollectionWithRelations> = CollectionSchema.merge(z.object({
  products: z.lazy(() => ProductWithRelationsSchema).array(),
}))

// COLLECTION PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type CollectionPartialRelations = {
  products?: ProductPartialWithRelations[];
};

export type CollectionPartialWithRelations = z.infer<typeof CollectionPartialSchema> & CollectionPartialRelations

export const CollectionPartialWithRelationsSchema: z.ZodType<CollectionPartialWithRelations> = CollectionPartialSchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
})).partial()

export type CollectionWithPartialRelations = z.infer<typeof CollectionSchema> & CollectionPartialRelations

export const CollectionWithPartialRelationsSchema: z.ZodType<CollectionWithPartialRelations> = CollectionSchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// CATEGORY PARTIAL SCHEMA
/////////////////////////////////////////

export const CategoryPartialSchema = CategorySchema.partial()

export type CategoryPartial = z.infer<typeof CategoryPartialSchema>

// CATEGORY RELATION SCHEMA
//------------------------------------------------------

export type CategoryRelations = {
  products: ProductWithRelations[];
};

export type CategoryWithRelations = z.infer<typeof CategorySchema> & CategoryRelations

export const CategoryWithRelationsSchema: z.ZodType<CategoryWithRelations> = CategorySchema.merge(z.object({
  products: z.lazy(() => ProductWithRelationsSchema).array(),
}))

// CATEGORY PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type CategoryPartialRelations = {
  products?: ProductPartialWithRelations[];
};

export type CategoryPartialWithRelations = z.infer<typeof CategoryPartialSchema> & CategoryPartialRelations

export const CategoryPartialWithRelationsSchema: z.ZodType<CategoryPartialWithRelations> = CategoryPartialSchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
})).partial()

export type CategoryWithPartialRelations = z.infer<typeof CategorySchema> & CategoryPartialRelations

export const CategoryWithPartialRelationsSchema: z.ZodType<CategoryWithPartialRelations> = CategorySchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
}).strict()

// TAG
//------------------------------------------------------

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TagArgsSchema: z.ZodType<Prisma.TagDefaultArgs> = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();

export const TagCountOutputTypeArgsSchema: z.ZodType<Prisma.TagCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  collection: z.union([z.boolean(),z.lazy(() => CollectionArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  productItems: z.union([z.boolean(),z.lazy(() => ProductItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
  productItems: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  currentPrice: z.boolean().optional(),
  previousPrice: z.boolean().optional(),
  inPromotion: z.boolean().optional(),
  fitting: z.boolean().optional(),
  style: z.boolean().optional(),
  image: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  collectionId: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  collection: z.union([z.boolean(),z.lazy(() => CollectionArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  productItems: z.union([z.boolean(),z.lazy(() => ProductItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT ITEM
//------------------------------------------------------

export const ProductItemIncludeSchema: z.ZodType<Prisma.ProductItemInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  color: z.union([z.boolean(),z.lazy(() => ColorArgsSchema)]).optional(),
}).strict()

export const ProductItemArgsSchema: z.ZodType<Prisma.ProductItemDefaultArgs> = z.object({
  select: z.lazy(() => ProductItemSelectSchema).optional(),
  include: z.lazy(() => ProductItemIncludeSchema).optional(),
}).strict();

export const ProductItemSelectSchema: z.ZodType<Prisma.ProductItemSelect> = z.object({
  id: z.boolean().optional(),
  sku: z.boolean().optional(),
  quantity: z.boolean().optional(),
  size: z.boolean().optional(),
  image: z.boolean().optional(),
  productId: z.boolean().optional(),
  colorId: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  color: z.union([z.boolean(),z.lazy(() => ColorArgsSchema)]).optional(),
}).strict()

// COLOR
//------------------------------------------------------

export const ColorIncludeSchema: z.ZodType<Prisma.ColorInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ColorArgsSchema: z.ZodType<Prisma.ColorDefaultArgs> = z.object({
  select: z.lazy(() => ColorSelectSchema).optional(),
  include: z.lazy(() => ColorIncludeSchema).optional(),
}).strict();

export const ColorCountOutputTypeArgsSchema: z.ZodType<Prisma.ColorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ColorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ColorCountOutputTypeSelectSchema: z.ZodType<Prisma.ColorCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const ColorSelectSchema: z.ZodType<Prisma.ColorSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  reference: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COLLECTION
//------------------------------------------------------

export const CollectionIncludeSchema: z.ZodType<Prisma.CollectionInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CollectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CollectionArgsSchema: z.ZodType<Prisma.CollectionDefaultArgs> = z.object({
  select: z.lazy(() => CollectionSelectSchema).optional(),
  include: z.lazy(() => CollectionIncludeSchema).optional(),
}).strict();

export const CollectionCountOutputTypeArgsSchema: z.ZodType<Prisma.CollectionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CollectionCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CollectionCountOutputTypeSelectSchema: z.ZodType<Prisma.CollectionCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const CollectionSelectSchema: z.ZodType<Prisma.CollectionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  image: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CollectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CATEGORY
//------------------------------------------------------

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryDefaultArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export const CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  image: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    email: z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" })
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    email: z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  email: z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }).optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }) ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }) ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
}).strict();

export const TagWhereInputSchema: z.ZodType<Prisma.TagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const TagOrderByWithRelationInputSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TagWhereUniqueInputSchema: z.ZodType<Prisma.TagWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" })
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }).optional(),
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const TagOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TagAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TagSumOrderByAggregateInputSchema).optional()
}).strict();

export const TagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagScalarWhereWithAggregatesInputSchema),z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagScalarWhereWithAggregatesInputSchema),z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currentPrice: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  previousPrice: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inPromotion: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  fitting: z.union([ z.lazy(() => EnumFittingFilterSchema),z.lazy(() => FittingSchema) ]).optional(),
  style: z.union([ z.lazy(() => EnumStyleFilterSchema),z.lazy(() => StyleSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  collectionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  collection: z.union([ z.lazy(() => CollectionRelationFilterSchema),z.lazy(() => CollectionWhereInputSchema) ]).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  productItems: z.lazy(() => ProductItemListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  inPromotion: z.lazy(() => SortOrderSchema).optional(),
  fitting: z.lazy(() => SortOrderSchema).optional(),
  style: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  collection: z.lazy(() => CollectionOrderByWithRelationInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  productItems: z.lazy(() => ProductItemOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }) ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }) ]).optional(),
  currentPrice: z.union([ z.lazy(() => IntFilterSchema),z.number().int().nonnegative({ message: "Minimum 0" }) ]).optional(),
  previousPrice: z.union([ z.lazy(() => IntFilterSchema),z.number().int().nonnegative({ message: "Minimum 0" }) ]).optional(),
  inPromotion: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  fitting: z.union([ z.lazy(() => EnumFittingFilterSchema),z.lazy(() => FittingSchema) ]).optional(),
  style: z.union([ z.lazy(() => EnumStyleFilterSchema),z.lazy(() => StyleSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string().url() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  collectionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  collection: z.union([ z.lazy(() => CollectionRelationFilterSchema),z.lazy(() => CollectionWhereInputSchema) ]).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  productItems: z.lazy(() => ProductItemListRelationFilterSchema).optional()
}).strict());

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  inPromotion: z.lazy(() => SortOrderSchema).optional(),
  fitting: z.lazy(() => SortOrderSchema).optional(),
  style: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  currentPrice: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  previousPrice: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inPromotion: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  fitting: z.union([ z.lazy(() => EnumFittingWithAggregatesFilterSchema),z.lazy(() => FittingSchema) ]).optional(),
  style: z.union([ z.lazy(() => EnumStyleWithAggregatesFilterSchema),z.lazy(() => StyleSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  collectionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ProductItemWhereInputSchema: z.ZodType<Prisma.ProductItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductItemWhereInputSchema),z.lazy(() => ProductItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductItemWhereInputSchema),z.lazy(() => ProductItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sku: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  size: z.union([ z.lazy(() => EnumSizeFilterSchema),z.lazy(() => SizeSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  colorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => ColorNullableRelationFilterSchema),z.lazy(() => ColorWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ProductItemOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductItemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  color: z.lazy(() => ColorOrderByWithRelationInputSchema).optional()
}).strict();

export const ProductItemWhereUniqueInputSchema: z.ZodType<Prisma.ProductItemWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    sku: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    sku: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  sku: z.string().optional(),
  AND: z.union([ z.lazy(() => ProductItemWhereInputSchema),z.lazy(() => ProductItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductItemWhereInputSchema),z.lazy(() => ProductItemWhereInputSchema).array() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  size: z.union([ z.lazy(() => EnumSizeFilterSchema),z.lazy(() => SizeSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string().url() ]).optional(),
  productId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  colorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => ColorNullableRelationFilterSchema),z.lazy(() => ColorWhereInputSchema) ]).optional().nullable(),
}).strict());

export const ProductItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductItemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ProductItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductItemSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductItemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductItemScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductItemScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sku: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  size: z.union([ z.lazy(() => EnumSizeWithAggregatesFilterSchema),z.lazy(() => SizeSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  colorId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const ColorWhereInputSchema: z.ZodType<Prisma.ColorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColorWhereInputSchema),z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorWhereInputSchema),z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reference: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductItemListRelationFilterSchema).optional()
}).strict();

export const ColorOrderByWithRelationInputSchema: z.ZodType<Prisma.ColorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductItemOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ColorWhereUniqueInputSchema: z.ZodType<Prisma.ColorWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" })
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }).optional(),
  AND: z.union([ z.lazy(() => ColorWhereInputSchema),z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorWhereInputSchema),z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  reference: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductItemListRelationFilterSchema).optional()
}).strict());

export const ColorOrderByWithAggregationInputSchema: z.ZodType<Prisma.ColorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ColorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ColorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ColorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ColorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ColorSumOrderByAggregateInputSchema).optional()
}).strict();

export const ColorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ColorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ColorScalarWhereWithAggregatesInputSchema),z.lazy(() => ColorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorScalarWhereWithAggregatesInputSchema),z.lazy(() => ColorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  reference: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CollectionWhereInputSchema: z.ZodType<Prisma.CollectionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CollectionWhereInputSchema),z.lazy(() => CollectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollectionWhereInputSchema),z.lazy(() => CollectionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const CollectionOrderByWithRelationInputSchema: z.ZodType<Prisma.CollectionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CollectionWhereUniqueInputSchema: z.ZodType<Prisma.CollectionWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" })
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }).optional(),
  AND: z.union([ z.lazy(() => CollectionWhereInputSchema),z.lazy(() => CollectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollectionWhereInputSchema),z.lazy(() => CollectionWhereInputSchema).array() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string().url() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const CollectionOrderByWithAggregationInputSchema: z.ZodType<Prisma.CollectionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CollectionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CollectionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CollectionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CollectionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CollectionSumOrderByAggregateInputSchema).optional()
}).strict();

export const CollectionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CollectionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema),z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema),z.lazy(() => CollectionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CategoryWhereInputSchema: z.ZodType<Prisma.CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" })
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }).optional(),
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CategorySumOrderByAggregateInputSchema).optional()
}).strict();

export const CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  email: z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  password: z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),
  role: z.lazy(() => RoleSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  password: z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),
  role: z.lazy(() => RoleSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  email: z.union([ z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  password: z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),
  role: z.lazy(() => RoleSchema).optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  email: z.union([ z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagCreateInputSchema: z.ZodType<Prisma.TagCreateInput> = z.object({
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  products: z.lazy(() => ProductCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();

export const TagUncheckedCreateInputSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();

export const TagUpdateInputSchema: z.ZodType<Prisma.TagUpdateInput> = z.object({
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();

export const TagUncheckedUpdateInputSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();

export const TagCreateManyInputSchema: z.ZodType<Prisma.TagCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" })
}).strict();

export const TagUpdateManyMutationInputSchema: z.ZodType<Prisma.TagUpdateManyMutationInput> = z.object({
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutProductsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductsInputSchema).optional(),
  productItems: z.lazy(() => ProductItemCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  categoryId: z.number().int(),
  collectionId: z.number().int(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutProductsNestedInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  categoryId: z.number().int(),
  collectionId: z.number().int()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductItemCreateInputSchema: z.ZodType<Prisma.ProductItemCreateInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  product: z.lazy(() => ProductCreateNestedOneWithoutProductItemsInputSchema),
  color: z.lazy(() => ColorCreateNestedOneWithoutProductsInputSchema).optional()
}).strict();

export const ProductItemUncheckedCreateInputSchema: z.ZodType<Prisma.ProductItemUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  productId: z.number().int(),
  colorId: z.number().int().optional().nullable()
}).strict();

export const ProductItemUpdateInputSchema: z.ZodType<Prisma.ProductItemUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutProductItemsNestedInputSchema).optional(),
  color: z.lazy(() => ColorUpdateOneWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductItemUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductItemUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductItemCreateManyInputSchema: z.ZodType<Prisma.ProductItemCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  productId: z.number().int(),
  colorId: z.number().int().optional().nullable()
}).strict();

export const ProductItemUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductItemUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductItemUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductItemUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ColorCreateInputSchema: z.ZodType<Prisma.ColorCreateInput> = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string(),
  products: z.lazy(() => ProductItemCreateNestedManyWithoutColorInputSchema).optional()
}).strict();

export const ColorUncheckedCreateInputSchema: z.ZodType<Prisma.ColorUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string(),
  products: z.lazy(() => ProductItemUncheckedCreateNestedManyWithoutColorInputSchema).optional()
}).strict();

export const ColorUpdateInputSchema: z.ZodType<Prisma.ColorUpdateInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductItemUpdateManyWithoutColorNestedInputSchema).optional()
}).strict();

export const ColorUncheckedUpdateInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductItemUncheckedUpdateManyWithoutColorNestedInputSchema).optional()
}).strict();

export const ColorCreateManyInputSchema: z.ZodType<Prisma.ColorCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string()
}).strict();

export const ColorUpdateManyMutationInputSchema: z.ZodType<Prisma.ColorUpdateManyMutationInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ColorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollectionCreateInputSchema: z.ZodType<Prisma.CollectionCreateInput> = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string().url(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionUncheckedCreateInputSchema: z.ZodType<Prisma.CollectionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string().url(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCollectionInputSchema).optional()
}).strict();

export const CollectionUpdateInputSchema: z.ZodType<Prisma.CollectionUpdateInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCollectionNestedInputSchema).optional()
}).strict();

export const CollectionUncheckedUpdateInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCollectionNestedInputSchema).optional()
}).strict();

export const CollectionCreateManyInputSchema: z.ZodType<Prisma.CollectionCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string().url()
}).strict();

export const CollectionUpdateManyMutationInputSchema: z.ZodType<Prisma.CollectionUpdateManyMutationInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollectionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string()
}).strict();

export const CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumRoleFilterSchema: z.ZodType<Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.object({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagCountOrderByAggregateInputSchema: z.ZodType<Prisma.TagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TagAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagSumOrderByAggregateInputSchema: z.ZodType<Prisma.TagSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const EnumFittingFilterSchema: z.ZodType<Prisma.EnumFittingFilter> = z.object({
  equals: z.lazy(() => FittingSchema).optional(),
  in: z.lazy(() => FittingSchema).array().optional(),
  notIn: z.lazy(() => FittingSchema).array().optional(),
  not: z.union([ z.lazy(() => FittingSchema),z.lazy(() => NestedEnumFittingFilterSchema) ]).optional(),
}).strict();

export const EnumStyleFilterSchema: z.ZodType<Prisma.EnumStyleFilter> = z.object({
  equals: z.lazy(() => StyleSchema).optional(),
  in: z.lazy(() => StyleSchema).array().optional(),
  notIn: z.lazy(() => StyleSchema).array().optional(),
  not: z.union([ z.lazy(() => StyleSchema),z.lazy(() => NestedEnumStyleFilterSchema) ]).optional(),
}).strict();

export const CategoryRelationFilterSchema: z.ZodType<Prisma.CategoryRelationFilter> = z.object({
  is: z.lazy(() => CategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const CollectionRelationFilterSchema: z.ZodType<Prisma.CollectionRelationFilter> = z.object({
  is: z.lazy(() => CollectionWhereInputSchema).optional(),
  isNot: z.lazy(() => CollectionWhereInputSchema).optional()
}).strict();

export const TagListRelationFilterSchema: z.ZodType<Prisma.TagListRelationFilter> = z.object({
  every: z.lazy(() => TagWhereInputSchema).optional(),
  some: z.lazy(() => TagWhereInputSchema).optional(),
  none: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export const ProductItemListRelationFilterSchema: z.ZodType<Prisma.ProductItemListRelationFilter> = z.object({
  every: z.lazy(() => ProductItemWhereInputSchema).optional(),
  some: z.lazy(() => ProductItemWhereInputSchema).optional(),
  none: z.lazy(() => ProductItemWhereInputSchema).optional()
}).strict();

export const TagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductItemOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  inPromotion: z.lazy(() => SortOrderSchema).optional(),
  fitting: z.lazy(() => SortOrderSchema).optional(),
  style: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  inPromotion: z.lazy(() => SortOrderSchema).optional(),
  fitting: z.lazy(() => SortOrderSchema).optional(),
  style: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  inPromotion: z.lazy(() => SortOrderSchema).optional(),
  fitting: z.lazy(() => SortOrderSchema).optional(),
  style: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const EnumFittingWithAggregatesFilterSchema: z.ZodType<Prisma.EnumFittingWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FittingSchema).optional(),
  in: z.lazy(() => FittingSchema).array().optional(),
  notIn: z.lazy(() => FittingSchema).array().optional(),
  not: z.union([ z.lazy(() => FittingSchema),z.lazy(() => NestedEnumFittingWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFittingFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFittingFilterSchema).optional()
}).strict();

export const EnumStyleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumStyleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => StyleSchema).optional(),
  in: z.lazy(() => StyleSchema).array().optional(),
  notIn: z.lazy(() => StyleSchema).array().optional(),
  not: z.union([ z.lazy(() => StyleSchema),z.lazy(() => NestedEnumStyleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumStyleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumStyleFilterSchema).optional()
}).strict();

export const EnumSizeFilterSchema: z.ZodType<Prisma.EnumSizeFilter> = z.object({
  equals: z.lazy(() => SizeSchema).optional(),
  in: z.lazy(() => SizeSchema).array().optional(),
  notIn: z.lazy(() => SizeSchema).array().optional(),
  not: z.union([ z.lazy(() => SizeSchema),z.lazy(() => NestedEnumSizeFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ProductRelationFilterSchema: z.ZodType<Prisma.ProductRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ColorNullableRelationFilterSchema: z.ZodType<Prisma.ColorNullableRelationFilter> = z.object({
  is: z.lazy(() => ColorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ColorWhereInputSchema).optional().nullable()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ProductItemCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductItemCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductItemAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductItemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductItemMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductItemMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductItemMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sku: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductItemSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumSizeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSizeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SizeSchema).optional(),
  in: z.lazy(() => SizeSchema).array().optional(),
  notIn: z.lazy(() => SizeSchema).array().optional(),
  not: z.union([ z.lazy(() => SizeSchema),z.lazy(() => NestedEnumSizeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSizeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSizeFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const ColorCountOrderByAggregateInputSchema: z.ZodType<Prisma.ColorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ColorAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ColorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColorMinOrderByAggregateInputSchema: z.ZodType<Prisma.ColorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColorSumOrderByAggregateInputSchema: z.ZodType<Prisma.ColorSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionCountOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionMinOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CollectionSumOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.CategorySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ProductCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutTagsInputSchema),z.lazy(() => ProductCreateWithoutTagsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutTagsInputSchema),z.lazy(() => ProductCreateWithoutTagsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutTagsInputSchema),z.lazy(() => ProductCreateWithoutTagsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutTagsInputSchema),z.lazy(() => ProductCreateWithoutTagsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutTagsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export const CollectionCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.CollectionCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutProductsInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CollectionCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => CollectionWhereUniqueInputSchema).optional()
}).strict();

export const TagCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProductsInputSchema),z.lazy(() => TagCreateWithoutProductsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductItemCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductItemCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ProductItemCreateWithoutProductInputSchema),z.lazy(() => ProductItemCreateWithoutProductInputSchema).array(),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => ProductItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductItemCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProductsInputSchema),z.lazy(() => TagCreateWithoutProductsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductItemUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductItemUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ProductItemCreateWithoutProductInputSchema),z.lazy(() => ProductItemCreateWithoutProductInputSchema).array(),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => ProductItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductItemCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const EnumFittingFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFittingFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => FittingSchema).optional()
}).strict();

export const EnumStyleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStyleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => StyleSchema).optional()
}).strict();

export const CategoryUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const CollectionUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.CollectionUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollectionCreateWithoutProductsInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CollectionCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => CollectionUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => CollectionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CollectionUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => CollectionUpdateWithoutProductsInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const TagUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProductsInputSchema),z.lazy(() => TagCreateWithoutProductsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductItemUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductItemUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductItemCreateWithoutProductInputSchema),z.lazy(() => ProductItemCreateWithoutProductInputSchema).array(),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => ProductItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductItemUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ProductItemUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductItemCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductItemUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ProductItemUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductItemUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => ProductItemUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductItemScalarWhereInputSchema),z.lazy(() => ProductItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TagUncheckedUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProductsInputSchema),z.lazy(() => TagCreateWithoutProductsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductItemUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductItemUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductItemCreateWithoutProductInputSchema),z.lazy(() => ProductItemCreateWithoutProductInputSchema).array(),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => ProductItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductItemUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ProductItemUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductItemCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductItemUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ProductItemUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductItemUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => ProductItemUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductItemScalarWhereInputSchema),z.lazy(() => ProductItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedOneWithoutProductItemsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutProductItemsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutProductItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutProductItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const ColorCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.ColorCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => ColorCreateWithoutProductsInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColorCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => ColorWhereUniqueInputSchema).optional()
}).strict();

export const EnumSizeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSizeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SizeSchema).optional()
}).strict();

export const ProductUpdateOneRequiredWithoutProductItemsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutProductItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutProductItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutProductItemsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutProductItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutProductItemsInputSchema),z.lazy(() => ProductUpdateWithoutProductItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutProductItemsInputSchema) ]).optional(),
}).strict();

export const ColorUpdateOneWithoutProductsNestedInputSchema: z.ZodType<Prisma.ColorUpdateOneWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColorCreateWithoutProductsInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColorCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => ColorUpsertWithoutProductsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ColorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ColorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ColorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ColorUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => ColorUpdateWithoutProductsInputSchema),z.lazy(() => ColorUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ProductItemCreateNestedManyWithoutColorInputSchema: z.ZodType<Prisma.ProductItemCreateNestedManyWithoutColorInput> = z.object({
  create: z.union([ z.lazy(() => ProductItemCreateWithoutColorInputSchema),z.lazy(() => ProductItemCreateWithoutColorInputSchema).array(),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductItemCreateOrConnectWithoutColorInputSchema),z.lazy(() => ProductItemCreateOrConnectWithoutColorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductItemCreateManyColorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductItemUncheckedCreateNestedManyWithoutColorInputSchema: z.ZodType<Prisma.ProductItemUncheckedCreateNestedManyWithoutColorInput> = z.object({
  create: z.union([ z.lazy(() => ProductItemCreateWithoutColorInputSchema),z.lazy(() => ProductItemCreateWithoutColorInputSchema).array(),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductItemCreateOrConnectWithoutColorInputSchema),z.lazy(() => ProductItemCreateOrConnectWithoutColorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductItemCreateManyColorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductItemUpdateManyWithoutColorNestedInputSchema: z.ZodType<Prisma.ProductItemUpdateManyWithoutColorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductItemCreateWithoutColorInputSchema),z.lazy(() => ProductItemCreateWithoutColorInputSchema).array(),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductItemCreateOrConnectWithoutColorInputSchema),z.lazy(() => ProductItemCreateOrConnectWithoutColorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductItemUpsertWithWhereUniqueWithoutColorInputSchema),z.lazy(() => ProductItemUpsertWithWhereUniqueWithoutColorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductItemCreateManyColorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductItemUpdateWithWhereUniqueWithoutColorInputSchema),z.lazy(() => ProductItemUpdateWithWhereUniqueWithoutColorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductItemUpdateManyWithWhereWithoutColorInputSchema),z.lazy(() => ProductItemUpdateManyWithWhereWithoutColorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductItemScalarWhereInputSchema),z.lazy(() => ProductItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductItemUncheckedUpdateManyWithoutColorNestedInputSchema: z.ZodType<Prisma.ProductItemUncheckedUpdateManyWithoutColorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductItemCreateWithoutColorInputSchema),z.lazy(() => ProductItemCreateWithoutColorInputSchema).array(),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductItemCreateOrConnectWithoutColorInputSchema),z.lazy(() => ProductItemCreateOrConnectWithoutColorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductItemUpsertWithWhereUniqueWithoutColorInputSchema),z.lazy(() => ProductItemUpsertWithWhereUniqueWithoutColorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductItemCreateManyColorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductItemWhereUniqueInputSchema),z.lazy(() => ProductItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductItemUpdateWithWhereUniqueWithoutColorInputSchema),z.lazy(() => ProductItemUpdateWithWhereUniqueWithoutColorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductItemUpdateManyWithWhereWithoutColorInputSchema),z.lazy(() => ProductItemUpdateManyWithWhereWithoutColorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductItemScalarWhereInputSchema),z.lazy(() => ProductItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutCollectionInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCollectionInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCollectionInputSchema),z.lazy(() => ProductCreateWithoutCollectionInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCollectionInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCollectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCollectionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutCollectionInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCollectionInputSchema),z.lazy(() => ProductCreateWithoutCollectionInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCollectionInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCollectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCollectionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutCollectionNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutCollectionNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCollectionInputSchema),z.lazy(() => ProductCreateWithoutCollectionInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCollectionInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCollectionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCollectionInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCollectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCollectionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCollectionInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCollectionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCollectionInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCollectionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutCollectionNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCollectionNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCollectionInputSchema),z.lazy(() => ProductCreateWithoutCollectionInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCollectionInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCollectionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCollectionInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCollectionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCollectionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCollectionInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCollectionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCollectionInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCollectionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoryInputSchema),z.lazy(() => ProductCreateWithoutCategoryInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoryInputSchema),z.lazy(() => ProductCreateWithoutCategoryInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoryInputSchema),z.lazy(() => ProductCreateWithoutCategoryInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoryInputSchema),z.lazy(() => ProductCreateWithoutCategoryInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRoleFilterSchema: z.ZodType<Prisma.NestedEnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedEnumFittingFilterSchema: z.ZodType<Prisma.NestedEnumFittingFilter> = z.object({
  equals: z.lazy(() => FittingSchema).optional(),
  in: z.lazy(() => FittingSchema).array().optional(),
  notIn: z.lazy(() => FittingSchema).array().optional(),
  not: z.union([ z.lazy(() => FittingSchema),z.lazy(() => NestedEnumFittingFilterSchema) ]).optional(),
}).strict();

export const NestedEnumStyleFilterSchema: z.ZodType<Prisma.NestedEnumStyleFilter> = z.object({
  equals: z.lazy(() => StyleSchema).optional(),
  in: z.lazy(() => StyleSchema).array().optional(),
  notIn: z.lazy(() => StyleSchema).array().optional(),
  not: z.union([ z.lazy(() => StyleSchema),z.lazy(() => NestedEnumStyleFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedEnumFittingWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFittingWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FittingSchema).optional(),
  in: z.lazy(() => FittingSchema).array().optional(),
  notIn: z.lazy(() => FittingSchema).array().optional(),
  not: z.union([ z.lazy(() => FittingSchema),z.lazy(() => NestedEnumFittingWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFittingFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFittingFilterSchema).optional()
}).strict();

export const NestedEnumStyleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumStyleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => StyleSchema).optional(),
  in: z.lazy(() => StyleSchema).array().optional(),
  notIn: z.lazy(() => StyleSchema).array().optional(),
  not: z.union([ z.lazy(() => StyleSchema),z.lazy(() => NestedEnumStyleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumStyleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumStyleFilterSchema).optional()
}).strict();

export const NestedEnumSizeFilterSchema: z.ZodType<Prisma.NestedEnumSizeFilter> = z.object({
  equals: z.lazy(() => SizeSchema).optional(),
  in: z.lazy(() => SizeSchema).array().optional(),
  notIn: z.lazy(() => SizeSchema).array().optional(),
  not: z.union([ z.lazy(() => SizeSchema),z.lazy(() => NestedEnumSizeFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumSizeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSizeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SizeSchema).optional(),
  in: z.lazy(() => SizeSchema).array().optional(),
  notIn: z.lazy(() => SizeSchema).array().optional(),
  not: z.union([ z.lazy(() => SizeSchema),z.lazy(() => NestedEnumSizeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSizeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSizeFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ProductCreateWithoutTagsInputSchema: z.ZodType<Prisma.ProductCreateWithoutTagsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutProductsInputSchema),
  productItems: z.lazy(() => ProductItemCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  categoryId: z.number().int(),
  collectionId: z.number().int(),
  productItems: z.lazy(() => ProductItemUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export const ProductUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutTagsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutTagsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutTagsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  currentPrice: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  previousPrice: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inPromotion: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  fitting: z.union([ z.lazy(() => EnumFittingFilterSchema),z.lazy(() => FittingSchema) ]).optional(),
  style: z.union([ z.lazy(() => EnumStyleFilterSchema),z.lazy(() => StyleSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  collectionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const CategoryCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutProductsInput> = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string()
}).strict();

export const CategoryUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutProductsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string()
}).strict();

export const CategoryCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CollectionCreateWithoutProductsInputSchema: z.ZodType<Prisma.CollectionCreateWithoutProductsInput> = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string().url()
}).strict();

export const CollectionUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.CollectionUncheckedCreateWithoutProductsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  image: z.string().url()
}).strict();

export const CollectionCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.CollectionCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => CollectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CollectionCreateWithoutProductsInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const TagCreateWithoutProductsInputSchema: z.ZodType<Prisma.TagCreateWithoutProductsInput> = z.object({
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" })
}).strict();

export const TagUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutProductsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" })
}).strict();

export const TagCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutProductsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const ProductItemCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductItemCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  color: z.lazy(() => ColorCreateNestedOneWithoutProductsInputSchema).optional()
}).strict();

export const ProductItemUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductItemUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  colorId: z.number().int().optional().nullable()
}).strict();

export const ProductItemCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductItemCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => ProductItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductItemCreateWithoutProductInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const ProductItemCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductItemCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductItemCreateManyProductInputSchema),z.lazy(() => ProductItemCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CategoryUpsertWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const CategoryUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollectionUpsertWithoutProductsInputSchema: z.ZodType<Prisma.CollectionUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => CollectionUpdateWithoutProductsInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => CollectionCreateWithoutProductsInputSchema),z.lazy(() => CollectionUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => CollectionWhereInputSchema).optional()
}).strict();

export const CollectionUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.CollectionUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => CollectionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CollectionUpdateWithoutProductsInputSchema),z.lazy(() => CollectionUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const CollectionUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CollectionUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CollectionUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CollectionUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUpsertWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutProductsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutProductsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const TagUpdateWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutProductsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const TagUpdateManyWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const TagScalarWhereInputSchema: z.ZodType<Prisma.TagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductItemUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductItemUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ProductItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductItemUpdateWithoutProductInputSchema),z.lazy(() => ProductItemUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => ProductItemCreateWithoutProductInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const ProductItemUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductItemUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ProductItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductItemUpdateWithoutProductInputSchema),z.lazy(() => ProductItemUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const ProductItemUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductItemUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => ProductItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductItemUpdateManyMutationInputSchema),z.lazy(() => ProductItemUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export const ProductItemScalarWhereInputSchema: z.ZodType<Prisma.ProductItemScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductItemScalarWhereInputSchema),z.lazy(() => ProductItemScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductItemScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductItemScalarWhereInputSchema),z.lazy(() => ProductItemScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sku: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  size: z.union([ z.lazy(() => EnumSizeFilterSchema),z.lazy(() => SizeSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  colorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const ProductCreateWithoutProductItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutProductItemsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutProductsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutProductItemsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutProductItemsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  categoryId: z.number().int(),
  collectionId: z.number().int(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutProductItemsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductItemsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutProductItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductItemsInputSchema) ]),
}).strict();

export const ColorCreateWithoutProductsInputSchema: z.ZodType<Prisma.ColorCreateWithoutProductsInput> = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string()
}).strict();

export const ColorUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.ColorUncheckedCreateWithoutProductsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string()
}).strict();

export const ColorCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.ColorCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => ColorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColorCreateWithoutProductsInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const ProductUpsertWithoutProductItemsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutProductItemsInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutProductItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutProductItemsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutProductItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductItemsInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductUpdateToOneWithWhereWithoutProductItemsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutProductItemsInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutProductItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutProductItemsInputSchema) ]),
}).strict();

export const ProductUpdateWithoutProductItemsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutProductItemsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutProductItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutProductItemsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ColorUpsertWithoutProductsInputSchema: z.ZodType<Prisma.ColorUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => ColorUpdateWithoutProductsInputSchema),z.lazy(() => ColorUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => ColorCreateWithoutProductsInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => ColorWhereInputSchema).optional()
}).strict();

export const ColorUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.ColorUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => ColorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ColorUpdateWithoutProductsInputSchema),z.lazy(() => ColorUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const ColorUpdateWithoutProductsInputSchema: z.ZodType<Prisma.ColorUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ColorUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductItemCreateWithoutColorInputSchema: z.ZodType<Prisma.ProductItemCreateWithoutColorInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  product: z.lazy(() => ProductCreateNestedOneWithoutProductItemsInputSchema)
}).strict();

export const ProductItemUncheckedCreateWithoutColorInputSchema: z.ZodType<Prisma.ProductItemUncheckedCreateWithoutColorInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  productId: z.number().int()
}).strict();

export const ProductItemCreateOrConnectWithoutColorInputSchema: z.ZodType<Prisma.ProductItemCreateOrConnectWithoutColorInput> = z.object({
  where: z.lazy(() => ProductItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductItemCreateWithoutColorInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema) ]),
}).strict();

export const ProductItemCreateManyColorInputEnvelopeSchema: z.ZodType<Prisma.ProductItemCreateManyColorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductItemCreateManyColorInputSchema),z.lazy(() => ProductItemCreateManyColorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductItemUpsertWithWhereUniqueWithoutColorInputSchema: z.ZodType<Prisma.ProductItemUpsertWithWhereUniqueWithoutColorInput> = z.object({
  where: z.lazy(() => ProductItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductItemUpdateWithoutColorInputSchema),z.lazy(() => ProductItemUncheckedUpdateWithoutColorInputSchema) ]),
  create: z.union([ z.lazy(() => ProductItemCreateWithoutColorInputSchema),z.lazy(() => ProductItemUncheckedCreateWithoutColorInputSchema) ]),
}).strict();

export const ProductItemUpdateWithWhereUniqueWithoutColorInputSchema: z.ZodType<Prisma.ProductItemUpdateWithWhereUniqueWithoutColorInput> = z.object({
  where: z.lazy(() => ProductItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductItemUpdateWithoutColorInputSchema),z.lazy(() => ProductItemUncheckedUpdateWithoutColorInputSchema) ]),
}).strict();

export const ProductItemUpdateManyWithWhereWithoutColorInputSchema: z.ZodType<Prisma.ProductItemUpdateManyWithWhereWithoutColorInput> = z.object({
  where: z.lazy(() => ProductItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductItemUpdateManyMutationInputSchema),z.lazy(() => ProductItemUncheckedUpdateManyWithoutColorInputSchema) ]),
}).strict();

export const ProductCreateWithoutCollectionInputSchema: z.ZodType<Prisma.ProductCreateWithoutCollectionInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductsInputSchema).optional(),
  productItems: z.lazy(() => ProductItemCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCollectionInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  categoryId: z.number().int(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutCollectionInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCollectionInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCollectionInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema) ]),
}).strict();

export const ProductCreateManyCollectionInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyCollectionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyCollectionInputSchema),z.lazy(() => ProductCreateManyCollectionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCollectionInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutCollectionInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCollectionInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCollectionInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCollectionInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCollectionInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCollectionInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCollectionInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCollectionInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutCollectionInputSchema) ]),
}).strict();

export const ProductCreateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductCreateWithoutCategoryInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutProductsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductsInputSchema).optional(),
  productItems: z.lazy(() => ProductItemCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  collectionId: z.number().int(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoryInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const ProductCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyCategoryInputSchema),z.lazy(() => ProductCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutCategoryInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoryInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCategoryInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export const ProductUpdateWithoutTagsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutTagsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  productItems: z.lazy(() => ProductItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutTagsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutTagsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductItemCreateManyProductInputSchema: z.ZodType<Prisma.ProductItemCreateManyProductInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  colorId: z.number().int().optional().nullable()
}).strict();

export const TagUpdateWithoutProductsInputSchema: z.ZodType<Prisma.TagUpdateWithoutProductsInput> = z.object({
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateManyWithoutProductsInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutProductsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductItemUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductItemUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.lazy(() => ColorUpdateOneWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductItemUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductItemUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductItemUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.ProductItemUncheckedUpdateManyWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductItemCreateManyColorInputSchema: z.ZodType<Prisma.ProductItemCreateManyColorInput> = z.object({
  id: z.string().uuid().optional(),
  sku: z.string(),
  quantity: z.number().int(),
  size: z.lazy(() => SizeSchema),
  image: z.string().url(),
  productId: z.number().int()
}).strict();

export const ProductItemUpdateWithoutColorInputSchema: z.ZodType<Prisma.ProductItemUpdateWithoutColorInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutProductItemsNestedInputSchema).optional()
}).strict();

export const ProductItemUncheckedUpdateWithoutColorInputSchema: z.ZodType<Prisma.ProductItemUncheckedUpdateWithoutColorInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductItemUncheckedUpdateManyWithoutColorInputSchema: z.ZodType<Prisma.ProductItemUncheckedUpdateManyWithoutColorInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sku: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeSchema),z.lazy(() => EnumSizeFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyCollectionInputSchema: z.ZodType<Prisma.ProductCreateManyCollectionInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  categoryId: z.number().int()
}).strict();

export const ProductUpdateWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCollectionInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutProductsNestedInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCollectionInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCollectionInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyCategoryInputSchema: z.ZodType<Prisma.ProductCreateManyCategoryInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  previousPrice: z.number().int().nonnegative({ message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string().url(),
  collectionId: z.number().int()
}).strict();

export const ProductUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCategoryInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutProductsNestedInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  productItems: z.lazy(() => ProductItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int().nonnegative({ message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string().url(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const TagFindFirstArgsSchema: z.ZodType<Prisma.TagFindFirstArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TagFindFirstOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagFindManyArgsSchema: z.ZodType<Prisma.TagFindManyArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagAggregateArgsSchema: z.ZodType<Prisma.TagAggregateArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TagGroupByArgsSchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithAggregationInputSchema.array(),TagOrderByWithAggregationInputSchema ]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TagFindUniqueArgsSchema: z.ZodType<Prisma.TagFindUniqueArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TagFindUniqueOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductItemFindFirstArgsSchema: z.ZodType<Prisma.ProductItemFindFirstArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  where: ProductItemWhereInputSchema.optional(),
  orderBy: z.union([ ProductItemOrderByWithRelationInputSchema.array(),ProductItemOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductItemScalarFieldEnumSchema,ProductItemScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductItemFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductItemFindFirstOrThrowArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  where: ProductItemWhereInputSchema.optional(),
  orderBy: z.union([ ProductItemOrderByWithRelationInputSchema.array(),ProductItemOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductItemScalarFieldEnumSchema,ProductItemScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductItemFindManyArgsSchema: z.ZodType<Prisma.ProductItemFindManyArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  where: ProductItemWhereInputSchema.optional(),
  orderBy: z.union([ ProductItemOrderByWithRelationInputSchema.array(),ProductItemOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductItemScalarFieldEnumSchema,ProductItemScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductItemAggregateArgsSchema: z.ZodType<Prisma.ProductItemAggregateArgs> = z.object({
  where: ProductItemWhereInputSchema.optional(),
  orderBy: z.union([ ProductItemOrderByWithRelationInputSchema.array(),ProductItemOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductItemGroupByArgsSchema: z.ZodType<Prisma.ProductItemGroupByArgs> = z.object({
  where: ProductItemWhereInputSchema.optional(),
  orderBy: z.union([ ProductItemOrderByWithAggregationInputSchema.array(),ProductItemOrderByWithAggregationInputSchema ]).optional(),
  by: ProductItemScalarFieldEnumSchema.array(),
  having: ProductItemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductItemFindUniqueArgsSchema: z.ZodType<Prisma.ProductItemFindUniqueArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  where: ProductItemWhereUniqueInputSchema,
}).strict() ;

export const ProductItemFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductItemFindUniqueOrThrowArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  where: ProductItemWhereUniqueInputSchema,
}).strict() ;

export const ColorFindFirstArgsSchema: z.ZodType<Prisma.ColorFindFirstArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereInputSchema.optional(),
  orderBy: z.union([ ColorOrderByWithRelationInputSchema.array(),ColorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColorScalarFieldEnumSchema,ColorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ColorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ColorFindFirstOrThrowArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereInputSchema.optional(),
  orderBy: z.union([ ColorOrderByWithRelationInputSchema.array(),ColorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColorScalarFieldEnumSchema,ColorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ColorFindManyArgsSchema: z.ZodType<Prisma.ColorFindManyArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereInputSchema.optional(),
  orderBy: z.union([ ColorOrderByWithRelationInputSchema.array(),ColorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColorScalarFieldEnumSchema,ColorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ColorAggregateArgsSchema: z.ZodType<Prisma.ColorAggregateArgs> = z.object({
  where: ColorWhereInputSchema.optional(),
  orderBy: z.union([ ColorOrderByWithRelationInputSchema.array(),ColorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ColorGroupByArgsSchema: z.ZodType<Prisma.ColorGroupByArgs> = z.object({
  where: ColorWhereInputSchema.optional(),
  orderBy: z.union([ ColorOrderByWithAggregationInputSchema.array(),ColorOrderByWithAggregationInputSchema ]).optional(),
  by: ColorScalarFieldEnumSchema.array(),
  having: ColorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ColorFindUniqueArgsSchema: z.ZodType<Prisma.ColorFindUniqueArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema,
}).strict() ;

export const ColorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ColorFindUniqueOrThrowArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema,
}).strict() ;

export const CollectionFindFirstArgsSchema: z.ZodType<Prisma.CollectionFindFirstArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithRelationInputSchema.array(),CollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: CollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollectionScalarFieldEnumSchema,CollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollectionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CollectionFindFirstOrThrowArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithRelationInputSchema.array(),CollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: CollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollectionScalarFieldEnumSchema,CollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollectionFindManyArgsSchema: z.ZodType<Prisma.CollectionFindManyArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithRelationInputSchema.array(),CollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: CollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollectionScalarFieldEnumSchema,CollectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CollectionAggregateArgsSchema: z.ZodType<Prisma.CollectionAggregateArgs> = z.object({
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithRelationInputSchema.array(),CollectionOrderByWithRelationInputSchema ]).optional(),
  cursor: CollectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CollectionGroupByArgsSchema: z.ZodType<Prisma.CollectionGroupByArgs> = z.object({
  where: CollectionWhereInputSchema.optional(),
  orderBy: z.union([ CollectionOrderByWithAggregationInputSchema.array(),CollectionOrderByWithAggregationInputSchema ]).optional(),
  by: CollectionScalarFieldEnumSchema.array(),
  having: CollectionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CollectionFindUniqueArgsSchema: z.ZodType<Prisma.CollectionFindUniqueArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
}).strict() ;

export const CollectionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CollectionFindUniqueOrThrowArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
}).strict() ;

export const CategoryFindFirstArgsSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryFindManyArgsSchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryAggregateArgsSchema: z.ZodType<Prisma.CategoryAggregateArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CategoryGroupByArgsSchema: z.ZodType<Prisma.CategoryGroupByArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithAggregationInputSchema.array(),CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryScalarFieldEnumSchema.array(),
  having: CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CategoryFindUniqueArgsSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const TagCreateArgsSchema: z.ZodType<Prisma.TagCreateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
}).strict() ;

export const TagUpsertArgsSchema: z.ZodType<Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
  update: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
}).strict() ;

export const TagCreateManyArgsSchema: z.ZodType<Prisma.TagCreateManyArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TagCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TagCreateManyAndReturnArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TagDeleteArgsSchema: z.ZodType<Prisma.TagDeleteArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagUpdateArgsSchema: z.ZodType<Prisma.TagUpdateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagUpdateManyArgsSchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([ TagUpdateManyMutationInputSchema,TagUncheckedUpdateManyInputSchema ]),
  where: TagWhereInputSchema.optional(),
}).strict() ;

export const TagDeleteManyArgsSchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
}).strict() ;

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict() ;

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict() ;

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict() ;

export const ProductItemCreateArgsSchema: z.ZodType<Prisma.ProductItemCreateArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  data: z.union([ ProductItemCreateInputSchema,ProductItemUncheckedCreateInputSchema ]),
}).strict() ;

export const ProductItemUpsertArgsSchema: z.ZodType<Prisma.ProductItemUpsertArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  where: ProductItemWhereUniqueInputSchema,
  create: z.union([ ProductItemCreateInputSchema,ProductItemUncheckedCreateInputSchema ]),
  update: z.union([ ProductItemUpdateInputSchema,ProductItemUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProductItemCreateManyArgsSchema: z.ZodType<Prisma.ProductItemCreateManyArgs> = z.object({
  data: z.union([ ProductItemCreateManyInputSchema,ProductItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductItemCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductItemCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProductItemCreateManyInputSchema,ProductItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductItemDeleteArgsSchema: z.ZodType<Prisma.ProductItemDeleteArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  where: ProductItemWhereUniqueInputSchema,
}).strict() ;

export const ProductItemUpdateArgsSchema: z.ZodType<Prisma.ProductItemUpdateArgs> = z.object({
  select: ProductItemSelectSchema.optional(),
  include: ProductItemIncludeSchema.optional(),
  data: z.union([ ProductItemUpdateInputSchema,ProductItemUncheckedUpdateInputSchema ]),
  where: ProductItemWhereUniqueInputSchema,
}).strict() ;

export const ProductItemUpdateManyArgsSchema: z.ZodType<Prisma.ProductItemUpdateManyArgs> = z.object({
  data: z.union([ ProductItemUpdateManyMutationInputSchema,ProductItemUncheckedUpdateManyInputSchema ]),
  where: ProductItemWhereInputSchema.optional(),
}).strict() ;

export const ProductItemDeleteManyArgsSchema: z.ZodType<Prisma.ProductItemDeleteManyArgs> = z.object({
  where: ProductItemWhereInputSchema.optional(),
}).strict() ;

export const ColorCreateArgsSchema: z.ZodType<Prisma.ColorCreateArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  data: z.union([ ColorCreateInputSchema,ColorUncheckedCreateInputSchema ]),
}).strict() ;

export const ColorUpsertArgsSchema: z.ZodType<Prisma.ColorUpsertArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema,
  create: z.union([ ColorCreateInputSchema,ColorUncheckedCreateInputSchema ]),
  update: z.union([ ColorUpdateInputSchema,ColorUncheckedUpdateInputSchema ]),
}).strict() ;

export const ColorCreateManyArgsSchema: z.ZodType<Prisma.ColorCreateManyArgs> = z.object({
  data: z.union([ ColorCreateManyInputSchema,ColorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ColorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ColorCreateManyAndReturnArgs> = z.object({
  data: z.union([ ColorCreateManyInputSchema,ColorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ColorDeleteArgsSchema: z.ZodType<Prisma.ColorDeleteArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema,
}).strict() ;

export const ColorUpdateArgsSchema: z.ZodType<Prisma.ColorUpdateArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  data: z.union([ ColorUpdateInputSchema,ColorUncheckedUpdateInputSchema ]),
  where: ColorWhereUniqueInputSchema,
}).strict() ;

export const ColorUpdateManyArgsSchema: z.ZodType<Prisma.ColorUpdateManyArgs> = z.object({
  data: z.union([ ColorUpdateManyMutationInputSchema,ColorUncheckedUpdateManyInputSchema ]),
  where: ColorWhereInputSchema.optional(),
}).strict() ;

export const ColorDeleteManyArgsSchema: z.ZodType<Prisma.ColorDeleteManyArgs> = z.object({
  where: ColorWhereInputSchema.optional(),
}).strict() ;

export const CollectionCreateArgsSchema: z.ZodType<Prisma.CollectionCreateArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  data: z.union([ CollectionCreateInputSchema,CollectionUncheckedCreateInputSchema ]),
}).strict() ;

export const CollectionUpsertArgsSchema: z.ZodType<Prisma.CollectionUpsertArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
  create: z.union([ CollectionCreateInputSchema,CollectionUncheckedCreateInputSchema ]),
  update: z.union([ CollectionUpdateInputSchema,CollectionUncheckedUpdateInputSchema ]),
}).strict() ;

export const CollectionCreateManyArgsSchema: z.ZodType<Prisma.CollectionCreateManyArgs> = z.object({
  data: z.union([ CollectionCreateManyInputSchema,CollectionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CollectionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CollectionCreateManyAndReturnArgs> = z.object({
  data: z.union([ CollectionCreateManyInputSchema,CollectionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CollectionDeleteArgsSchema: z.ZodType<Prisma.CollectionDeleteArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
}).strict() ;

export const CollectionUpdateArgsSchema: z.ZodType<Prisma.CollectionUpdateArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  data: z.union([ CollectionUpdateInputSchema,CollectionUncheckedUpdateInputSchema ]),
  where: CollectionWhereUniqueInputSchema,
}).strict() ;

export const CollectionUpdateManyArgsSchema: z.ZodType<Prisma.CollectionUpdateManyArgs> = z.object({
  data: z.union([ CollectionUpdateManyMutationInputSchema,CollectionUncheckedUpdateManyInputSchema ]),
  where: CollectionWhereInputSchema.optional(),
}).strict() ;

export const CollectionDeleteManyArgsSchema: z.ZodType<Prisma.CollectionDeleteManyArgs> = z.object({
  where: CollectionWhereInputSchema.optional(),
}).strict() ;

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const CategoryCreateManyArgsSchema: z.ZodType<Prisma.CategoryCreateManyArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict() ;

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict() ;