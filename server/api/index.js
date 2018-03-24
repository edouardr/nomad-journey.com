import { Router } from 'express'
import articlesRouter from './articles'
import destinationsRouter from './destinations'
import landingPageRouter from './landing-page'
import navigationRouter from './navigation'

const router = Router()

router.use(articlesRouter)
router.use(destinationsRouter)
router.use(landingPageRouter)
router.use(navigationRouter)

export default router
