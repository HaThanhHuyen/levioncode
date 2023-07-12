import React, { useState, useEffect, useRef } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, updateDoc, query, where, collection, getDocs } from "firebase/firestore";
import { firebaseConfig } from "../login/firebase"; // Import your Firebase config

import "./Profile.css";
import upload from "../../image/upload.png";

function ImageUpload(props) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const filePickerRef = useRef(null);
  const [percent, setPercent] = useState(0);
  const [key, setKey] = useState(0); // Variable to refresh the component
  const [email, setEmail] = useState(props.email); // Use useState to track props.email

  useEffect(() => {
    const storedFileName = localStorage.getItem("selectedFileName");
    const storedImageUrl = localStorage.getItem("profileImageUrl");

    if (storedFileName && storedImageUrl) {
      setPreviewUrl(storedImageUrl);
    } else if (storedFileName) {
      const storage = getStorage();
      const storageRef = ref(storage, `/files/${storedFileName}`);
      getDownloadURL(storageRef)
        .then((url) => {
          setPreviewUrl(url);
          localStorage.setItem("profileImageUrl", url);
        })
        .catch((error) => {
          console.log("Error getting download URL: ", error);
        });
    }
  }, [key, email]); // Add email to the dependency list

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  const pickedHandler = (event) => {
    const pickedFile = event.target.files[0];
    setFile(pickedFile);
    setPreviewUrl(URL.createObjectURL(pickedFile));
    localStorage.setItem("selectedFileName", pickedFile.name);
    setKey((prevKey) => prevKey + 1); // Increase key value to refresh the component
  };

  async function handleUpload() {
    if (!file) {
      filePickerRef.current.click();
      return;
    }
  
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `users/${props.email}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setPercent(percent);
        },
        (error) => {
          console.error("Error uploading image:", error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("Image download URL:", downloadURL);
  
            const firestore = getFirestore();
            const userDocRef = doc(firestore, "users", props.email);
            await updateDoc(userDocRef, { image: downloadURL });
            console.log("Image updated successfully");
  
            // Save the URL to localStorage to persist after page reload
            localStorage.setItem("profileImageUrl", downloadURL);
  
            setPreviewUrl(downloadURL);
            setFile(null);
            localStorage.setItem("selectedFileName", "");
            setKey((prevKey) => prevKey + 1); // Increase key value to refresh the component
          } catch (error) {
            console.error("Error updating image in Firestore:", error);
          }
        }
      );


    } catch (error) {
      console.error("Error uploading image to Firestore:", error);
    }
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
          <button className="image-upload-button" type="button" onClick={handleUpload}>
            <img src={upload} alt="upload" />
            {previewUrl ? "Change Image" : "Upload Image"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
