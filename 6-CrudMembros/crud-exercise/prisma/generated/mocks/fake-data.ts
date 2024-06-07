import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';

export function fakeUser() {
  return {
    name: faker.person.fullName(),
    age: faker.number.int({min: 0, max: 99}),
    email: faker.internet.email(),
    password: faker.internet.password(10),
    state: faker.location.state({ abbreviated: true }),
    city: faker.location.city(),
  };
}

export function fakeUserComplete() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    age: faker.number.int({min: 0, max: 99}),
    email: faker.internet.email(),
    password: faker.internet.password(10),
    state: faker.location.state({ abbreviated: true }),
    city: faker.location.city(),
  };
}
