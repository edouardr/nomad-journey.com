import { Symbols } from '../../constants'
import { Router } from 'express'
import { JsonHelper } from '../helpers/json-helper'
import { ItineraryService } from '../services/itinerary-service'

const helper = new JsonHelper()
const router = Router()
const service = new ItineraryService()

router.get('/itinerary/:lang', async (req, res, next) => {
  const response = await service.get(req.params.lang, Symbols.CODENAMES.ITINERARY)
  res.json(JSON.parse(helper.removeCircularReferences(response.item)))
})

export default router
