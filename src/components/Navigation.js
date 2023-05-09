import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Navigation () {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav class='border-pink-400 shadow bg-pink-200 h-20'>
            <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6'>
                <Link to='/' onClick={() => setNavOpen(false)}>
                    <span class='text-2xl font-semibold hover:font-bold'>Amber Taveras</span>
                </Link>
                <button class='hamburger' onClick={() => setNavOpen((prev) => !prev)}>
                {
                    navOpen ? (<MdClose style={{ width: '32px', height: '28px'}} />)
                        : (<FiMenu style={{width: '32px', height: '28px'}} />)
                }
                </button>
                <div class={navOpen ? 'w-full mr-10 md:hidden overflow-hidden' : 'hidden w-full md:block md:w-auto'}>
                    <ul class= {navOpen ? 'flex flex-col p-2 w-2/5 ml-auto shadow-2xl bg-white text-center rounded-lg' : 'flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'} >
                        <Link to='/about' onClick={() => setNavOpen(false)}>
                            <li class='hover:font-semibold'>About</li>
                        </Link>
                        <Link to='/projects' onClick={() => setNavOpen(false)}>
                            <li class='hover:font-semibold'>Projects</li>
                        </Link>
                        <Link to='/resume' onClick={() => setNavOpen(false)}>
                            <li class='hover:font-semibold'>Resume</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;