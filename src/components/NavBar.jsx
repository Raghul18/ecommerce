import React, { useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import Nav from './Nav/Nav';
import MobileNav from './Nav/MobileNav';
import { AiOutlineMenu } from 'react-icons/ai';

function NavBar() {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };
    const navItems = [
        { id: "1", text: "Home", link: "/", showDivider: true },
        { id: "2", text: "Shop", link: "/shop", showDivider: true },
        { id: "3", text: "Cart", link: "/cart", showDivider: false },
    ];
    return (
        <>
            <nav className="px-8 lg:px-16 py-3 flex justify-between items-center bg-white dark:bg-slate-900 lg:mx-auto">
                <p className="text-2xl font-bold leading-none text-slate-700 dark:text-white">
                    EcomHub
                </p>
                <Nav navItems={navItems}/>
                <button aria-label="Open Navigation" onClick={toggleMobileNav} className='block lg:hidden'>
                    <AiOutlineMenu size={20} className="dark:text-white"/>
                </button>
                <MobileNav navItems={navItems} isMobileNavOpen={isMobileNavOpen} toggleMobileNav={toggleMobileNav}/>
                <ThemeSwitcher className="hidden lg:flex text-slate-700 dark:text-white" />
            </nav>
        </>
    )
}

export default NavBar;
