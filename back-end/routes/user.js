import { Router } from 'express'
const router = Router()
import { getSidebarUsers } from '../controllers/user.js'
import { checkAuthCookie } from '../middleware/auth.js'

router.get('/', checkAuthCookie('jwt'), getSidebarUsers)

export default router
