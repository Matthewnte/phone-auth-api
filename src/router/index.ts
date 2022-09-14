import { Router } from 'express'
import profileControllers from '../api/v1/profile/controllers'
import isAuth from '../middlewares/auth'

const router = Router()

router.post('/profiles', profileControllers.postProfile)
router.get('/profiles/:phoneNumber', isAuth, profileControllers.getProfile)
router.patch('/profiles/:phoneNumber', isAuth, profileControllers.updateProfile)

export default router
