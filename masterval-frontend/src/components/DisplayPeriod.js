import DisplayCourse from "../components/DisplayCourse";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";


const DisplayPeriod = ({
  courseinfo,
  setSelectedCourses,
  selectedCourses,
  semester,
  setSelectedProfileCourses,
    selectedProfileCourses,
    selectedProfileCoursesIsLocalStorage,
}) => {
  const newListperiodone = courseinfo.filter(
    (item) => item.semester === semester && item.period === "1"
  );

  const newListperiodtwo = courseinfo.filter(
    (item) => item.semester === semester && item.period === "2"
  );

  const newListPeriodOneAndTwo = courseinfo.filter(
    (item) => item.semester === semester && item.period === "1,2"
  );

  return (
      <div className="outer_wrapper_my_courses">

          <div className="my_courses_info">
              <FontAwesomeIcon className="info_move_course" icon={faSquareCaretRight} />
              <p> - Flytta kurs </p>
              <div className="course_block_icon"></div>
              <p> - Block </p>
          </div>
          <div className="inner_wrapper_my_courses">


        <div className="period_1">
          <h2 className="text_period_1"> Period 1 </h2>
          {newListperiodone.length > 0 ? (
            newListperiodone.map((forecast, index) => (
              <DisplayCourse
                key={index}
                homePage={false}
                courseinfo={forecast}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={selectedCourses}
                setSelectedProfileCourses={setSelectedProfileCourses}
                    selectedProfileCourses={selectedProfileCourses}
                    selectedProfileCoursesIsLocalStorage={selectedProfileCoursesIsLocalStorage}
              />
            ))
          ) : (
            <div className="empty_period"> </div>
          )}
        </div>

        <div className="period_2">
          <h2 className="text_period_2"> Period 2 </h2>
          {newListperiodtwo.length > 0 ? (
            newListperiodtwo.map((forecast, index) => (
              <DisplayCourse
                key={index}
                homePage={false}
                courseinfo={forecast}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={selectedCourses}
                setSelectedProfileCourses={setSelectedProfileCourses}
                    selectedProfileCourses={selectedProfileCourses}
                    selectedProfileCoursesIsLocalStorage={selectedProfileCoursesIsLocalStorage}

              />
            ))
          ) : (
            <div className="empty_period"> </div>
          )}
        </div>
      </div>

      <div className="period_1_2">
        <h2> Period 1 och 2 </h2>
        {newListPeriodOneAndTwo.length > 0 ? (
          newListPeriodOneAndTwo.map((forecast, index) => (
            <DisplayCourse
              key={index}
              homePage={false}
              courseinfo={forecast}
              setSelectedCourses={setSelectedCourses}
              selectedCourses={selectedCourses}
              setSelectedProfileCourses={setSelectedProfileCourses}
                  selectedProfileCourses={selectedProfileCourses}
                  selectedProfileCoursesIsLocalStorage={selectedProfileCoursesIsLocalStorage}

            />
          ))
        ) : (
          <div className="empty_period"> </div>
        )}
      </div>
    </div>
  );
};

export default DisplayPeriod;
