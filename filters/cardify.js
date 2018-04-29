export const cardify = (listItems, resolveListItemUrl, language, params) => {
  return listItems
    .filter((listItem) => {
      return listItem && listItem.tileTitle && listItem.tileThumbnail
    })
    .map((listItem) => {
      return {
        id: listItem.system.id,
        img: {
          url: listItem.tileThumbnail.assets.length ? listItem.tileThumbnail.assets[0].url : '',
          alt: listItem.tileThumbnail.assets.length ? listItem.tileThumbnail.assets[0].text : ''
        },
        location: listItem.location ? listItem.location.text : '',
        text: listItem.tileDescription.text,
        title: listItem.tileTitle.text,
        url: resolveListItemUrl(listItem, language, params)
      }
    })
}
