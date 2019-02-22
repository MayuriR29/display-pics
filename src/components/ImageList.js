import React from "react";
const ImageList = props => {
  const images = props.images.map((eachImage, id) => {
    return <img alt="" src={eachImage.urls.regular} key={eachImage.id} />;
  });
  return <div>{images}</div>;
};
export default ImageList;
