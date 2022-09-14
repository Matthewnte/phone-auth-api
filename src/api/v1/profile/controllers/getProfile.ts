import { Request, Response } from 'express'
import { ProfileService } from '../types'

const makeGetProfile =
  (getProfile: ProfileService['get']) =>
  async (req: Request, res: Response) => {
    try {
      const { phoneNumber } = req.params

      const profile = await getProfile(phoneNumber)

      return res.status(200).json(profile)
    } catch (error: any) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  }

export default makeGetProfile
