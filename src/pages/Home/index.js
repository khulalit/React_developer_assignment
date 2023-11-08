import { useEffect, useState, useRef, useCallback} from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../redux/actions/courseActions';
import { Link } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

export const Home = ({ fetchCourses, courses, loading, error, hasMore }) => {

    const [page, setPage] = useState(1);

    const observer = useRef();

    const lastElementOfCourse = useCallback(node=>{
        if(loading) return;

        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting && hasMore){
                setPage(prevPage => prevPage+1);
            }
        });
        
        if(node) observer.current.observe(node);
    }, [loading, hasMore])

    useEffect(() => {
        document.title = "Courses List";
        fetchCourses(page);
    }, [page])

    return (
        <div className=''>
            <Header/>
            <ul className='flex flex-wrap gap-8 p-8'>
                {courses?.map((course, index) => {

                    if(courses.length > (index+1)){
                        return <li key={index} ref={lastElementOfCourse} className='basis-[250px] bg-red-100 grow'>
                        <Link to={`courses/${index}`} className='w-full'>
                        {/* {course.id} {course.title} */}
                            <CourseCard name={course.name} discription={course.description} instructor={course.instructor}/>
                        </Link>
                    </li>
                    }
                    return <li key={index} className='basis-[200px] grow bg--100'>
                        <Link to={`courses/${index}`} className='w-full'>
                            {/* {course.id} {course.title} */}
                            <CourseCard name={course.name} discription={course.description} instructor={course.instructor}/>
                        </Link>
                    </li>
                })}
            </ul>
            {loading && <Loader/>}
            {error && <div>Error</div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    courses: state.courses.courses,
    loading: state.courses.loading,
    error: state.courses.error,
    hasMore: state.courses.hasMore,
})

const mapDispatchToProps = dispatch => ({
    fetchCourses: (page) => dispatch(fetchCourses(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)