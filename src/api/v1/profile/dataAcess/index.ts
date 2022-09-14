import { MongoClient } from 'mongodb'
import { database } from '../config'
import makeProfileDb from './profileDB'

const uri = database.url!.replace('<password>', database.password!)
const dbName = database.name
const client = new MongoClient(uri)

export const makeDb = async () => {
  const db = client.db(dbName) // Create a new Db instance sharing the current socket connections.

  return db
}

const profileDb = makeProfileDb({ makeDb })
export default profileDb
