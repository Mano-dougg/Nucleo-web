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

export const RelationLoadStrategySchema = z.enum(['query','join']);

export const TagScalarFieldEnumSchema = z.enum(['id','title']);

export const ProductScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','title','description','currentPrice','previousPrice','inPromotion','fitting','style','image','quantity','categoryId','collectionId','sizes']);

export const ColorScalarFieldEnumSchema = z.enum(['id','name','reference']);

export const CollectionScalarFieldEnumSchema = z.enum(['id','name','image']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','image']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

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
  sizes: SizeSchema.array(),
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
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
  colors: ColorWithRelations[];
};

export type ProductWithRelations = z.infer<typeof ProductSchema> & ProductRelations

export const ProductWithRelationsSchema: z.ZodType<ProductWithRelations> = ProductSchema.merge(z.object({
  category: z.lazy(() => CategoryWithRelationsSchema),
  collection: z.lazy(() => CollectionWithRelationsSchema),
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  colors: z.lazy(() => ColorWithRelationsSchema).array(),
}))

// PRODUCT PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ProductPartialRelations = {
  category?: CategoryPartialWithRelations;
  collection?: CollectionPartialWithRelations;
  tags?: TagPartialWithRelations[];
  colors?: ColorPartialWithRelations[];
};

export type ProductPartialWithRelations = z.infer<typeof ProductPartialSchema> & ProductPartialRelations

export const ProductPartialWithRelationsSchema: z.ZodType<ProductPartialWithRelations> = ProductPartialSchema.merge(z.object({
  category: z.lazy(() => CategoryPartialWithRelationsSchema),
  collection: z.lazy(() => CollectionPartialWithRelationsSchema),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  colors: z.lazy(() => ColorPartialWithRelationsSchema).array(),
})).partial()

export type ProductWithPartialRelations = z.infer<typeof ProductSchema> & ProductPartialRelations

export const ProductWithPartialRelationsSchema: z.ZodType<ProductWithPartialRelations> = ProductSchema.merge(z.object({
  category: z.lazy(() => CategoryPartialWithRelationsSchema),
  collection: z.lazy(() => CollectionPartialWithRelationsSchema),
  tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
  colors: z.lazy(() => ColorPartialWithRelationsSchema).array(),
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
  product: ProductWithRelations[];
};

export type ColorWithRelations = z.infer<typeof ColorSchema> & ColorRelations

export const ColorWithRelationsSchema: z.ZodType<ColorWithRelations> = ColorSchema.merge(z.object({
  product: z.lazy(() => ProductWithRelationsSchema).array(),
}))

// COLOR PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ColorPartialRelations = {
  product?: ProductPartialWithRelations[];
};

export type ColorPartialWithRelations = z.infer<typeof ColorPartialSchema> & ColorPartialRelations

export const ColorPartialWithRelationsSchema: z.ZodType<ColorPartialWithRelations> = ColorPartialSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema).array(),
})).partial()

export type ColorWithPartialRelations = z.infer<typeof ColorSchema> & ColorPartialRelations

