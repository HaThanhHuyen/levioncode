import styles from "../courseList/courseList.module.css";
import React, { useState } from "react";
import JsonData from "../../fakeData/data.json";
import ReactPaginate from "react-paginate";
import courseMan from "../../image/courses-man.png";
import heart from "../../image/heart.png";
import Header from "../Header/Header";
import TitleOfCourseList from "./titleCourseList";
import FilterLevel from "./level";
import FilterSkill from "./skill";
import { BiSearch, BiFilterAlt } from "react-icons/bi";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { cartList } from "../redux/selector";
import { addToCart } from "../redux/actions";

function CourseList() {
  const dispatch = useDispatch();
  const cart = useSelector(cartList);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const coursesPerPage = 6;
  const pagesVisited = pageNumber * coursesPerPage;

  const handleAddToCart = (course) => {
    console.log(course.id);
    dispatch(
      addToCart({
        id: course.id,
        name: course.name,
        price: course.price,
      })
    );
  };

  const filteredCourses = JsonData.filter((val) => {
    if (searchTerm === "") {
      return true;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  })
    .filter((val) => {
      if (selectedSkills.length === 0) {
        return true;
      } else {
        return selectedSkills.includes(val.level);
      }
    })
    .filter((val) => {
      if (selectedLevels.length === 0) {
        return true;
      } else {
        return selectedLevels.includes(val.level);
      }
    });

  const pageCount = Math.ceil(filteredCourses.length / coursesPerPage);

  const displayCourses = filteredCourses.slice(
    pagesVisited,
    pagesVisited + coursesPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleLevelChange = (levels) => {
    setSelectedLevels(levels);
    setPageNumber(0);
  };
  const handleSkillChange = (skills) => {
    setSelectedSkills(skills);
    setPageNumber(0);
  };
  return (
    <div className={styles.CourseList}>
      <Header />
      <TitleOfCourseList />
      <div className={styles.CourseListDetail}>
        <div className={styles.categoryOfCourse}>
          <div className={styles.templateContainer}>
            <div className={styles.searchInput_Container}>
              <BiSearch className={styles.searchIcon} />
              <input
                id={styles.searchInput}
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            {/* <BiFilterAlt className={styles.searchFilter}/> */}
          </div>
          <div className={styles.skillsAndLevels}>
            <FilterLevel
              levels={["All Levels", "Beginner", "Intermediate", "Advanced"]}
              onLevelChange={handleLevelChange}
            />
            <FilterSkill
              skills={["Speaking", "Listening", "Reading", "Writing"]}
              onSkillChange={handleSkillChange}
            />
          </div>
        </div>
        <div className={styles.List}>
          {displayCourses.map((course) => (
            <div className={styles.listCourse} key={course.id}>
              <img
                className={styles.listCourseTitle_img}
                src={courseMan}
                alt="courseMan"
              />
              <div className={styles.listButton}>
                <button>{course.level}</button>
                <button>{course.skill} Skills</button>
                <h3 className={styles.title}>
                  <p>{course.name}</p>
                </h3>
                <h1>${course.price}.00</h1>
              </div>
              <div className={styles.cart}>
              <button onClick={() => handleAddToCart(course)}>Add To Cart</button>
                <img src={heart} alt="heart" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousLinkClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
      <Footer />
    </div>
  );
}

export default CourseList;
