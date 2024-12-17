import dotenv from 'dotenv'

dotenv.config();

export default {
    Port: process.env.PORT,
    MongoUrl: process.env.MONGO_URI
}

