import 'reflect-metadata'
import { createConnection } from 'typeorm'
import app from './app'

createConnection()
    .then(async (connection) => {
        await connection.runMigrations()

        app.listen(3000, () => console.log('server running on port 3000'))
    })
    .catch((error) => console.log(error))

