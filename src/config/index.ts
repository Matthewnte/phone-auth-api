import 'dotenv/config'

export const PORT = process.env.PORT || 3000
export const firebaseServiceAccount =
  process.env.FIREBASE_SERVICE_ACCOUNT_BASE64
