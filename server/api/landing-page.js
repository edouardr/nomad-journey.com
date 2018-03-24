import { Router } from 'express'
import { LandingPageService } from '../services/landing-page-service'

const router = Router()
const service = new LandingPageService()

router.get('/landing-page/:lang/:codename', async (req, res, next) => {
  const response = await service.get(req.params.lang, req.params.codename)

  res.json(response.item)
})

export default router
