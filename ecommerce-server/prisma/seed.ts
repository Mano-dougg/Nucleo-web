import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {

  const seededUsers = await prisma.user.createMany({
    data: [
      {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'adminSecret123',
        role: 'ADMIN'
      },
      {
        name: 'user',
        email: 'user@user.com',
        password: 'userSecret123',
        role: 'USER'
      },
      {
        name: 'fernando',
        email: 'fernando@user.com',
        password: 'fernandoSecret123',
        role: 'USER'
      }
    ]
  })

  console.log('Users created:');
  console.table(seededUsers);

  const seededColors = await prisma.color.createMany({
    data: [
      {
        name: 'Vermelho',
        reference: '#FF0000',
      },
      {
        name: 'Verde',
        reference: '#00580',
      },
      {
        name: 'Azul',
        reference: '#0009FF',
      },
      {
        name: 'Preto',
        reference: '#000000',
      },
      {
        name: 'Branco',
        reference: '#FFFFFF',
      }
    ]
  })

  console.log('Colors created:');
  console.table(seededColors);

  const seededCollections = await prisma.collection.createMany({
    data: [
      {
        name: 'Inverno',
        image: 'https:unsplash.com/photos/portrait-of-a-beautiful-young-woman-wearing-scarf-and-a-a-hat-on-a-cold-winter-day-during-snow-tZ-pasLvANs'
      },
      {
        name: 'Verão',
        image: 'https:unsplash.com/photos/woman-walking-on-seaside-while-holding-woven-bag-68csPWTnafo'
      }
    ]
  })

  console.log('Collections created:');
  console.table(seededCollections);

  const seededCategories = await prisma.category.createMany({
    data: [
      {
        name: 'Calças',
        image: 'https://s3-alpha-sig.figma.com/img/09c2/81a3/756c2094e2e5e93133bb2bab57abfb1e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ijDnTAXwJsQoT~GpzwWLXJCbQw92umqmV64GfYDb~pV~6qvbZIRPCrocWBvsOuWfcjwcXzbhmjRVnDBeyuE96FK3eJGqxhS6RnVuQNPpIl6Z9z0X2FBFF8STumvKUh1H2lU93HzojmmemN6yHE7vMU1XgmpbWYdghSOvbXcgf2AilguIbOy8mOxfgh8crF09jJ~QJBC5DVyoZFhXVSY7rHdjNqRqXQo4ZAjnKUXOoTgQ9Jc6Koglf2u4mGGqDMPCHkTn-CD0gsi5nyGiFiosGd8slg74EIXjEOB4iQ0ujhUp3CNkGtbp123KU50gGPXd~1xh48lvo3KXhpeeTEHXiw__'
      },
      {
        name: 'Blusas',
        image: 'https://s3-alpha-sig.figma.com/img/5a7f/4f09/ce9ada11cfbd5ab9af8a077b90986339?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PVuzFHOJkywIEruaGEAwuuv1Nf94oNBPYQhtBTdY4VthjaCVxPaMu4OYD7FGmVDB0XJAWmewSJV5VY~KWRBCz74tfE3dhquhGJ~mnNm60GrlrEGekaOsh85-S7EJJy5U7Rdy4yeYQ6b5SneZ-vBtWzF4LV9fF-UpfvRgVyJ0aBfiq3GEJg~SUVe2he6AbjIbBZMMoMuIwO0~ioXH3K~Ty2LYNL2Y6wbCTw6UnJfAogxb37oZf-KlcO3JPP7r8ISVgzvrC7CUfZJPP3T9Q42RUBNUwBju7N3g58xs-TjS5F6Pr9omBi1uRfu7tG4SD5U6d1q7fegEZM9WAVsGJkwh-w__'
      },
      {
        name: 'Jaquetas',
        image: 'https://s3-alpha-sig.figma.com/img/8c78/c0dd/22ca6a82091ddff2c0fe9854a74f6802?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhPxpVp6thZrnAoJ4zBJ5BXdFxAstdVMtOPG6N9YxNw81P3~An0nj2Uu1lU43-zqIrDF4fYmhgbAr-w7JaY7k8WTiMSoqKZhx~P3floTM7ICAf2DiNaUODEQCfsbYEght-7WaIQUNX3LL3s7N4kBE0iBylq5K1BshNASJQrzEqJ1ZuIT-eiA0mqWGGgNHA7cgupJCObuBYw6c5zSDtTtFxvmEfR6jo1YV~-ptOwhLKZxTqBqi0KWZE9bJ-r2amIiwBoEtLLXb0WrTMyPFt1LfDqDjwsCmym8ECY6XX0JK9qzyrWfmAr1TyAu3tYSmNrjQGZkY0ZPIT1Tj3Bu9pqGfw__'
      },
      {
        name: 'Vestidos',
        image: 'https://s3-alpha-sig.figma.com/img/fe4f/ffb5/06cf29fda9a8633a04dd495286018236?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYgHnbM7XLM7dYCeXncvJqvyqlv5kSjQ738OMttN-DK6Xzh5ohnid0e3Sqa77K2b9046Fic7vEbggJgQcJtxv~VIO7oY9f128DmbueW6ayGn5WykipTTSDcMxMLylc8cSlFw~yZUUK4heJfbFkF6pBASsp1MiMtHA9pwdfKlN3Y8WDLmXc6XRhZ0wiQqyFuvOUAAn4Pog~Wx7DUu-WshbmN0O4k9UMRvDVxbDiJDY7F6ch3MVFi2B5gnh31S4laTdzoKxIhsfAs1mtGQ4AUOFEQ~Z2wawys2w~OZSp76tn7GWXGctAQg4oEsqsZKGg1V3n968MNVKJ367~Y2e4Xuvw__'
      },
    ]
  })

  console.log('Categories created:');
  console.table(seededCategories);

  const camFem = await prisma.product.create({
    data: {
      title: 'Camisa feminina de manga curta',
      description: 'Camisa feminina de manga curta',
      currentPrice: 4899,
      previousPrice: 6000,
      inPromotion: false,
      categoryId: 2,
      collectionId: 2,
      fitting: 'SKINNY',
      style: 'STREET',
      image: 'https:unsplash.com/photos/woman-leaning-on-wall-TjOtIMl2LFE',
      sizes: [ 'P', 'M', 'G', 'GG' ],
      quantity: 10,
      colors: {
        connect: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]
      }
    }
  });

  const calMasc = await prisma.product.create({
    data: {
      title: 'Calça masculina estampada',
      description: 'Calça masculina estampada',
      currentPrice: 12999,
      previousPrice: 22999,
      inPromotion: false,
      categoryId: 1,
      collectionId: 2,
      fitting: 'LOOSE',
      style: 'CASUAL',
      image: 'https:unsplash.com/photos/person-wearing-orange-and-blue-low-top-sneakers-0q_tROKZ9ek',
      sizes: [ 'P', 'M', 'G', 'GG' ],
      quantity: 10,
      colors: {
        connect: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]
      }
    },
  });

  const jaqFem = await prisma.product.create({
    data: {
      title: 'Jaqueta jeans feminina',
      description: 'Jaqueta jeans feminina',
      currentPrice: 14999,
      previousPrice: 24999,
      inPromotion: false,
      categoryId: 3,
      collectionId: 2,
      fitting: 'OVERSIZE',
      style: 'SOCIAL',
      image: 'https:unsplash.com/photos/woman-holding-denim-jacket--r4n8oBR_-Y',
      sizes: [ 'P', 'M', 'G', 'GG' ],
      quantity: 10,
      colors: {
        connect: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]
      }
    }
  });

  const vestFlor = await prisma.product.create({
    data: {
      title: 'Vestido floral',
      description: 'Vestido floral',
      currentPrice: 14999,
      previousPrice: 24999,
      inPromotion: false,
      categoryId: 4,
      collectionId: 1,
      fitting: 'SLIMFIT',
      style: 'SENSUAL',
      image: 'https:unsplash.com/photos/woman-wearing-black-sunglasses-standing-near-white-wooden-wall-lSLq_xQdFNI',
      sizes: [ 'P', 'M', 'G', 'GG' ],
      quantity: 10,
      colors: {
        connect: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]
      }
    },
  });

  const molEst = await prisma.product.create({
    data: {
      title: 'Moleton Feminino',
      description: 'Moleton Feminino',
      currentPrice: 12000,
      previousPrice: 22000,
      inPromotion: true,
      categoryId: 3,
      collectionId: 2,
      fitting: 'OVERSIZE',
      style: 'CASUAL',
      image: 'https://s3-alpha-sig.figma.com/img/4329/56b6/14ac6a367998fd92026e8884c37007f3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GQXh3J2wjLtq3QGU5~ep~fYfPpzUKP6~QbjVSthRof9aWV0mSxaEnn5wBZ8Anfo2dTXVOoZL8dTMV6EwJdR1g41IzOOKt5OIOkNo8EUi5AbpSXrq55e4YLg4PN5OyQD0nzDVySdgWuv5KgCZlS7IGEw~2OoYew3EZfZ4W-UDcZz7hbCwhU8Tqe4Huc0aX6fkvxvZY4ygMaWAZH3gMFSsYloo4RuuQOrIE4TGIXsITuBo3~jgdmZupWMcB2~bNOpEUWam8FCz07b0e-kafXcowaXtuMbBgBJoPa31llrtKPrAgxiafW8kNiSmDIxv0fvmAFoozedmfnliUq3TY-KahQ__',
      sizes: [ 'P', 'M', 'G', 'GG' ],
      quantity: 10,
      colors: {
        connect: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ]
      }
    },
  })

  const vestLongo = await prisma.product.create({
    data: {
      title: 'Vestido longo',
      description: 'Vestido longo',
      currentPrice: 9000,
      previousPrice: 22000,
      inPromotion: true,
      categoryId: 4,
      collectionId: 1,
      fitting: 'SLIMFIT',
      style: 'SENSUAL',
      image: 'https://s3-alpha-sig.figma.com/img/23da/1385/ba3f0bcaff468f6d5df6840f967c7db1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eHvRuoS2xUfnxyUqSW2PrpsMPNBdTneyNYfjvR1lBv4nXSmZyJWVINoB39eFiHwsSS592ZkgMTxysKDq5fy0JM4uQldNTVtwaA4x9TcTFo7Ltn-iHQhE58S7TZIIsvW3siUtQqgS~SgQhO9kaNZvkgpARWoCgF8a05DVDmUFCXeR9VoeEtipvp48NlDmrXUBiktJsovVPWrdjTsxQau9Nmgp9ZgeXEqRrNigGGbWvkDISNWw5mJLlXsFZQXO5thZ4UnDzhZXWt-GReCgab2iHNMq7ueKaF143l5k5mqUO5SxEyZs~2c49kUrNHrkuuAk4DwU9ASwxszw7hjoH-qWTA__',
      sizes: [ 'P', 'M' ],
      quantity: 2,
      colors: {
        connect: [ { id: 1 } ],
      }
    },
  })

  const jaqCouro = await prisma.product.create({
    data: {
      title: 'Jaqueta de couro',
      description: 'Jaqueta de couro',
      currentPrice: 7000,
      previousPrice: 12000,
      inPromotion: true,
      categoryId: 3,
      collectionId: 2,
      fitting: 'LOOSE',
      style: 'SOCIAL',
      image: 'https://s3-alpha-sig.figma.com/img/ec8c/8f29/408545c949da0f4d6f39b3110e3c3e7d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SiyP0GiOznwwCd61DRUIROyr1tWx08U4GCRhR2pdaLuxUZ9gMG9QxnofTdL3pMaQKu~Nnfro8d5A-uxMQ1IDhnRsF683Zh6EIGgUeECYOW-HI-RkaSmsIgWeQOwkiIdWUn9FTRNEWHuMc6LnbmYCCObKx0maQA8nmWMHORWACDdwdMLuA3LwYT3X6MX~Hfk~Zh6jcE5~PzaY6X4HLuf96a1GDtRBBW4C6kBMkWQZEo9-N4zsXpcVA-vd-XBWohYxg4jdnoYsNiFtw9Dw1jpF4qlFx2o39Anpex6AFjhlyzH1OzkvyS3S3ISsFutzNIozASFyGnvRBoK414mxMslGiw__',
      sizes: [ 'M', 'G' ],
      quantity: 3,
      colors: {
        connect: [ { id: 4 } ],
      }
    },
  })

  const molFem = await prisma.product.create({
    data: {
      title: 'Moletom Feminino',
      description: 'Moletom Feminino',
      currentPrice: 10000,
      previousPrice: 22000,
      inPromotion: false,
      categoryId: 2,
      collectionId: 2,
      fitting: 'OVERSIZE',
      style: 'CASUAL',
      image: 'https://unsplash.com/photos/woman-in-red-knit-sweater-holding-white-ceramic-mug-Wor4E7biO9A',
      sizes: [ 'P', 'GG' ],
      quantity: 4,
      colors: {
        connect: [ { id: 1 } ],
      }
    },
  })

  console.log('Products created:');
  console.table([ camFem, calMasc, jaqFem, vestFlor, molEst, vestLongo, jaqCouro, molFem ]);

  console.log('Creating tags:');
  const seededInvernoTag = await prisma.tag.create({
    data: {
      title: 'Inverno',
      products: {
        connect: [ { id: 4 }, { id: 6 } ]
      }
    }
  })
  console.log(seededInvernoTag);

  const seededVeraoTag = await prisma.tag.create({
    data: {
      title: 'Verão',
      products: {
        connect: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 5 }, { id: 7 }, { id: 8 } ]
      }
    }
  })
  console.log(seededVeraoTag);

  const seededCamisasTag = await prisma.tag.create({
    data: {
      title: 'Camisas',
      products: {
        connect: [ { id: 1 }, { id: 8 } ]
      }
    }
  })
  console.log(seededCamisasTag);

  const seededCalcasTag = await prisma.tag.create({
    data: {
      title: 'Calças',
      products: {
        connect: [ { id: 2 } ]
      }
    }
  })
  console.log(seededCalcasTag);

  const seededJaquetasTag = await prisma.tag.create({
    data: {
      title: 'Jaquetas',
      products: {
        connect: [ { id: 3 }, { id: 7 } ]
      }
    }
  })
  console.log(seededJaquetasTag);

  const seededVestidosTag = await prisma.tag.create({
    data: {
      title: 'Vestidos',
      products: {
        connect: [ { id: 4 }, { id: 6 } ]
      }
    }
  })
  console.log(seededVestidosTag);

  const seededPromocaoTag = await prisma.tag.create({
    data: {
      title: 'Promoção',
      products: {
        connect: [ { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 } ]
      }
    }
  })
  console.log(seededPromocaoTag);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
