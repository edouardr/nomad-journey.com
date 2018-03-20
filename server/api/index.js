import { Router } from 'express'
import landingPageRouter from './landing-page'
import navigationRouter from './navigation'

const router = Router()

router.use(landingPageRouter)
router.use(navigationRouter)

export default router
