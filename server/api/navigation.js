import { Router } from 'express'
import { NavigationService } from '../services/navigation-service'

const router = Router()
const service = new NavigationService()

router.get('/navigation/:lang', async (req, res, next) => {
  const items = await service.getAll(req.params.lang)
  res.json(items)
})

router.get('/navigation/item/:lang/:codename', async (req, res, next) => {
  const item = await service.getNavItem(req.params.lang, req.params.codename)
  res.json(item)
})

export default router
