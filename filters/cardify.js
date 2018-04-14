export const cardify = (listItems, resolveListItemUrl, language, params) => {
  return listItems
    .filter((listItem) => {
      return listItem && listItem.tileTitle && listItem.tileThumbnail
    })
    .map((listItem) => {
      return {
        id: listItem.system.id,
        title: listItem.tileTitle.text,
        text: listItem.tileDescription.text,
        url: resolveListItemUrl(listItem, language, params),
        img: {
          url: listItem.tileThumbnail.assets.length ? listItem.tileThumbnail.assets[0].url : '',
          alt: listItem.tileThumbnail.assets.length ? listItem.tileThumbnail.assets[0].text : ''
        }
      }
    })
}
