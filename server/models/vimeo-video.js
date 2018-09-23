import { ContentItem } from 'kentico-cloud-delivery'
import { ContentTypes } from '../../content-types'

export class VimeoVideo extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.VimeoVideo.fields.id) {
          return 'id'
        }
        return fieldName
      },
      richTextResolver: contentItem => {
        return `
          <div class="js-video vimeo">
            <iframe src="https://player.vimeo.com/video/${contentItem.id.value}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        `
      }
    })
  }
}
