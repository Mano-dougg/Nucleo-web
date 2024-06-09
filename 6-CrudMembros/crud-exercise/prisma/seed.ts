import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
import { mockedUser } from "../utils/mocks/users/user.mock.factory";

const prisma = new PrismaClient()
async function main() {
  faker.seed(123);
  const QUANTITY = 10

  // Iterates QUANTITY times creating mocked users
  const mockedUsers = [ ...Array(QUANTITY).keys() ]
    .map((_) => mockedUser());

  console.table(mockedUsers);

  // Creates mocked users in the database
  mockedUsers.forEach(async (user) => {
    const newUser = await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    })
    console.log(`User created with id: ${newUser.id}`);
    console.table(newUser);
  });

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
