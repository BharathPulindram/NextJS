import Image from "next/image";
import img from "../public/image1.jpg";
function images() {
  const imageArr = ["image1", "image2", "image3", "image4", "image5"];
  return (
    <>
      <Image src={img} alt="img" placeholder="blur" width="280" height="420" />
      {imageArr.map((path) => (
        <div key={path}>
          <Image src={`/${path}.jpg`} alt="pic" width="280" height="420" />
        </div>
      ))}
    </>
  );
}

export default images;
