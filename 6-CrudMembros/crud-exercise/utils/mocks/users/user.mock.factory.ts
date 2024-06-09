import { faker } from '@faker-js/faker';
import { User } from '../../../prisma/generated/zod';
import { fakeUser } from '../../../prisma/generated/mocks/fake-data';

export function mockedUser(): Omit<User, "id"> {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });

  return {
    ...fakeUser(),
    name: `${firstName} ${lastName}`,
    email,
  };
}
