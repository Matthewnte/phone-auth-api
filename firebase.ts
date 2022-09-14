import admin from 'firebase-admin'
import { firebaseServiceAccount } from './src/config'

const serviceAccount = JSON.parse(
  Buffer.from(firebaseServiceAccount!, 'base64').toString('ascii'),
)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export default admin
