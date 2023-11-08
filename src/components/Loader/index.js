import React from 'react';
import LoaderSVG from '../../assets/eclipse-black-36.svg';

export default function Loader() {
    return (
        <div role="status" className='flex justify-center p-8'>
            <img src={LoaderSVG} alt='loader svg'/>
            <span className="sr-only">Loading...</span>
        </div>

    )
}
