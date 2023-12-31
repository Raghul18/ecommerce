import React,{useState} from 'react'

function Dropdown({ categories, handleCategoryChange }) {
    const [toggle,setToggle] = useState(false); 
    return (
        <div className="m-4">
            <button className="relative inline-flex cursor-pointer select-none items-center rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-700">
                <label htmlFor="dropdown-open" className="absolute left-0 block h-full w-full cursor-pointer"> </label>
                Filter Category <svg className="ml-2 h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <input type="checkbox" className="peer hidden" id="dropdown-open" checked={toggle} onChange={() =>{setToggle(!toggle)}}/>
            <div className="absolute peer-checked:block z-10 mt-2 hidden w-44 divide-y divide-gray-100 rounded border bg-white shadow">
                <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
                    {
                        categories.map((category,i) => <li key={i}>
                            <div onClick={(e) =>{
                                setToggle(!toggle)
                                handleCategoryChange(e)
                            }} className="block px-4 py-2 hover:bg-gray-100">{category}</div>
                        </li>)
                    }
                </ul>
            </div>
        </div>

    )
}

export default React.memo(Dropdown);
