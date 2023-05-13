import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation () {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className='border-pink-400 shadow bg-pink-200 h-20 shadow-xl'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6'>
                <Link to='/' onClick={() => setNavOpen(false)}>
                    <span className='text-2xl font-semibold hover:font-bold'>Amber Taveras</span>
                </Link>
                <button className='hamburger' onClick={() => setNavOpen((prev) => !prev)}>
                {
                    navOpen ? (<img src={require('../icons/close.png')} style={{ width: '32px', height: '28px'}} />)
                        : (<img src={require('../icons/hamburger.png')} style={{width: '32px', height: '28px'}} />)
                }
                </button>
                <div className={navOpen ? 'w-full mr-10 ml-auto md:hidden overflow-visible' : 'hidden w-full md:block md:w-auto'}>
                    <ul className= {navOpen ? 'flex flex-col p-2 w-2/6 ml-auto shadow-2xl bg-white text-center rounded-lg absolute right-12'
                    : 'flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'} >
                        <Link to='/projects' onClick={() => setNavOpen(false)} >
                            <li className='hover:font-semibold'>Projects</li>
                        </Link>
                        <Link to='/resume' onClick={() => setNavOpen(false)} >
                            <li className='hover:font-semibold'>Resume</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;