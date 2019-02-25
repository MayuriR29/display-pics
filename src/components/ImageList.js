import React from "react";
import "./ImageList.css";
const ImageList = props => {
  const images = props.images.map(({ description, urls, id }) => {
    return (
      <img
        className="image-list"
        alt={description}
        src={urls.regular}
        key={id}
      />
    );
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
