import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import studentCoursesReducer from './studentDataReducer';
import markCourseReducer from './markCourseReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  studentCourses: studentCoursesReducer, 
  markCourse: markCourseReducer,
})

export default rootReducer;