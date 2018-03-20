import { Router } from 'express'
import landingPage from './landing-page'

const router = Router()

router.use(landingPage)

export default router
