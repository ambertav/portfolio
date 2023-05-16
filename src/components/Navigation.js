import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

function Navigation () {

    const [navOpen, setNavOpen] = useState(false);

    function scrollCenter (el) {
        el.scrollIntoView({
            block: 'center'
        });
    }

    return (
        <nav className='border-pink-400 shadow bg-pink-200 h-20 shadow-xl fixed w-full top-0 z-999'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6'>
                <Link to='/' onClick={() => setNavOpen(false)}>
                    <span className='text-2xl font-semibold hover:font-bold'>Amber Taveras</span>
                </Link>
                <button className='hamburger' onClick={() => setNavOpen((prev) => !prev)}>
                {
                    navOpen ? (<img src={require('../icons/close.png')} alt="x-button icon to close menu" style={{ width: '32px', height: '28px'}} />)
                        : (<img src={require('../icons/hamburger.png')} alt="hamburger icon to open menu" style={{width: '32px', height: '28px'}} />)
                }
                </button>
                <div className={navOpen ? 'w-full mr-10 ml-auto md:hidden overflow-visible' : 'hidden w-full md:block md:w-auto'}>
                    <ul className= {navOpen ? 'flex flex-col p-2 w-2/6 ml-auto shadow-2xl bg-white text-center rounded-lg absolute right-12'
                    : 'flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'} >
                        <HashLink to='/#bio' scroll={scrollCenter} onClick={() => setNavOpen(false)} >
                            <li className='hover:font-semibold'>About</li>
                        </HashLink>
                        <Link to='/projects' onClick={() => setNavOpen(false)} >
                            <li className='hover:font-semibold'>Projects</li>
                        </Link>
                        <HashLink to='/#skills'
                        scroll={scrollCenter}
                        onClick={() => setNavOpen(false)} >
                            <li className='hover:font-semibold'>Technical Skills</li>
                        </HashLink>
                        <Link to='/resume' onClick={() => setNavOpen(false)} >
                            <li className='hover:font-semibold'>Resume</li>
                        </Link>
                        <HashLink to='/#contact' scroll={scrollCenter} onClick={() => setNavOpen(false)} >
                            <li className='hover:font-semibold'>Contact</li>
                        </HashLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;