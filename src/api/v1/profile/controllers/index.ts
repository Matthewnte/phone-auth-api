import ProfileService from '../services'
import makeGetProfile from './getProfile'
import makePostProfile from './postProfile'
import makeUpdateProfile from './updateProfile'

const postProfile = makePostProfile(ProfileService.createProfile)
const getProfile = makeGetProfile(ProfileService.getProfile)
const updateProfile = makeUpdateProfile(ProfileService.updateProfile)

export default Object.freeze({
  postProfile,
  getProfile,
  updateProfile,
})
