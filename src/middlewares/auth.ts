import { NextFunction, Request, Response } from 'express'
import admin from '../../firebase'

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  const token = authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'You must be logged in.' })
  }

  if (!authorization.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Malformed token.' })
  }

  const split = authorization.split('Bearer ')
  if (split.length !== 2) {
    return res.status(401).json({ error: 'Malformed token.' })
  }

  try {
    await admin.auth().verifyIdToken(token)
    return next()
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token.' })
  }
}