export const ColorWithPartialRelationsSchema: z.ZodType<ColorWithPartialRelations> = ColorSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema).array(),
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
  colors: z.union([z.boolean(),z.lazy(() => ColorFindManyArgsSchema)]).optional(),
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
  colors: z.boolean().optional(),
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
  quantity: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  collectionId: z.boolean().optional(),
  sizes: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  collection: z.union([z.boolean(),z.lazy(() => CollectionArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  colors: z.union([z.boolean(),z.lazy(() => ColorFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COLOR
//------------------------------------------------------

export const ColorIncludeSchema: z.ZodType<Prisma.ColorInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
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
  product: z.boolean().optional(),
}).strict();

export const ColorSelectSchema: z.ZodType<Prisma.ColorSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  reference: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
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
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  collectionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sizes: z.lazy(() => EnumSizeNullableListFilterSchema).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  collection: z.union([ z.lazy(() => CollectionRelationFilterSchema),z.lazy(() => CollectionWhereInputSchema) ]).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  colors: z.lazy(() => ColorListRelationFilterSchema).optional()
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
  quantity: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional(),
  sizes: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  collection: z.lazy(() => CollectionOrderByWithRelationInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  colors: z.lazy(() => ColorOrderByRelationAggregateInputSchema).optional()
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
  currentPrice: z.union([ z.lazy(() => IntFilterSchema),z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }) ]).optional(),
  previousPrice: z.union([ z.lazy(() => IntFilterSchema),z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }) ]).optional(),
  inPromotion: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  fitting: z.union([ z.lazy(() => EnumFittingFilterSchema),z.lazy(() => FittingSchema) ]).optional(),
  style: z.union([ z.lazy(() => EnumStyleFilterSchema),z.lazy(() => StyleSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }) ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  collectionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  sizes: z.lazy(() => EnumSizeNullableListFilterSchema).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  collection: z.union([ z.lazy(() => CollectionRelationFilterSchema),z.lazy(() => CollectionWhereInputSchema) ]).optional(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  colors: z.lazy(() => ColorListRelationFilterSchema).optional()
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
  quantity: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional(),
  sizes: z.lazy(() => SortOrderSchema).optional(),
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
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  collectionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  sizes: z.lazy(() => EnumSizeNullableListFilterSchema).optional()
}).strict();

export const ColorWhereInputSchema: z.ZodType<Prisma.ColorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColorWhereInputSchema),z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorWhereInputSchema),z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reference: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const ColorOrderByWithRelationInputSchema: z.ZodType<Prisma.ColorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
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
  product: z.lazy(() => ProductListRelationFilterSchema).optional()
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
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutProductsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductsInputSchema).optional(),
  colors: z.lazy(() => ColorCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  categoryId: z.number().int(),
  collectionId: z.number().int(),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  colors: z.lazy(() => ColorUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutProductsNestedInputSchema).optional(),
  colors: z.lazy(() => ColorUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  colors: z.lazy(() => ColorUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  categoryId: z.number().int(),
  collectionId: z.number().int(),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
}).strict();

export const ColorCreateInputSchema: z.ZodType<Prisma.ColorCreateInput> = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string(),
  product: z.lazy(() => ProductCreateNestedManyWithoutColorsInputSchema).optional()
}).strict();

export const ColorUncheckedCreateInputSchema: z.ZodType<Prisma.ColorUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string(),
  product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutColorsInputSchema).optional()
}).strict();

export const ColorUpdateInputSchema: z.ZodType<Prisma.ColorUpdateInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateManyWithoutColorsNestedInputSchema).optional()
}).strict();

export const ColorUncheckedUpdateInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUncheckedUpdateManyWithoutColorsNestedInputSchema).optional()
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

