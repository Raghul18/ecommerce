import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function MobileNav({ navItems, isMobileNavOpen, toggleMobileNav }) {
    return (
        <div className={isMobileNavOpen ? 'fixed lg:hidden right-0 top-0 w-[40%] h-full border-l border-l-gray-900 dark:border-l-white bg-white dark:bg-slate-800 z-10 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 z-10 right-[-100%]'}
        >
            <div className="flex justify-between py-3 px-4">
                <ThemeSwitcher className="block lg:hidden text-slate-700 dark:text-white" />
                <button aria-label="close Navigation" onClick={toggleMobileNav} className='block lg:hidden ml-auto'>
                    <AiOutlineClose size={20} className="dark:text-white"/>
                </button>
            </div>
            {navItems.map(navItem => (
                <NavLink key={navItem.id}
                    className='p-4 block border-b hover:bg-rose-600 dark:text-white duration-300 hover:text-white cursor-pointer border-gray-600 dark:border-white'
                    to={`${navItem.link}`}
                >
                    <button onClick={toggleMobileNav} className="w-full">
                        {navItem.text}
                    </button>
                </NavLink>
            ))}
        </div>
    )
}

export default MobileNav
