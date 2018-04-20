import { Router } from 'express'
import { JsonHelper } from '../helpers/json-helper'
import { ArticleService } from '../services/article-service'

const helper = new JsonHelper()
const router = Router()
const service = new ArticleService()

router.get('/articles/:lang/:slug', async (req, res, next) => {
  const response = await service.get(req.params.lang, req.params.slug)
  res.json(JSON.parse(helper.removeCircularReferences(response.firstItem)))
})

router.get('/articles/latest/:lang/:limit', async (req, res, next) => {
  const response = await service.getLatest(req.params.lang, req.params.limit)
  res.json(JSON.parse(helper.removeCircularReferences(response.items)))
})

export default router
