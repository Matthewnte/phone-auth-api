import profileDb from '../dataAcess'
import makeCreateProfile from './createProfile'
import makeGetProfile from './getProfile'
import makeUpdateProfile from './updateProfile'

const createProfile = makeCreateProfile(profileDb)
const getProfile = makeGetProfile(profileDb)
const updateProfile = makeUpdateProfile(profileDb)

const profileService = Object.freeze({
  createProfile,
  getProfile,
  updateProfile,
})

export default profileService
export { createProfile, getProfile, updateProfile }
