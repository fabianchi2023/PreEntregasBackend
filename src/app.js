import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js'
import config from './config/config.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express'
import __dirname from './utils/index.js';

const app = express()
const PORT = process.env.PORT
mongoose.connect(config.MongoUrl, 
    { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log('Conectado a la base Mongo DB')) 
    .catch(err => console.error('Error al intentar conectar a la base de Mongo DB:', err));

const swaggerOptions = {
    definition: {
        openapi:'3.0.1',
        info: {
            title: "Proyecto final API ADOPTME",
            description: "Documentacion de la API del proyecto final de BACKEND III, funcionalidad del router de USERS"
        },
        servers: [
            {
                url: `http://localhost:${8080}`
            }
        ]
    },
    //apis: [`${__dirname}/docs/**/*.yaml`]
    apis: ['./src/routes/users.router.js']
}
const specs = swaggerJSDoc(swaggerOptions)
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
