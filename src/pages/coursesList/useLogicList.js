import { useCallback, useEffect, useState } from "react";
import fakeData from "../../fakeData/data.json";

let a = [];

export default function UseLogicCourseList() {
  const [filter, setFilter] = useState({
    Speaking: false,
    Listening: false,
    Reading: false,
    Writing: false,
    allLevels: false,
    Beginner: false,
    Intermediate: false,
    Advanced: false,
  });
  useEffect(() => {
    console.log("filter", filter);
  }, [filter]);

  const [listCourse, setListCourse] = useState(fakeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPerPage, setnumberPerPage] = useState(6);
  const lastPostIndex = currentPage * numberPerPage;
  const firstPostIndex = lastPostIndex - numberPerPage;
  const currentPost = listCourse.slice(firstPostIndex, lastPostIndex);
  const [skills, setSkills] = useState([
    ...fakeData.filter(
      (item, index) => {
        return index === fakeData.findIndex((t) => t.skill === item.skill);
      }
    ),
  ]);
  const [levels, setLevels] = useState([
    ...fakeData.filter((item, index) => {
      return index === fakeData.findIndex((t) => t.level === item.level);
    }),
  ]);
  const handleFilterSkills = (e) => {
    console.log("Success", e);
    const { name, checked } = e.target;
    console.log(e);
    console.log(skills);
    setFilter((prev) => {
      return { ...prev, [name]: checked };
    });
    console.log("abcd", filter);
    console.log(fakeData);

  };
  const handleFilterLevels = (e) => {
    console.log("Success", e);
    const { name, checked } = e.target;
    console.log("checked", checked);
    setFilter((prev) => {
      return { ...prev, [name]: checked };
    });
    console.log("filter level", filter);
  };
  useEffect(() => {
    let isFilter = false;

    const filterData = fakeData.filter((item) => {
      if (filter?.Listening && item?.skill === "Listening") {
        isFilter = true;
        return true;
      }

      if (filter?.Reading && item?.skill === "Reading") {
        isFilter = true;
        return true;
      }

      if (filter?.Speaking && item?.skill === "Speaking") {
        isFilter = true;
        return true;
      }

      if (filter?.Writing && item?.skill === "Writing") {
        isFilter = true;
        return true;
      }
      if (filter?.allLevels) {
        isFilter = true;
        return true;
      }
      if (filter?.Beginner && item?.level === "Beginner") {
        isFilter = true;
        return true;
      }

      if (filter?.Intermediate && item?.level === "Intermediate") {
        isFilter = true;
        return true;
      }

      if (filter?.Advanced && item?.level === "Advanced") {
        isFilter = true;
        return true;
      }
      return false;
    });

    console.log("filterData", filterData);
    isFilter ? setListCourse(filterData) : setListCourse(fakeData);
  }, [filter]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const handleSearch = (e) => {
    let name = e.target.value;
    console.log(name);
    const a = fakeData.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log("abcd=>", a);
    setListCourse(a);
    console.log("Success=>", listCourse);
  };

  // const optimised = useCallback(debounce(handleSearch), []);

  return {
    handleSearch,
    listCourse,
    handleFilterSkills,
    handleFilterLevels,
    currentPost,
    fakeData,
    numberPerPage,
    setCurrentPage,
    currentPage,
    debounce,
    // optimised,
    skills,
    levels,
  };
}