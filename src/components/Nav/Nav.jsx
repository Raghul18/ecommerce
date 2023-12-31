import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({navItems}) {
    return (
        <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            {navItems.map((navItem) => {
                return (
                    <li key={navItem.id} className="flex items-center justify-between">
                        <NavLink className={`text-sm text-slate-700 dark:text-white font-bold ${navItem.showDivider && "pr-6"}`} to={navItem.link}>{navItem.text}</NavLink>
                        {navItem.showDivider && <div className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>}
                    </li>
                )
            })}
        </ul>
    )
}

export default Nav
