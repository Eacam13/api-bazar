import express from "express";
import "express-async-errors"
import cors from 'cors'

import { router } from "./routes";
import { AppError, errorHandler } from "./middlewares/errorHandler";
import fileUpload from "express-fileupload";
import { swaggerUi, swaggerDocs } from './swaggerUi';

const app = express()

app.use(express.json())
app.use(cors())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(router)

app.use(errorHandler)

app.listen(process.env.PORT || 3333, ()=> console.log(`Servidor online na porta ${process.env.PORT || 3333}`))