import { Router } from 'express'
import { NavigationService } from '../services/navigation-service'

const router = Router()
const service = new NavigationService()

router.get('/navigation/:lang', async (req, res, next) => {
  const response = await service.getAll(req.params.lang)
  res.json(response.items)
})

router.get('/navigation/item/:lang/:codename', async (req, res, next) => {
  const response = await service.getNavItem(req.params.lang, req.params.codename)
  res.json(response.item)
})

export default router
