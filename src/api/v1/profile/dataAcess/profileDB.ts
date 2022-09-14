import { Profile } from '../types'

const makeProfileDb = ({ makeDb }: { makeDb: any }) => {
  const create = async (profileInfo: Profile): Promise<string> => {
    const db = await makeDb()
    await db.collection('profiles').insertOne({ ...profileInfo })
    return 'Profile successfully created'
  }

  const findByPhone = async (phoneNumber: string): Promise<Profile | null> => {
    const db = await makeDb()
    const result = await db.collection('profiles').find({ phoneNumber })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id, ...info } = found[0]
    return { ...info }
  }

  const update = async ({ phoneNumber, ...profileInfo }: Profile) => {
    const db = await makeDb()
    const result = await db
      .collection('profiles')
      .updateOne({ phoneNumber }, { $set: { ...profileInfo } })
    return result.modifiedCount > 0 ? { ...profileInfo } : null
  }

  return Object.freeze({
    findByPhone,
    create,
    update,
  })
}

export default makeProfileDb