export const EnumSizeNullableListFilterSchema: z.ZodType<Prisma.EnumSizeNullableListFilter> = z.object({
  equals: z.lazy(() => SizeSchema).array().optional().nullable(),
  has: z.lazy(() => SizeSchema).optional().nullable(),
  hasEvery: z.lazy(() => SizeSchema).array().optional(),
  hasSome: z.lazy(() => SizeSchema).array().optional(),
  isEmpty: z.boolean().optional()
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

export const ColorListRelationFilterSchema: z.ZodType<Prisma.ColorListRelationFilter> = z.object({
  every: z.lazy(() => ColorWhereInputSchema).optional(),
  some: z.lazy(() => ColorWhereInputSchema).optional(),
  none: z.lazy(() => ColorWhereInputSchema).optional()
}).strict();

export const TagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ColorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ColorOrderByRelationAggregateInput> = z.object({
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
  quantity: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional(),
  sizes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
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
  quantity: z.lazy(() => SortOrderSchema).optional(),
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
  quantity: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  collectionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  currentPrice: z.lazy(() => SortOrderSchema).optional(),
  previousPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
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

export const ProductCreatesizesInputSchema: z.ZodType<Prisma.ProductCreatesizesInput> = z.object({
  set: z.lazy(() => SizeSchema).array()
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

export const ColorCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ColorCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ColorCreateWithoutProductInputSchema),z.lazy(() => ColorCreateWithoutProductInputSchema).array(),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColorCreateOrConnectWithoutProductInputSchema),z.lazy(() => ColorCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProductsInputSchema),z.lazy(() => TagCreateWithoutProductsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema),z.lazy(() => TagCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ColorUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ColorUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ColorCreateWithoutProductInputSchema),z.lazy(() => ColorCreateWithoutProductInputSchema).array(),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColorCreateOrConnectWithoutProductInputSchema),z.lazy(() => ColorCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
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

export const ProductUpdatesizesInputSchema: z.ZodType<Prisma.ProductUpdatesizesInput> = z.object({
  set: z.lazy(() => SizeSchema).array().optional(),
  push: z.union([ z.lazy(() => SizeSchema),z.lazy(() => SizeSchema).array() ]).optional(),
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

export const ColorUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ColorUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColorCreateWithoutProductInputSchema),z.lazy(() => ColorCreateWithoutProductInputSchema).array(),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColorCreateOrConnectWithoutProductInputSchema),z.lazy(() => ColorCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ColorUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ColorUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ColorUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ColorUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ColorUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => ColorUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ColorScalarWhereInputSchema),z.lazy(() => ColorScalarWhereInputSchema).array() ]).optional(),
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

export const ColorUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ColorCreateWithoutProductInputSchema),z.lazy(() => ColorCreateWithoutProductInputSchema).array(),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ColorCreateOrConnectWithoutProductInputSchema),z.lazy(() => ColorCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ColorUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ColorUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ColorWhereUniqueInputSchema),z.lazy(() => ColorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ColorUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ColorUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ColorUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => ColorUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ColorScalarWhereInputSchema),z.lazy(() => ColorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutColorsInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutColorsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutColorsInputSchema),z.lazy(() => ProductCreateWithoutColorsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutColorsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutColorsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutColorsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutColorsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutColorsInputSchema),z.lazy(() => ProductCreateWithoutColorsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutColorsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutColorsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutColorsNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutColorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutColorsInputSchema),z.lazy(() => ProductCreateWithoutColorsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutColorsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutColorsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutColorsInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutColorsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutColorsInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutColorsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutColorsInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutColorsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutColorsNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutColorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutColorsInputSchema),z.lazy(() => ProductCreateWithoutColorsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutColorsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutColorsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutColorsInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutColorsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutColorsInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutColorsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutColorsInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutColorsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
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

export const ProductCreateWithoutTagsInputSchema: z.ZodType<Prisma.ProductCreateWithoutTagsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutProductsInputSchema),
  colors: z.lazy(() => ColorCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  categoryId: z.number().int(),
  collectionId: z.number().int(),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  colors: z.lazy(() => ColorUncheckedCreateNestedManyWithoutProductInputSchema).optional()
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
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  collectionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  sizes: z.lazy(() => EnumSizeNullableListFilterSchema).optional()
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

export const ColorCreateWithoutProductInputSchema: z.ZodType<Prisma.ColorCreateWithoutProductInput> = z.object({
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string()
}).strict();

export const ColorUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ColorUncheckedCreateWithoutProductInput> = z.object({
  id: z.number().int().optional(),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  reference: z.string()
}).strict();

export const ColorCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ColorCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => ColorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColorCreateWithoutProductInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema) ]),
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

export const ColorUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ColorUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ColorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ColorUpdateWithoutProductInputSchema),z.lazy(() => ColorUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => ColorCreateWithoutProductInputSchema),z.lazy(() => ColorUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const ColorUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ColorUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ColorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ColorUpdateWithoutProductInputSchema),z.lazy(() => ColorUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const ColorUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ColorUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => ColorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ColorUpdateManyMutationInputSchema),z.lazy(() => ColorUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export const ColorScalarWhereInputSchema: z.ZodType<Prisma.ColorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ColorScalarWhereInputSchema),z.lazy(() => ColorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorScalarWhereInputSchema),z.lazy(() => ColorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reference: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductCreateWithoutColorsInputSchema: z.ZodType<Prisma.ProductCreateWithoutColorsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutProductsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutColorsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutColorsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  categoryId: z.number().int(),
  collectionId: z.number().int(),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutColorsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutColorsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutColorsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema) ]),
}).strict();

export const ProductUpsertWithWhereUniqueWithoutColorsInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutColorsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutColorsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutColorsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutColorsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutColorsInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutColorsInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutColorsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutColorsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutColorsInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutColorsInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutColorsInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutColorsInputSchema) ]),
}).strict();

