const getImageURL = (item, fileName = "poster") =>
  `${import.meta.env.VITE__API}/files/${item.collectionId}/${item.id}/${
    item[fileName]
  }`;
export default getImageURL;
