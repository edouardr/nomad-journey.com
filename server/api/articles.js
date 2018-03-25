import { Router } from 'express'
import { ArticleService } from '../services/article-service'

const router = Router()
const service = new ArticleService()

router.get('/articles/:lang/:slug', async (req, res, next) => {
  const response = await service.get(req.params.lang, req.params.slug)
  var cache = []
  let restoredObject = JSON.stringify(response.firstItem, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return
      }
      // Store value in our collection
      cache.push(value)
    }
    return value
  })
  cache = null // Enable garbage collection
  res.json(JSON.parse(restoredObject))
})

router.get('/articles/latest/:lang/:limit', async (req, res, next) => {
  const response = await service.getLatest(req.params.lang, req.params.limit)
  var cache = []
  let restoredObject = JSON.stringify(response.items, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return
      }
      // Store value in our collection
      cache.push(value)
    }
    return value
  })
  cache = null // Enable garbage collection
  res.json(JSON.parse(restoredObject))
})

export default router
