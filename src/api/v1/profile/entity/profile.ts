import { Profile } from '../types'

const Profile = ({ name, email, phoneNumber }: Profile) => {
  if (!phoneNumber) throw new Error('Profile must have a phone number.')

  return Object.freeze({
    getName: () => name,
    getEmail: () => email,
    getPhoneNumber: () => phoneNumber,
  })
}

export default Profile
