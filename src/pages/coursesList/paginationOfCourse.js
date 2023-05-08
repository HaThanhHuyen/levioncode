import styles from "../coursesList/coursesList.module.css";
import left from "../../image/left.png";
import right from "../../image/right.png";
export default function PaginationOfCourse({
  totalPosts,
  numberPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / numberPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className={styles.pagination}>
      <a>
        <img src={left}></img>
      </a>
      {pages.map((page, index) => {
        return (
          <a
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </a>
        );
      })}
      <a>
        <img src={right}></img>
      </a>
    </div>
  );
}