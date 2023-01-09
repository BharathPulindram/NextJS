function images() {
  const imageArr = ["image1", "image2", "image3", "image4", "image5"];
  return (
    <>
      {imageArr.map((path) => (
        <div key={path}>
          <img src={`/${path}.jpg`} alt="pic" width="280" height="420"></img>
        </div>
      ))}
    </>
  );
}

export default images;
