import React, { useState } from "react";
import styles from "../Blog/blog.module.css";
import JsonData from "../../fakeData/postData.json";
import imageblog from "../../image/imageblog.png";
function FilterPost() {
  return (
    <div className={styles.popularPost}>
      <h3>Popular Post</h3>
      <div className={styles.postDetail}>
        {JsonData.map((post) => (
          <div key={post.id} className={styles.postBody}>
            <img src={imageblog} alt="blog-images"></img>
            <div className={styles.text}>
              <h3>{post.title}</h3>
              <p>{post.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterPost;
