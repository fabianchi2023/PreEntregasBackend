import { Router } from 'express';
import generateMockingPets from '../utils/generateMockingPets.js'
import generateMockingUsers from '../utils/generateMockingUsers.js'
import { petsService, usersService } from '../services/index.js';

const router = Router()

router.get('/mockingpets', (req, res) => {
    const numPets = parseInt(req.query.num) || 100
    const mockingPets = generateMockingPets(numPets)
    res.send({ status: 'success', payload: mockingPets })
})

router.get('/mockingusers', async (req, res) => {
    const numUsers = parseInt(req.query.num) || 50
    const mockingUsers = await generateMockingUsers(numUsers)
    res.send({ status: 'success', payload: mockingUsers })
})

router.post('/generateData', async (req, res) => {
    const { users, pets } = req.body
    try {
      const generateUsers = await generateMockingUsers(users)
      const generatePets = await generateMockingPets(pets)
  
      await Promise.all([
        ...generateUsers.map(user => usersService.create(user)),
        ...generatePets.map(pet => petsService.create(pet))
    ])

    res.send({status: 'success', message: `Se han insertado ${users} usuarios y ${pets} mascotas a la DB`});

    } catch (error) {
      res.status(500).json({ error: 'Error al generar e insertar los datos en la DB', details: error })
    }
  })


export default router