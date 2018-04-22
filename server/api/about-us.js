import { Router } from 'express'
import { JsonHelper } from '../helpers/json-helper'
import { AboutService } from '../services/about-service'
import { Symbols } from '../../constants'

const helper = new JsonHelper()
const router = Router()
const service = new AboutService()

router.get('/about-us/:lang', async (req, res, next) => {
  const { item } = await service.get(req.params.lang, Symbols.CODENAMES.ABOUT_US)
  res.json(JSON.parse(helper.removeCircularReferences(item)))
})

export default router
