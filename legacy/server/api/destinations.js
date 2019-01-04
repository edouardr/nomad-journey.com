import { Router } from 'express'
import { DestinationService } from '../services/destination-service'

const router = Router()
const service = new DestinationService()

router.get('/destinations/:lang', async (req, res, next) => {
  const items = await service.getAll(req.params.lang)
  res.json(items)
})

router.get('/destinations/getbyslug/:lang/:slug', async (req, res, next) => {
  if (!req.params.slug || req.params.slug === '' || req.params.slug === 'null' || req.params.slug === 'undefined') {
    res.sendStatus(404)
  }

  const item = await service.getBySlug(req.params.lang, req.params.slug)
  res.json(item)
})

router.get('/destinations/getbycode/:lang/:codename', async (req, res, next) => {
  if (!req.params.codename || req.params.codename === '' || req.params.codename === 'null' || req.params.codename === 'undefined') {
    res.send(404)
  }

  const item = await service.getByCodename(req.params.lang, req.params.codename)
  res.json(item)
})

export default router
