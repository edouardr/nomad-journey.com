import { Router } from 'express'
import destinationsRouter from './destinations'
import landingPageRouter from './landing-page'
import navigationRouter from './navigation'

const router = Router()

router.use(destinationsRouter)
router.use(landingPageRouter)
router.use(navigationRouter)

export default router
