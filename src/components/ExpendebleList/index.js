import React, { useState } from 'react'

export default function ExpendebleList({schedule, topic, description}) {
    const [expand, setExpand] = useState(false);
    return (

        <li
            className="w-full border-b-2 list-none font-bold border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
            <div onClick={()=>setExpand(prevState => !prevState)}>
                {schedule}
            </div>
            {expand &&
                <div>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{topic}</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500"> {description} </p>
                        </div>
                    </div>
                </div>}
        </li>

    )
}
