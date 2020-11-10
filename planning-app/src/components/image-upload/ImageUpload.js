import React, { useState, useRef } from "react";

const ImageUpload = (props) => {
  const [image, setImage] = useState(null);
  const ref = useRef();

  const onChangeImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    props.onImageChange(ref.current.files[0].name, ref.current.files[0]);
  };

  return (
    <div>
      <input
        className="inline-selected-text"
        type="file"
        onChange={onChangeImage}
        alt="image"
        ref={ref}
      />
      {image ? <img className="sign-up-image" src={image} /> : null}
    </div>
  );
};

export default ImageUpload;
