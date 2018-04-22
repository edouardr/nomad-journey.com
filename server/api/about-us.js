import { Router } from 'express'
import { AboutService } from '../services/about-service'
import { Symbols } from '../../constants'

const router = Router()
const service = new AboutService()

router.get('/about-us/:lang', async (req, res, next) => {
  const {item} = await service.get(req.params.lang, Symbols.CODENAMES.ABOUT_US)
  var cache = []
  let restoredObject = JSON.stringify(item, function (key, value) {
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
