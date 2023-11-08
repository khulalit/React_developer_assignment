import axios from "axios";

export const markCompleteCourse = (courseId) => async dispatch => {

    dispatch({ type: 'MARK_STUDENT_COURSES_START' });

    try {
        // const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/courses?page=${page}`);
        setTimeout(async () => {
            
            const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/courses/markComplete`,{
                courseId: courseId,
            });
            dispatch({
                type: 'MARK_STUDENT_COURSES_SUCCESS',
                payload: response.data
            });
        }, 2000);

    } catch (error) {

        dispatch({
            type: 'MARK_STUDENT_COURSES_FAILED',
            payload: error
        });

    }
}