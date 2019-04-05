import { Symbols } from '../../constants'
import { Router } from 'express'
import { ItineraryService } from '../services/itinerary-service'

const router = Router()
const service = new ItineraryService()

router.get('/itinerary/:lang', async (req, res, next) => {
  const item = await service.get(req.params.lang, Symbols.CODENAMES.ITINERARY)
  res.json(item)
})

export default router
