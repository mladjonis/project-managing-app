import React, { useState, useRef } from "react";

const ImageUpload = (props) => {
  const [image, setImage] = useState(null);
  const ref = useRef();

  const onChangeImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    props.onImageChange(ref.current.files[0].name, ref.current.files[0]);
  };

  return (
    <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
        <input
          type="file"
          onChange={onChangeImage}
          alt="path is wrong, cant show"
          ref={ref}
        />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      {image ? (
        <img
          className="sign-up-image"
          src={image}
          alt="path is wrong, cant show"
        />
      ) : null}
    </div>
  );
};

export default ImageUpload;
