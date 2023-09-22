const getImageURL = (item, fileName = "poster", width = 240, height = 340) =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[fileName]
  }?w=${width}&h=${height}`;

export default getImageURL;
