import cors from 'cors'
import express, { Request, Response } from 'express'
import logger from 'morgan'
import v1Router from './router'

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.get('/health', (req: Request, res: Response) => res.json({ status: 'ok' }))

app.use('/api/v1', v1Router)

export default app
