import { useEffect, useState } from 'react'
import SearchComponent from '../SearchComponent';
import MenuIcon from '../../assets/menu.svg';
import { Link } from 'react-router-dom';

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-blue-200">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <SearchComponent/>
            </div>
            <div>
                <Link to='/login'>Dashboard</Link>
            </div>
            <span className="font-semibold text-xl tracking-tight">Courses</span>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white" onClick={()=>setOpenMenu(prevState=>!prevState)}>
                   <img src={MenuIcon} alt='menu icon' className='bg-red-100'/>
                </button>
            </div>
            {openMenu && 
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                        Blog
                    </a>
                </div>
                <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
                </div>
            </div>}
        </nav>
    )
}
