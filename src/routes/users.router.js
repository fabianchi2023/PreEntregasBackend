import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

router.get('/',usersController.getAllUsers);

router.get('/:uid',usersController.getUser);
router.put('/:uid',usersController.updateUser);
router.delete('/:uid',usersController.deleteUser);

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *                  description: ID mongo del usuario
 *              first_name: 
 *                  type: string
 *                  description: Nombre del usuario
 *              last_name:
 *                  type: string
 *                  description: Apellido del usuario
 *              email:
 *                  type: string
 *                  description: Email del usuario
 *          example:
 *              _id: 1abcJHasd12ewdlñasdkasasd
 *              first_name: Fabio
 *              last_name: Bianchi
 *              email: fabio@bianchi.com
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene la lista completa de usuarios.
 *     tags: 
 *       - User
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/users/{uid}:
 *  get:
 *      summary: Obtiene un usuario por su ID de mongo
 *      tags: 
 *          - User
 *      parameters: 
 *          - in: path
 *            name: uid
 *            required: true
 *            schema:
 *              type: string
 *            description: Id del usuario a buscar.
 *      responses:
 *          200:
 *              description: Usuario encontrado correctamente.
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#components/schemas/User'
 *          404:
 *              description: Usuario no encontrado en la mongo DB.
 *  put:
 *      summary: Actualizar al usuario ingresado por el params.
 *      tags:
 *          - User
 *      parameters:
 *          - in: path
 *            name: uid
 *            required: true
 *            description: ID del usuario a actualizar
 *            schema: 
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Usuario actualizado correctamente.
 *          404:
 *              description: Usuario no encontrado en la mongo DB.
 *   
 *  delete:
 *      summary: Eliminar el usuario por su ID de mongo.
 *      tags:
 *          - User
 *      parameters: 
 *          - in: path
 *            name: uid
 *            schema:
 *              type: string
 *            required: true
 *            description: ID del usuario a elimminar
 *      responses:
 *          200:
 *              description: Usuario eliminado correctamente.
 *          404:
 *              description: Usuario no encontrado en la mongo DB.
 *             
 */


export default router;