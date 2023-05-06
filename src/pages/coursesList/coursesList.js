import styles from "./coursesList.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import courses from "../../image/courses.png";
import coursesMan from "../../image/courses-man.png";
import heart from "../../image/heart.png";
// import search from "../../image/search.png"
// import PaginationOfCourse from "./paginationOfCourse";
export default function CourseList() {
  return (
    <div className={styles.CourseList}>
      <Header />
      <div className={styles.coursesList_part_one}>
        <div className={styles.coursesList_part_one_Left}>
          <h1>Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus
            non venenatis dolor nisl tellus habitant aliquam. Dignissim tellus,
            eu eu sed malesuada pharetra aliquam eu.Dignissim tellus, Tellus
            elementum enim faucibus morbi enim fusce:
          </p>
        </div>
        <div className={styles.coursesList_part_one_Right}>
          <img src={courses} alt="coursesList-images"></img>
        </div>
      </div>

      <div className={styles.courseList_body}>
        <div className={styles.courseList_body_left}>
          <div className={styles.search} >
          {/* <img src={search} alt="coursesList-images"></img> */}
          <input
            id={styles.search}
            name="search"
            type="search"
            placeholder="Search Course"
          />
          </div>
          <div className={styles.Skills_Levels}>
            <div className={styles.skillAll}>
              <h3>Skills</h3>
              <div className={styles.skill}>
                <div className={styles.skills}>
                  <input name="Speaking" type="checkbox" value="Speaking" />
                  <p>Speaking</p>
                </div>
                <div className={styles.skills}>
                  <input name="Listening" type="checkbox" value="Listening" />
                  <p>Listening</p>
                </div>
                <div className={styles.skills}>
                  <input name="Reading" type="checkbox" value="Reading" />
                  <p>Reading</p>
                </div>
                <div className={styles.skills}>
                  <input name="Reading" type="checkbox" value="Reading" />
                  <p>Writing</p>
                </div>
              </div>
            </div>

            <div className="levelAll">
              <h3>Levels</h3>
              <div className={styles.skill}>
                <div className={styles.skills}>
                  <input name="All levels" type="checkbox" value="All levels" />
                  <p>All levels</p>
                </div>
                <div className={styles.skills}>
                  <input name="Beginner" type="checkbox" value="Beginner" />
                  <p>Beginner</p>
                </div>
                <div className={styles.skills}>
                  <input
                    name="Intermediate"
                    type="checkbox"
                    value="Intermediate"
                  />
                  <p>Intermediate</p>
                </div>
                <div className={styles.skills}>
                  <input name="Advanced" type="checkbox" value="Advanced" />
                  <p>Advanced</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.courseList_body_right}>
          <div className={styles.listCourse}>
            <div className={styles.list}>
              <div className={styles.listCourseTitle}>
                <img src={coursesMan} alt="coursesList-images"></img>
                <div className={styles.listButton}>
                  <button>All Levels</button>
                  <button>Speaking Skills</button>
                  <p>Master Your Pronounciation Course</p>
                  <h1>$20.00</h1>
                </div>
                <div className={styles.cart}>
                  <button>Add To Cart</button>
                  <img src={heart} alt="coursesList-images"></img>
                </div>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.listCourseTitle}>
                <img src={coursesMan} alt="coursesList-images"></img>
                <div className={styles.listButton}>
                  <button>All Levels</button>
                  <button>Speaking Skills</button>
                  <p>Master Your Pronounciation Course</p>
                  <h1>$20.00</h1>
                </div>
                <div className={styles.cart}>
                  <button>Add To Cart</button>
                  <img src={heart} alt="coursesList-images"></img>
                </div>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.listCourseTitle}>
                <img src={coursesMan} alt="coursesList-images"></img>
                <div className={styles.listButton}>
                  <button>All Levels</button>
                  <button>Speaking Skills</button>
                  <p>Master Your Pronounciation Course</p>
                  <h1>$20.00</h1>
                </div>
                <div className={styles.cart}>
                  <button>Add To Cart</button>
                  <img src={heart} alt="coursesList-images"></img>
                </div>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.listCourseTitle}>
                <img src={coursesMan} alt="coursesList-images"></img>
                <div className={styles.listButton}>
                  <button>All Levels</button>
                  <button>Speaking Skills</button>
                  <p>Master Your Pronounciation Course</p>
                  <h1>$20.00</h1>
                </div>
                <div className={styles.cart}>
                  <button>Add To Cart</button>
                  <img src={heart} alt="coursesList-images"></img>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>


      {/* <PaginationOfCourse
        totalPosts={listCourse.length}
        numberPerPage={numberPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      /> */}
      <Footer />
    </div>
  );
}
