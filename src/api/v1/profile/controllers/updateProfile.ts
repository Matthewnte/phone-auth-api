import { Request, Response } from 'express'
import { ProfileService } from '../types'

const makeUpdateProfile =
  (updateProfile: ProfileService['update']) =>
  async (req: Request, res: Response) => {
    try {
      const { phoneNumber } = req.params
      const updatedProfile = await updateProfile(phoneNumber, req.body)
      return res.status(200).json(updatedProfile)
    } catch (error: any) {
      // TODO: Error logging
      console.log(error)
      return res.status(500).json({ error: error.message })
    }
  }

export default makeUpdateProfile
