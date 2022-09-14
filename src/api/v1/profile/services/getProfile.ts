import { DB } from '../types'

const getOneProfile = (db: DB) => async (phoneNumber: string) => {
  const profile = await db.findByPhone(phoneNumber)

  if (!profile) {
    throw new Error('Profile not found')
  }

  return profile
}

export default getOneProfile
