import makeProfile from '../entity'
import { DB, Profile } from '../types'

export default (profileDb: DB) => async (profileInfo: Profile) => {
  const profile = makeProfile(profileInfo)
  // return existing profile if user already has a profile
  const exist = await profileDb.findByPhone(profile.getPhoneNumber())
  if (exist) {
    return exist
  }
  // save profile to DB
  return profileDb.create({
    phoneNumber: profile.getPhoneNumber(),
    name: profile.getName(),
    email: profile.getEmail(),
  })
}
