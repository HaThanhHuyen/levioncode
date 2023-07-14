import React, { useState, useEffect, useRef } from "react";
import { storage } from "../login/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../login/firebase";
import "./Profile.css";
import upload from "../../image/upload.png";

function ImageUpload(props) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const filePickerRef = useRef();

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("uploadedImageUrl");
    if (storedImageUrl) {
      setPreviewUrl(storedImageUrl);
    }
  }, []);

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setPreviewUrl(URL.createObjectURL(pickedFile));
    }
  };

const updateUserImage = async (uid, downloadURL) => {
  const userDocRef = doc(db, "users", uid);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    await updateDoc(userDocRef, { image: downloadURL });
    console.log("User image updated successfully.");
  } else {
    console.log("User not found.");
  }
};


  const handleUpload = async () => {
    if (!file) {
      filePickerRef.current.click();
      return;
    }

    try {
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      const snapshot = await uploadTask;
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log(downloadURL);

      localStorage.setItem("uploadedImageUrl", downloadURL);

      updateUserImage(props.email, downloadURL);
    } catch (error) {
      console.log(error);
    }
  };

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
          <button
            className="image-upload-button"
            type="button"
            onClick={handleUpload}
          >
            <img src={upload} alt="upload" />
            {previewUrl ? "Change Image" : "Upload Image"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
