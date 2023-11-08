const initialState = {
    loading: false,
    error: null,
}

const markCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MARK_STUDENT_COURSES_START':
            return {
                ...state,
                loading: true,
            }
        case 'MARK_STUDENT_COURSES_SUCCESS':
            return {
                ...state,
                loading: false,
                
            }
        case 'MARK_STUDENT_COURSES_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
            
        default:
            return state
    }
}

export default markCourseReducer;