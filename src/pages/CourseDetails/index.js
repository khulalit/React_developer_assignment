import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ExpendebleList from "../../components/ExpendebleList";
import Header from "../../components/Header";

function CourseDetails({courses}) {
    const params = useParams();
    const id = params['id'];

    const { name, instructor, description, enrollmentStatus, prerequisites, location, duration, syllabus} = courses[id];

    useEffect(()=>{
        document.title = courses[id].name;
    },[])

    return (
        <div className="">
            <header className="p-4 flex gap-4">
                <Link to='/'>Back</Link> <h1>Course Details</h1>
            </header>
            <div className="flex gap-4 flex-wrap items-start p-4">
                <img src="https://picsum.photos/300/200" alt="image" className=""/>
                <div className="flex flex-col gap-4">
                    <span>Instructor : {instructor} </span>
                    <span>Duration : {duration} </span>
                    <span>Enrollment Status : {enrollmentStatus} </span>
                    <span>Instructor : {instructor} </span>
                    <span className="text-2xl">{name} </span>
                    <span>Prerequisite : </span>
                    <span>Location : {location}</span>
                    <h3>Prerequisite</h3>
                    <ul className="border-[1px] border-gray-200 p-4 rounded-lg">
                        {prerequisites.map(prerequisite=><li key={prerequisite} className="border-b-[1px] border-gray-200 ">
                            {prerequisite}
                        </li>)}
                    </ul>
                    <h3>Description</h3>
                    <p className="border-[1px] border-gray-200 p-4 rounded-lg">
                        {description}
                    </p>
                    <h3>Syllabus</h3>
                    <ul className="border-[1px] border-gray-200 p-4 rounded-lg">
                        {syllabus.map(e=><Fragment key={e.topic}>
                            <ExpendebleList schedule={e.week} topic={e.topic} description={e.topic}/>
                        </Fragment>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    courses: state.courses.courses,
    loading: state.courses.loading,
    error: state.courses.error,
})

export default connect(mapStateToProps)(CourseDetails);
