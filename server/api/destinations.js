import { Router } from 'express'
import { DestinationsService } from '../services/destinations-service'

const router = Router()
const service = new DestinationsService()

router.get('/destinations/:lang', async (req, res, next) => {
  const response = await service.getAll(req.params.lang)
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

router.get('/destinations/:lang/:slug', async (req, res, next) => {
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

export default router
