import { ContentItem } from 'kentico-cloud-delivery'
import { ContentTypes } from '../../content-types'

export class YoutubeVideo extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.SnippetVideo.fields.id) {
          return 'id'
        }
        return fieldName
      },
      richTextResolver: contentItem => {
        return `
          <div class="js-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${contentItem.id.value}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        `
      }
    })
  }
}
