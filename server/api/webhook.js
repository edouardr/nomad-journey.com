import { Symbols } from '../../constants'
import { Router } from 'express'
import { CacheService } from '../services/cache-service'

const router = Router()
const cacheService = new CacheService()

router.post('/webhook', async (req, res, next) => {
  const model = req.body
  switch (model.message.type) {
    case Symbols.WEBHOOK.TYPES.CONTENT_ITEM:
    case Symbols.WEBHOOK.TYPES.CONTENT_ITEM_VARIANT:
      switch (model.message.operation) {
        case Symbols.WEBHOOK.OPERATIONS.ARCHIVE:
        case Symbols.WEBHOOK.OPERATIONS.PUBLISH:
        case Symbols.WEBHOOK.OPERATIONS.UNPUBLISH:
        case Symbols.WEBHOOK.OPERATIONS.UPSERT:
          for (let item of model.data.items) {
            cacheService.invalidate({
              type: model.Message.Type,
              item: item
            })
          }
          break
        default:
          return res.sendStatus(200)
      }

      // For all other operations, return OK to avoid webhook re-submissions.
      return res.sendStatus(200)
    default:
      // For all other types of artifacts, return OK, for the same reason as above.
      return res.sendStatus(200)
  }
})

export default router
