import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { searchCourses } from "../../redux/actions/courseActions";
import SearchIcon from '../../assets/search.svg';
import { debounce } from 'lodash';
import Loader from '../Loader';

function SearchComponent({searchCourses, loading, error, filter}) {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);

    const debouncedSearch = debounce(async (query) => {
        searchCourses(query, 1);
    }, 300);


    useEffect(()=>{
        if(query.length > 3)
            debouncedSearch(query);
    }, [query])

    return (
        <div>
            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src={SearchIcon} alt="search icon"/>
                    </div>
                    <input type="search" id="default-search" value={query} className="block w-[300px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search courses.." onChange={(e)=>setQuery(e.target.value)} onFocus={()=>setOpen(true)} onBlur={()=>setOpen(false)} required/>
                    {open && <div className="w-full text-black px-2 py-4 max-h-[400px] absolute rounded-lg bg-white shadow-lg bottom-[-4rem] z-10">
                        {loading? "Loading..." : 
                        <ul>
                            {
                                filter.map(course=><li key={course.id} className="mx-4">
                                    {course.name}
                                </li>)
                            }
                        </ul>}
                    </div>}
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    filter: state.courses.filter,
    loading: state.courses.loading,
    error: state.courses.error,
})

const mapDispatchToProps = dispatch => ({
    searchCourses: (query, page) => dispatch(searchCourses(query, page))
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent);
