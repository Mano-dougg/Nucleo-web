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
 
  const seededProducts = await prisma.product.createMany({
    data: [
      {
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
      },
      {
        title: 'Calça masculina estampada',
        description: 'Calça masculina estampada',
        currentPrice: 12999,
        previousPrice: 22999,
        inPromotion: false,
        categoryId: 1,
        collectionId: 2,
        fitting: 'LOOSE',
        style: 'CASUAL',
        image: 'https:unsplash.com/photos/person-wearing-orange-and-blue-low-top-sneakers-0q_tROKZ9ek'
      },
      {
        title: 'Jaqueta jeans feminina',
        description: 'Jaqueta jeans feminina',
        currentPrice: 14999,
        previousPrice: 24999,
        inPromotion: false,
        categoryId: 3,
        collectionId: 2,
        fitting: 'OVERSIZE',
        style: 'SOCIAL',
        image: 'https:unsplash.com/photos/woman-holding-denim-jacket--r4n8oBR_-Y'
      },
      {
        title: 'Vestido floral',
        description: 'Vestido floral',
        currentPrice: 14999,
        previousPrice: 24999,
        inPromotion: false,
        categoryId: 4,
        collectionId: 1,
        fitting: 'SLIMFIT',
        style: 'SENSUAL',
        image: 'https:unsplash.com/photos/woman-wearing-black-sunglasses-standing-near-white-wooden-wall-lSLq_xQdFNI'
      },
      {
        title: 'Moletom estampado masculino',
        description: 'Moletom estampado masculino',
        currentPrice: 12000,
        previousPrice: 22000,
        inPromotion: true,
        categoryId: 3,
        collectionId: 2,
        fitting: 'OVERSIZE',
        style: 'CASUAL',
        image: 'https:unsplash.com/photos/man-wearing-gray-bomber-jacket-FN7IKFbyf0c'
      },
    ]
  })
 
  console.log('Products created:');
  console.table(seededProducts);
 
  const seededProductItems = await prisma.productItem.createMany({
    data: [
      {
        sku: '0000001',
        quantity: 1,
        size: 'P',
        image: '',
        productId: 1,
        colorId: 1
      },
      {
        sku: '0000002',
        quantity: 2,
        size: 'M',
        image: '',
        productId: 1,
        colorId: 1
      },
      {
        sku: '0000003',
        quantity: 3,
        size: 'G',
        image: '',
        productId: 1,
        colorId: 1
      },
      {
        sku: '0000004',
        quantity: 4,
        size: 'GG',
        image: '',
        productId: 1,
        colorId: 1
      },
      {
        sku: '0000005',
        quantity: 1,
        size: 'P',
        image: '',
        productId: 1,
        colorId: 2
      },
      {
        sku: '0000006',
        quantity: 2,
        size: 'M',
        image: '',
        productId: 1,
        colorId: 2
      },
      {
        sku: '0000007',
        quantity: 3,
        size: 'G',
        image: '',
        productId: 1,
        colorId: 2
      },
      {
        sku: '0000008',
        quantity: 4,
        size: 'GG',
        image: '',
        productId: 1,
        colorId: 2
      },
    ]
 
  })
 
  console.log('Product items created:');
  console.table(seededProductItems);
 
 
  console.log('Creating tags:');
  const seededInvernoTag = await prisma.tag.create({
    data: {
      title: 'Inverno',
      products: {
        connect: [{ id: 2 }, { id: 3 }, { id: 5 }]
      }
    }
  })
  console.log(seededInvernoTag);
 
  const seededVeraoTag = await prisma.tag.create({
    data: {
      title: 'Verão',
      products: {
        connect: [{ id: 1 }, { id: 2 }, { id: 4 }]
      }
    }
  })
  console.log(seededVeraoTag);
 
  const seededCamisasTag = await prisma.tag.create({
    data: {
      title: 'Camisas',
      products: {
        connect: [{ id: 1 }]
      }
    }
  })
  console.log(seededCamisasTag);
 
  const seededCalcasTag = await prisma.tag.create({
    data: {
      title: 'Calças',
      products: {
        connect: [{ id: 2 }]
      }
    }
  })
  console.log(seededCalcasTag);
 
  const seededJaquetasTag = await prisma.tag.create({
    data: {
      title: 'Jaquetas',
      products: {
        connect: [{ id: 3 }]
      }
    }
  })
  console.log(seededJaquetasTag);
 
  const seededVestidosTag = await prisma.tag.create({
    data: {
      title: 'Vestidos',
      products: {
        connect: [{ id: 4 }]
      }
    }
  })
  console.log(seededVestidosTag);
 
  const seededPromocaoTag = await prisma.tag.create({
    data: {
      title: 'Promoção',
      products: {
        connect: [{ id: 5 }]
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
