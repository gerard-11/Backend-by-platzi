import {Faker,es,faker} from '@faker-js/faker'

const customFaker = new Faker({ locale: [es] });

export const users = Array.from({ length: 50 }, () => ({
    name: customFaker.person.firstName(),
    lastName: customFaker.person.lastName(),
    id: Math.random().toString(36).substring(2, 9),
}));

export const products=Array.from({ length: 50 }, () => ({
    name:faker.commerce.productName(),
    price:parseInt(faker.commerce.price(),10),
    image:faker.image.url(),
    categories:faker.commerce.department()
}))


