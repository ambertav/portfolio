import { Link, useHref } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

function Navigation () {

    const [navOpen, setNavOpen] = useState(false);

    const menuRef = useRef(null);
    
    function scrollCenter (element) {
        element.scrollIntoView({
            block: 'center'
        });
    }

    function clickedOutsideOfNav (evt) {
        if (evt.target === document.querySelector('.menu-icon')) return;
        const itemsArray = Array.from(menuRef.current.querySelectorAll('li'));
        if (!itemsArray.includes(evt.target)) {
            setNavOpen(false);
        }
    }

    function handleNavHamburger () {
        setNavOpen((prev) => !prev);
    }

    useEffect(() => {
        document.addEventListener('click', clickedOutsideOfNav);
        return () => {
            document.removeEventListener('click', clickedOutsideOfNav);
        };
    }, []);

    return (
        <nav className='border-pink-400 shadow bg-pink-200 h-20 shadow-xl fixed w-screen top-0'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6'>
                <Link to='/' onClick={() => setNavOpen(false)}>
                    <span className='text-2xl font-semibold hover:font-bold'>Amber Taveras</span>
                </Link>
                <button className='hamburger' onClick={handleNavHamburger}>
                {
                    navOpen ? (<img className='menu-icon' src={require('../icons/close.png')} alt="x-button icon to close menu" style={{ width: '32px', height: '32px'}} />)
                        : (<img className='menu-icon' src={require('../icons/hamburger.png')} alt="hamburger icon to open menu" style={{width: '32px', height: '32px'}} />)
                }
                </button>
                <div className={navOpen ? 'w-full mr-10 ml-auto md:hidden overflow-visible' : 'hidden w-full md:block md:w-auto'}>
                    <ul id='menu' ref={menuRef} className= {navOpen ? 'flex flex-col p-2 w-2/6 ml-auto shadow-2xl bg-white text-center rounded-lg absolute right-12 [&>*]:p-2'
                    : 'flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'} >
                        <HashLink
                            to='/#bio'
                            scroll={scrollCenter}
                            onClick={() => setNavOpen(false)}
                        >
                            <li className='hover:font-semibold'>About</li>
                        </HashLink>
                        <Link to='/projects' onClick={() => setNavOpen(false)} >
                            <li className='hover:font-semibold'>Projects</li>
                        </Link>
                        <HashLink
                            to='/#skills'
                            scroll={scrollCenter}
                            onClick={() => setNavOpen(false)}
                        >
                            <li className='hover:font-semibold'>Technical Skills</li>
                        </HashLink>
                        <a 
                            href="https://drive.google.com/file/d/1Fgptv77WeRodPM-c_y4LRge4V1zI3oOp/view?usp=drive_link"
                            target="_blank" 
                            rel="noreferrer" 
                            onClick={() => setNavOpen(false)} >
                                <li className='hover:font-semibold'>Resume</li>
                        </a>
                        <HashLink
                            to='/#contact'
                            scroll={scrollCenter}
                            onClick={() => setNavOpen(false)}
                        >
                            <li className='hover:font-semibold'>Contact</li>
                        </HashLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;