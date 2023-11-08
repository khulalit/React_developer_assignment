import axios from 'axios';

export const getCoursesEnrolledByStudent = (email) => async dispatch => {

    dispatch({ type: 'FETCH_STUDENT_COURSES_START' });

    try {
        // const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/courses?page=${page}`);
        setTimeout(async () => {
            
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/dashboard`,{
                params : {
                    email : email
                }
            });
            dispatch({
                type: 'FETCH_STUDENT_COURSES_SUCCESS',
                payload: response.data
            });
        }, 2000);

    } catch (error) {

        dispatch({
            type: 'FETCH_STUDENT_COURSES_FAILED',
            payload: error
        });

    }
}

