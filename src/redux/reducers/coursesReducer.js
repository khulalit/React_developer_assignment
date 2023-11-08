const initialState = {
    courses: [],
    filter: [],
    loading: false,
    error: null,
    hasMore: false,
    metaData: {},
}

const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COURSES_START':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_COURSES_SUCCESS':
            return {
                ...state,
                loading: false,
                courses: [...state.courses, ...action.payload.result],
                metaData: {limit : action.payload.limit, page: action.payload.page, total: action.payload.total},
                hasMore: (action.payload.limit * action.payload.page) < action.payload.total,
            }
        case 'FETCH_COURSES_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
            
        case 'SEARCH_COURSES_START':
            return {
                ...state,
                loading: true,
            }

        case 'SEARCH_COURSES_SUCCESS':
            return {
                ...state,
                loading: false,
                filter: action.payload.result,
            }

        case 'SEARCH_COURSES_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
            
        default:
            return state
    }
}

export default coursesReducer;