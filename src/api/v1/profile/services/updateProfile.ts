import makeProfile from '../entity'
import { DB, Profile } from '../types'

const updateProfile =
  (profileDb: DB) => async (phoneNumber: string, profileInfo: Profile) => {
    if (!profileInfo.name) throw new Error('Name is required')
    if (!profileInfo.email) throw new Error('Email is required')

    const existingProfile = await profileDb.findByPhone(phoneNumber)
    if (!existingProfile) {
      throw new Error('Profile not found')
    }

    const profile = makeProfile({ ...existingProfile, ...profileInfo })

    return profileDb.update({
      name: profile.getName(),
      email: profile.getEmail(),
      phoneNumber: profile.getPhoneNumber(),
    })
  }

export default updateProfile
