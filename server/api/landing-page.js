import { Router } from 'express'
import { JsonHelper } from '../helpers/json-helper'
import { LandingPageService } from '../services/landing-page-service'

const helper = new JsonHelper()
const router = Router()
const service = new LandingPageService()

router.get('/landing-page/:lang/:codename', async (req, res, next) => {
  const response = await service.get(req.params.lang, req.params.codename)
  res.json(JSON.parse(helper.removeCircularReferences(response.item)))
})

export default router
