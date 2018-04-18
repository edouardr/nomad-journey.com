import { Symbols } from '../../constants'
import { Router } from 'express'
import { ItineraryService } from '../services/itinerary-service'

const router = Router()
const service = new ItineraryService()

router.get('/itinerary/:lang', async (req, res, next) => {
  const response = await service.get(req.params.lang, Symbols.CODENAMES.ITINERARY)
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
