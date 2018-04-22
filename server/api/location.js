import { Router } from 'express'
import { LocationService } from '../services/location-service'

const router = Router()
const service = new LocationService()

router.get('/location/current', async (req, res, next) => {
  const response = await service.getCurrentLocation()
  res.json(response.item)
})

export default router
