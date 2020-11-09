import { useState } from "react";
import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const onChangeImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <input type="file" onChange={onChangeImage} />
      <img src={image} />
    </div>
  );
};

export default ImageUpload;
