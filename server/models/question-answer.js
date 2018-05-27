import { ContentItem } from 'kentico-cloud-delivery'
import { ContentTypes } from '../../content-types'

export class QuestionAnswer extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.QuestionAnswer.fields.answer) {
          return 'answer'
        }
        if (fieldName === ContentTypes.QuestionAnswer.fields.question) {
          return 'question'
        }
        return fieldName
      }
    })
  }
}
