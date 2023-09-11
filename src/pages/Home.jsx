// /src/pages/Home.jsx
// import pb from "@/api/pocketbase";
// import getImageURL from "@/utils/getImageURL";
import MainHeader from "@/layout/MainHeader/MainHeader";

// const bannerData = await pb.collection("banners").getList(1, 50);

function Home() {
  return (
    <div>
      <MainHeader />
      {/* <div>
        {bannerData.items &&
          bannerData.items.map((item) => (
            <img key={item.id} src={getImageURL(item, "banners")} alt="" />
          ))}
      </div> */}
    </div>
  );
}

export default Home;
