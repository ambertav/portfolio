import { Link } from 'react-router-dom';
import { useState } from 'react';


import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Navigation () {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav class='border-pink-200 bg-pink-100'>
            <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6'>
                <span class='text-2xl font-semibold hover:font-bold'>Amber Taveras</span>
                <button class='hamburger' onClick={() => setNavOpen((prev) => !prev)}>
                {
                    navOpen ? (<MdClose style={{ width: '32px', height: '28px'}} />)
                        : (<FiMenu style={{width: '32px', height: '28px'}} />)
                }
                </button>

            <div class={navOpen ? 'w-full text-right mr-8 ml-auto' : 'hidden w-full md:block md:w-auto'}>
            <ul class= {navOpen ? 'flex flex-col pt-4 w-2/5 ml-auto' : 'flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'} >
                <Link to='/' onClick={() => setNavOpen(false)}>
                    <li class='hover:font-semibold w-10/12'>About</li>
                </Link>
                <Link to='/projects' onClick={() => setNavOpen(false)}>
                    <li class='hover:font-semibold w-10/12'>Projects</li>
                </Link>
                <Link to='/resume' onClick={() => setNavOpen(false)}>
                    <li class='hover:font-semibold w-10/12'>Resume</li>
                </Link>
            </ul>
            </div>
            </div>
        </nav>
    );
}


export default Navigation;