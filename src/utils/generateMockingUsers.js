import { faker } from '@faker-js/faker';
import { createHash } from './index.js'

const generateMockingUsers = async (numUsers) => {
    const users = []
    for (let i = 0; i < numUsers; i++) {
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: await createHash('coder123'),
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: []
        })
    }
    return users
}

export default generateMockingUsers