import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const revolo = await prisma.user.upsert({
    where: { email: 'revolo6646@exeneli.com' },
    update: {},
    create: {
      id: 'clxtdewyz00003eddpdsvnunz',
      email: 'revolo6646@exeneli.com',
      name: 'Revolo',
      password: 'Revolo6646@exeneli.com',
      tmdbId: '21339520'
    },
  })
  const fernando = await prisma.user.upsert({
    where: { email: 'fernando@teste.com' },
    update: {},
    create: {
      email: 'fernando@teste.com',
      name: 'Fernando',
      password: '1234'
    },
  })
  console.log({ revolo, fernando })
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
