const initialState = {
    courses: [],
    loading: false,
    error: null,
}

const studentCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STUDENT_COURSES_START':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_STUDENT_COURSES_SUCCESS':
            return {
                ...state,
                loading: false,
                courses: action.payload,
                
            }
        case 'FETCH_STUDENT_COURSES_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
            
        default:
            return state
    }
}

export default studentCoursesReducer;