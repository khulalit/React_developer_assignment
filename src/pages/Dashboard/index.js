import React, { useEffect, useLayoutEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { markCompleteCourse } from '../../redux/actions/markCourseAction';
import { getCoursesEnrolledByStudent } from '../../redux/actions/studentDataAction';
import { useSearchParams } from 'react-router-dom';



export const Dashboard = ({ courses, loading, error, getCoursesEnrolledByStudent, markCourse, markLoading, }) => {

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  
  useEffect(()=>{
    const email = searchParams.get('email');
    if(!email) return;
    getCoursesEnrolledByStudent(email);
  },[markLoading])

  useLayoutEffect(() => {
    if (courses.length = 0 && !loading) {
      navigate('/')
    }
  })
  return (
    <div>
      {loading ? <Loader /> :
        <div>
          <h1 className="text-3xl font-bold mb-4">Enrolled Courses</h1>
          <ul>
            {courses.map(course => (
              <li key={course.id} className="mb-4 border p-4 rounded">
                <img src={course.thumbnail} alt={course.name} className="w-full h-40 object-cover mb-2" />
                <h2 className="text-xl font-bold">{course.name}</h2>
                <p>Instructor: {course.instructor}</p>
                <p>Due Date: {course.dueDate}</p>
                <p>Description: {course.description}</p>
                <div className="bg-gray-200 h-4 rounded mt-2">
                  <div
                    className="bg-green-500 h-full rounded"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {
                  
                  markCourse(course.id)}}>
                  Mark as Completed
                </button>
              </li>
            ))}
          </ul>
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  courses: state.studentCourses.courses,
  loading: state.studentCourses.loading,
  error: state.studentCourses.error,
  markLoading: state.markCourse.loading,
  markError: state.markCourse.error,
})

const mapDispatchToProps = (dispatch) => ({
  markCourse : (courseId)=> dispatch(markCompleteCourse(courseId)),
  getCoursesEnrolledByStudent: (email) => dispatch(getCoursesEnrolledByStudent(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)