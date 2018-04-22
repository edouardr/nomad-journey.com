import { Router } from 'express'
import { LandingPageService } from '../services/landing-page-service'

const router = Router()
const service = new LandingPageService()

router.get('/landing-page/:lang/:codename', async (req, res, next) => {
  const response = await service.get(req.params.lang, req.params.codename)
  var cache = []
  let restoredObject = JSON.stringify(response.item, function (key, value) {
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
