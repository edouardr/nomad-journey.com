import { Router } from 'express'
import aboutUsRouter from './about-us'
import articlesRouter from './articles'
import destinationsRouter from './destinations'
import itineraryRouter from './itinerary'
import locationRouter from './location'
import landingPageRouter from './landing-page'
import navigationRouter from './navigation'

const router = Router()

router.use(aboutUsRouter)
router.use(articlesRouter)
router.use(destinationsRouter)
router.use(itineraryRouter)
router.use(locationRouter)
router.use(landingPageRouter)
router.use(navigationRouter)

export default router
