import styles from "../coursesList/coursesList.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilterSkill from "./skill";
import FilterLevel from "./level";
import ListOfCourse from "./listCourses";
import TitleOfCourseList from "./titleCourse";
import PaginationOfCourse from "./paginationOfCourse";
import UseLogicCourseList from "./useLogicList";
export default function CourseList() {
  const {
    listCourse,
    handleFilterSkills,
    handleFilterLevels,
    fakeData,
    numberPerPage,
    currentPost,
    setCurrentPage,
    currentPage,
    debounce,
    optimised,
    skills,
    levels,
  } = UseLogicCourseList();
  return (
    <div className={styles.courseList}>
      <Header />
      <TitleOfCourseList />
      <div className={styles.courseListDetails}>
        <div className={styles.categoryOfCourse}>
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search Course"
            onChange={optimised}
          />
          <div className={styles.skillsAndLevels}>
            <FilterSkill
              handleFilterSkills={handleFilterSkills}
              skills={skills}
            />
            <FilterLevel
              handleFilterLevels={handleFilterLevels}
              levels={levels}
            />
          </div>
        </div>
        <ListOfCourse listCourse={currentPost} />
      </div>
      <PaginationOfCourse
        totalPosts={listCourse.length}
        numberPerPage={numberPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}