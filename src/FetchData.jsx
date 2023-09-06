import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_PB_API;
// const URL = "https://straight-alarm.pockethost.io/api/collections/tv/records";

function FetchData() {
  const [tvData, setTvData] = useState(null);

  useEffect(() => {
    fetch(`${URL}/collections/tv/records/?page=2&perPage=10`)
      .then((res) => res.json())
      .then((data) => setTvData(data));
  }, []);

  if (!tvData) return <div>loading...</div>;

  return (
    <>
      <h1>TV Shows</h1>
      <ul>
        {tvData &&
          tvData.items &&
          tvData.items.map((show) => (
            <li key={show.id}>
              {show.title}
              <img
                src={`${URL}/files/${show.collectionId}/${show.id}/${show.poster}?thumb=280x400`}
                alt="123"
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default FetchData;
