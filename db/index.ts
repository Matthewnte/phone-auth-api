import 'dotenv/config'
import { makeDb } from '../src/api/v1/profile/dataAcess'

const setupDb = async () => {
  console.log('Setting up database...')
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  const db = await makeDb()
  const result = await db.collection('profiles').createIndex('phoneNumber')
  console.log(result)
  console.log('Database setup complete...')
  process.exit()
}

setupDb()
