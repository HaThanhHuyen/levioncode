import React, { useState, useEffect, useRef } from "react";
import { storage } from "../login/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../login/firebase";
import "./Profile.css";
import upload from "../../image/upload.png";

function ImageUpload(props) {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();
  const [percent, setPercent] = useState(0);
  const [key, setKey] = useState(0); // Biến đếm để làm mới component

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
  }, [key]); // Sử dụng biến key để làm mới ảnh khi có sự thay đổi

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
      setPreviewUrl(URL.createObjectURL(pickedFile));
      localStorage.setItem("selectedFileName", pickedFile.name);
      setKey((prevKey) => prevKey + 1); // Tăng giá trị key để làm mới component
    }
  }

  async function handleUpload() {
    if (!file) {
      filePickerRef.current.click();
      return;
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
      (error) => {
        console.log(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log(downloadURL);

        const usersCollectionRef = collection(db, "users");
        const q = query(usersCollectionRef, where("email", "==", props.email));
        const querySnapshot = await getDocs(q);
        const userDoc = querySnapshot.docs[0];
        if (userDoc) {
          await updateDoc(userDoc.ref, {
            image: downloadURL,
          });
          console.log("Image updated successfully");
        }

        setPreviewUrl(downloadURL);
        setFile(null);
        localStorage.setItem("selectedFileName", "");
        setKey((prevKey) => prevKey + 1); // Tăng giá trị key để làm mới component
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
