import React, { useState } from "react";

function Heroines() {
  var [dispImgIndex, setDispImgIndex] = useState(0);
  var deepuImages = [
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1r0HcG.img?w=768&h=1152&m=6&x=362&y=455&s=500&d=500",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202501/archives-deepika-padukone-023514440-3x4.jpg?VersionId=pGSvOl25B7ooeFDnDw17lN4uWG.9_aEE",
    "https://filmfare.wwmindia.com/content/2025/may/thuuudeepikapadukone1748343163.jpg",
    "https://www.deccanchronicle.com/h-upload/2025/07/03/1934300-deepika.webp",
    "https://media.assettype.com/deccanherald%2F2025-07-03%2Fx885572n%2FDeepika-Padukone.jpg?w=undefined&auto=format%2Ccompress&fit=max",
  ];
  //   function dispImg(ind) {
  //     setDispImgIndex(ind);
  //   }
  function nextImage() {
    setDispImgIndex(dispImgIndex + 1);
  }
  function prevImage() {
    setDispImgIndex(dispImgIndex - 1);
  }
  return (
    <div>
      <h2>Heroines</h2>
      {/* <ul>
        {deepuImages.map((image, i) => {
          return (
            <img
              src={image}
              width="200px"
              height="200px"
              onClick={() => {
                dispImg(i);
              }}
            ></img>
          );
        })}
      </ul> */}
      <div className="w-50 border border-2 border-success">
        <img
          src={deepuImages[dispImgIndex]}
          alt=""
          style={{ minHeight: "200px", maxHeight: "400px" }}
        />
      </div>
      <button
        onClick={() => {
          prevImage();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          nextImage();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Heroines;
