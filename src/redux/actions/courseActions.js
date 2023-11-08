import axios from 'axios';
/*
    @page : number
*/
export const fetchCourses = (page) => async dispatch => {

    dispatch({ type: 'FETCH_COURSES_START' });

    try {
        // const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/courses?page=${page}`);
        setTimeout(async () => {
            
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/courses?limit=10&page=${page}`);
            dispatch({
                type: 'FETCH_COURSES_SUCCESS',
                payload: response.data
            });
        }, 2000);

    } catch (error) {

        dispatch({
            type: 'FETCH_COURSES_FAILED',
            payload: error
        });

    }
}

export const searchCourses = (query, page) => async dispatch => {

    dispatch({ type: 'SEARCH_COURSES_START' });

    try {
        // const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/courses?page=${page}`);
        setTimeout(async () => {
            
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/courses/search`,{
                params : {
                    q : query,
                    page : page,
                }
            });
            dispatch({
                type: 'SEARCH_COURSES_SUCCESS',
                payload: response.data
            });
        }, 2000);

    } catch (error) {

        dispatch({
            type: 'SEARCH_COURSES_FAILED',
            payload: error
        });

    }
}