export const ProductCreateWithoutCollectionInputSchema: z.ZodType<Prisma.ProductCreateWithoutCollectionInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductsInputSchema).optional(),
  colors: z.lazy(() => ColorCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCollectionInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  categoryId: z.number().int(),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  colors: z.lazy(() => ColorUncheckedCreateNestedManyWithoutProductInputSchema).optional()
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
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  collection: z.lazy(() => CollectionCreateNestedOneWithoutProductsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutProductsInputSchema).optional(),
  colors: z.lazy(() => ColorCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  collectionId: z.number().int(),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  colors: z.lazy(() => ColorUncheckedCreateNestedManyWithoutProductInputSchema).optional()
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
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  colors: z.lazy(() => ColorUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  colors: z.lazy(() => ColorUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutTagsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutTagsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
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

export const ColorUpdateWithoutProductInputSchema: z.ZodType<Prisma.ColorUpdateWithoutProductInput> = z.object({
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ColorUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ColorUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateManyWithoutProductInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUpdateWithoutColorsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutColorsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutColorsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutColorsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutColorsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutColorsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
}).strict();

export const ProductCreateManyCollectionInputSchema: z.ZodType<Prisma.ProductCreateManyCollectionInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  categoryId: z.number().int(),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
}).strict();

export const ProductUpdateWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCollectionInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutProductsNestedInputSchema).optional(),
  colors: z.lazy(() => ColorUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCollectionInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  colors: z.lazy(() => ColorUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutCollectionInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCollectionInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
}).strict();

export const ProductCreateManyCategoryInputSchema: z.ZodType<Prisma.ProductCreateManyCategoryInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  title: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  description: z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),
  currentPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  previousPrice: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  inPromotion: z.boolean(),
  fitting: z.lazy(() => FittingSchema),
  style: z.lazy(() => StyleSchema),
  image: z.string(),
  quantity: z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),
  collectionId: z.number().int(),
  sizes: z.union([ z.lazy(() => ProductCreatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
}).strict();

export const ProductUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCategoryInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  collection: z.lazy(() => CollectionUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutProductsNestedInputSchema).optional(),
  colors: z.lazy(() => ColorUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  colors: z.lazy(() => ColorUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string().min(0, { message: "Minimum 0 characters" }).max(1000, { message: "Maximum 1000 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  currentPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  previousPrice: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inPromotion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  fitting: z.union([ z.lazy(() => FittingSchema),z.lazy(() => EnumFittingFieldUpdateOperationsInputSchema) ]).optional(),
  style: z.union([ z.lazy(() => StyleSchema),z.lazy(() => EnumStyleFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int({ message: "Must be an integer" }).gte(0, { message: "Minimum 0" }),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  collectionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sizes: z.union([ z.lazy(() => ProductUpdatesizesInputSchema),z.lazy(() => SizeSchema).array() ]).optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const TagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TagFindUniqueOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const ColorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ColorFindUniqueOrThrowArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const CollectionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CollectionFindUniqueOrThrowArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const TagUpsertArgsSchema: z.ZodType<Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
  update: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const TagUpdateArgsSchema: z.ZodType<Prisma.TagUpdateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
  where: TagWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict() ;

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict() ;

export const ColorCreateArgsSchema: z.ZodType<Prisma.ColorCreateArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  data: z.union([ ColorCreateInputSchema,ColorUncheckedCreateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const ColorUpsertArgsSchema: z.ZodType<Prisma.ColorUpsertArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema,
  create: z.union([ ColorCreateInputSchema,ColorUncheckedCreateInputSchema ]),
  update: z.union([ ColorUpdateInputSchema,ColorUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const ColorUpdateArgsSchema: z.ZodType<Prisma.ColorUpdateArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  data: z.union([ ColorUpdateInputSchema,ColorUncheckedUpdateInputSchema ]),
  where: ColorWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const CollectionUpsertArgsSchema: z.ZodType<Prisma.CollectionUpsertArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  where: CollectionWhereUniqueInputSchema,
  create: z.union([ CollectionCreateInputSchema,CollectionUncheckedCreateInputSchema ]),
  update: z.union([ CollectionUpdateInputSchema,CollectionUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const CollectionUpdateArgsSchema: z.ZodType<Prisma.CollectionUpdateArgs> = z.object({
  select: CollectionSelectSchema.optional(),
  include: CollectionIncludeSchema.optional(),
  data: z.union([ CollectionUpdateInputSchema,CollectionUncheckedUpdateInputSchema ]),
  where: CollectionWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
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
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
  relationLoadStrategy: RelationLoadStrategySchema.optional(),
}).strict() ;

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict() ;

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict() ;