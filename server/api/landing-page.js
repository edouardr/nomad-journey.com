import { Router } from 'express'
import { LandingPageService } from '../services/landing-page-service'

const router = Router()
const service = new LandingPageService()

router.get('/landing-page/:lang/:codename', async (req, res, next) => {
  if (!req.params.codename || req.params.codename === '' || req.params.codename === 'null') {
    res.send(404)
  }

  const item = await service.get(req.params.lang, req.params.codename)
  res.json(item)
})

export default router
