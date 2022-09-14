import admin from 'firebase-admin'

const serviceAccount = require('./fbServiceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export default admin
