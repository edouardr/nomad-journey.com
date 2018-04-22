import { Router } from 'express'
import { JsonHelper } from '../helpers/json-helper'
import { DestinationService } from '../services/destination-service'

const helper = new JsonHelper()
const router = Router()
const service = new DestinationService()

router.get('/destinations/:lang', async (req, res, next) => {
  const response = await service.getAll(req.params.lang)
  res.json(JSON.parse(helper.removeCircularReferences(response.items)))
})

router.get('/destinations/getbyslug/:lang/:slug', async (req, res, next) => {
  const response = await service.getBySlug(req.params.lang, req.params.slug)
  res.json(JSON.parse(helper.removeCircularReferences(response.firstItem)))
})

router.get('/destinations/getbycode/:lang/:codename', async (req, res, next) => {
  const response = await service.getByCodename(req.params.lang, req.params.codename)
  res.json(JSON.parse(helper.removeCircularReferences(response.item)))
})

export default router
