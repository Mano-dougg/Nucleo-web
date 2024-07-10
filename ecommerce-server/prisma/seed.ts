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
        image: 'https:unsplash.com/photos/2-women-in-white-tank-top-and-blue-denim-jeans-standing-on-brown-field-during-daytime-Pdds9XsWyoM'
      },
      {
        name: 'Blusas',
        image: 'https:unsplash.com/photos/woman-standing-beside-wall-H8uf5ua5uW4'
      },
      {
        name: 'Jaquetas',
        image: 'https:unsplash.com/photos/calm-young-curly-man-in-street-style-leather-jacket-walking-and-smoking-FFYfj5w1P-g'
      },
      {
        name: 'Vestidos',
        image: 'https:unsplash.com/photos/stylish-woman-in-green-dress-enjoys-the-music-with-headphones-and-cell-phone-dancing-in-the-living-room-at-home-tKFjyL7Z6_M'
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
      title: 'Moletom estampado masculino',
      description: 'Moletom estampado masculino',
      currentPrice: 12000,
      previousPrice: 22000,
      inPromotion: true,
      categoryId: 3,
      collectionId: 2,
      fitting: 'OVERSIZE',
      style: 'CASUAL',
      image: 'https:unsplash.com/photos/man-wearing-gray-bomber-jacket-FN7IKFbyf0c',
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
      image: 'https://unsplash.com/photos/woman-wearing-red-spaghetti-strap-dress-SQZl2ykH7E8',
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
      image: 'https://unsplash.com/photos/woman-lying-on-white-wall-KA3BpKEI0kg',
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
      inPromotion: true,
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
