const getImageURLThumbnail = (item, index, fileName = "poster") =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[fileName][index]
  }`;
export default getImageURLThumbnail;