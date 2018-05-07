import { Router } from 'express'
import { ArticleService } from '../services/article-service'

const router = Router()
const service = new ArticleService()

router.get('/articles/:lang/:slug', async (req, res, next) => {
  if (!req.params.slug || req.params.slug === '') {
    res.send(404)
  }

  const item = await service.get(req.params.lang, req.params.slug)
  res.json(item)
})

router.get('/articles/latest/:lang/:limit', async (req, res, next) => {
  const items = await service.getLatest(req.params.lang, req.params.limit)
  res.json(items)
})

export default router
