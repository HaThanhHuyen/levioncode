import styles from "../courseList/courseList.module.css";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import courseMan from "../../image/courses-man.png";
import heart from "../../image/heart.png";
import TitleOfCourseList from "./titleCourseList";
import FilterLevel from "./level";
import FilterSkill from "./skill";
import { BiSearch } from "react-icons/bi";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../login/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { addItemToFirestore } from "../login/firebase";
import {
  getItemShoppingCartFromFirestore,
} from "../login/firebase";
import LayoutWithHeader from "../../components/layoutWithHeader";

function CourseList() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const coursesPerPage = 6;
  const pagesVisited = pageNumber * coursesPerPage;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const fetchData = async () => {
    if (!isLoading) {
      setIsLoading(true);

      try {
        const querySnapshot = await getDocs(collection(db, "courseList"));
        const coursesList = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setData(coursesList);
        setIsLoading(false);
      } catch (error) {
        console.log("fetchData ~ error:", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = async (course) => {
    if (currentUser) {
      const confirmAddToCart = window.confirm("Do you want to add to cart?");
      if (confirmAddToCart) {
        const item = {
          id: course.id,
          name: course.name,
          img: "",
          level: course.level,
          skill: course.skill,
          price: course.price,
          userEmail: currentUser.email,
        };
  
        try {
          const cartItems = await getItemShoppingCartFromFirestore(currentUser.email);
          const isItemInCart = cartItems.some((item) => item.name === course.name);
          if (isItemInCart) {
            toast.warning("This item is already in your shopping cart!", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 3000,
            });
          } else {
            await addItemToFirestore(item, currentUser.email);
            console.log("Item added to the shopping cart on Firebase.");
            toast.success("Item added to the shopping cart!", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 3000,
            });
            navigate("/shoppingCart");
    
            const updatedCart = await getItemShoppingCartFromFirestore(currentUser.email);
            setCart(updatedCart);
          }
        } catch (error) {
          console.log("handleAddToCart ~ error:", error);
        }
      }
    } else {
      window.confirm("Please log in before adding to the cart!");
    }
  };
  

  const filteredCourses= data
    .filter((val) => {
      if (!searchTerm) {
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
      <LayoutWithHeader>
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
                    <button onClick={() => handleAddToCart(course)}>
                      Add To Cart
                    </button>
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
      </LayoutWithHeader>
      <ToastContainer />
    </div>
  );
}

export default CourseList;
