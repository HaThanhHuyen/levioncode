import React, { useState, useEffect, useRef } from "react";

import "./Profile.css";
import upload from "../../image/upload.png";
function ImageUpload(props) {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  function pickedHandler(event) {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    //   props.setData((prev )=>{
    //     return{...prev, image:pickedFile}
    //   })
    }
  }
  
  function pickedImageHandler() {
    filePickerRef.current.click();
  }
  return (
    <div className="uploadImg">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="preview" />}
          {!previewUrl && (
            <button
              className="image-upload-button"
              type="button"
              onClick={pickedImageHandler}
            >
              <img src={upload} alt="upload"></img>
              Upload image
            </button>
          )}
        </div>
        <div>
          {previewUrl && (
            <div className="center">
            <button
              className="image-upload-button"
              type="button"
              onClick={pickedImageHandler}
            >
              <img src={upload} alt="upload"></img>
              Upload image
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ImageUpload;
