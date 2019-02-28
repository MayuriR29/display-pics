import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(eachImage => {
    return <ImageCard key={eachImage.id} image={eachImage} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
