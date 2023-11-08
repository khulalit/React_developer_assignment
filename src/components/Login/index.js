import React, { useState } from 'react'
import { getCoursesEnrolledByStudent } from '../../redux/actions/studentDataAction';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    function submitHandler(e){
        e.preventDefault();
        // getCoursesEnrolledByStudent(email);

        navigate('/dashboard?email='+email);
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <form>
                <header className='bg-blue-500 text-white p-4 rounded-md mb-2'>
                    Login
                </header>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="first_name" onChange={(e)=>setEmail(e.target.value)} name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@gmail.com" required />
                    </div>
                </div>
                <button type="submit" onClick={submitHandler} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}



const mapStateToProps = (state) => ({
    
})
  
const mapDispatchToProps = dispatch => ({
    getCoursesEnrolledByStudent: (email) => dispatch(getCoursesEnrolledByStudent(email))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);