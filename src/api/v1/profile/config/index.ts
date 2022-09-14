import 'dotenv/config'

export const database = {
  url: process.env.DB_URL,
  password: process.env.DB_PASSWORD,
  name: process.env.DM_PROFILE_DB_NAME,
  collectionName: {
    profile: process.env.PROFILE_COLLECTION_NAME,
  },
}
