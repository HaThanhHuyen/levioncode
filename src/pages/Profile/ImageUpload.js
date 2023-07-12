import React, { useState, useEffect, useRef } from "react";
import { storage } from "../login/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./Profile.css";
import upload from "../../image/upload.png";

function ImageUpload(props) {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();
  const [percent, setPercent] = useState(0);
  const [uploadImg, setUploadImg] = useState("");

  useEffect(() => {
    const storedFileName = localStorage.getItem("selectedFileName");
    if (storedFileName) {
      const storageRef = ref(storage, `/files/${storedFileName}`);
      getDownloadURL(storageRef)
        .then((url) => {
          setPreviewUrl(url);
        })
        .catch((error) => {
          console.log("Error getting download URL: ", error);
        });
    }
  }, []);

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
      localStorage.setItem("selectedFileName", pickedFile.name);
    }
    console.log("image name", pickedFile.name);
  }

  useEffect(() => {
    setUploadImg(localStorage.getItem("selectedFileName"));
  }, []);

  function pickedImageHandler() {
    filePickerRef.current.click();
  }

  function handleUpload() {
    if (!file) {
      alert("Please choose a file first");
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            console.log(url);
            // localStorage.removeItem("selectedFileName");
          })
          .catch((error) => {
            console.log("Error getting download URL: ", error);
          });
      }
    );
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
              <img src={upload} alt="upload" />
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
                onClick={handleUpload}
              >
                <img src={upload} alt="upload" />
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
