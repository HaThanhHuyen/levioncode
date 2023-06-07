import "../courseList/courseList.css";
import React, { useState } from "react";
import JsonData from "../../fakeData/data.json";
import ReactPaginate from "react-paginate";
import courseMan from "../../image/courses-man.png";
import heart from "../../image/heart.png";

function CourseList(listCourse) {
  const [courses, setCourses] = useState(JsonData);
  const [pageNumber, setPageNumber] = useState(0);

  const coursesPerPage = 3;
  const pagesVisited = pageNumber * coursesPerPage;

  const displayCourses = courses
    .slice(pagesVisited, pagesVisited + coursesPerPage)
    .map((course) => {
      return (
        <div className="listCourse">
          <img className="listCourseTitle_img" src={courseMan} alt="courseMan"></img>
          <div className="listButton">
              <button>All Levels</button>
              <button>Speaking Skills</button>
              <h3 className="title">
              <p>{course.name}</p>
              </h3>
              <h1>${course.price}.00</h1>
            </div>
            <div className="cart">
              <button>Add To Cart</button>
              <img src={heart} alt="heart"></img>
            </div>
        </div>
      );
    });

  const pageCount = Math.ceil(courses.length / coursesPerPage);

  const changePage = ({ selected }) => {
    console.log('huyen', selected);
    setPageNumber(selected);
  };

  return (
    <div className="CourseList">
      {displayCourses}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default CourseList;