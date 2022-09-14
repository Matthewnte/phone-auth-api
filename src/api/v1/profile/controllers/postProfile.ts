import { Request, Response } from 'express'
import { ProfileService } from '../types'

const makePostProfile =
  (createProfile: ProfileService['create']) =>
  async (req: Request, res: Response) => {
    try {
      const message = await createProfile(req.body)
      return res.status(201).json({ message })
    } catch (error: any) {
      // TODO: Error logging
      console.log(error)
      return res.status(500).json({ error: error.message })
    }
  }

export default makePostProfile
