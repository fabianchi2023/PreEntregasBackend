import { faker } from '@faker-js/faker'

const generateMockingPets = (numPets) => {
    let pets = []
    for (let i = 0; i < numPets; i++) {
        pets.push({
            name: faker.animal.petName(),
            specie: faker.animal.type(),
            birthDate: faker.date.past(5),
            adopted: false,
            owner: null,
            image: faker.image.urlLoremFlickr({ category: 'pets' })
        })
    }
    return pets
}

export default generateMockingPets