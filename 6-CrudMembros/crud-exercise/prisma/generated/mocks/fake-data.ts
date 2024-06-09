import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    name: faker.person.fullName(),
    age: faker.number.int({min: 14, max: 130}),
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
    age: faker.number.int({min: 14, max: 130}),
    email: faker.internet.email(),
    password: faker.internet.password(10),
    state: faker.location.state({ abbreviated: true }),
    city: faker.location.city(),
  };
}
