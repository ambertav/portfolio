import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Navigation () {

    const [navOpen, setNavOpen] = useState(false);

    const menuRef = useRef(null);

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
        <nav className='border-pink-400 bg-pink-200 h-26 shadow-lg fixed w-screen z-10'>
            <div className='w-screen px-6 md:px-16 flex flex-wrap items-center justify-between p-8'>
                <Link to='/' onClick={() => setNavOpen(false)}>
                    <span className='text-2xl md:text-3xl font-semibold transition duration-300 hover:text-red-500'>Amber Taveras</span>
                </Link>
                <button className='hamburger' onClick={handleNavHamburger}>
                {
                    navOpen ? (<img className='menu-icon' src={require('../assets/icons/close.png')} alt="x-button icon to close menu" style={{ width: '30px', height: '30px'}} />)
                        : (<img className='menu-icon' src={require('../assets/icons/hamburger.png')} alt="hamburger icon to open menu" style={{width: '30px', height: '30px'}} />)
                }
                </button>
                <div className={navOpen ? 'w-full mr-10 ml-auto md:hidden overflow-visible' : 'hidden w-full md:block md:w-auto'}>
                    <ul id='menu' ref={menuRef} className= {navOpen ? 'flex flex-col p-2 w-2/6 ml-auto shadow-2xl bg-white text-center rounded-lg absolute right-12 [&>*]:p-2'
                    : 'flex flex-col font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'} >
                        <Link
                            to='/'
                            onClick={() => setNavOpen(false)}
                        >
                            <li className='md:text-xl transition duration-300 hover:text-red-500'>About</li>
                        </Link>
                        <Link to='/projects' onClick={() => setNavOpen(false)} >
                            <li className='md:text-xl transition duration-300 hover:text-red-500'>Projects</li>
                        </Link>
                        <a 
                            href="https://drive.google.com/file/d/1XCx3Ju-RXl7-JlThPTmA-a79slTemEMj/view?usp=drive_link"
                            target="_blank" 
                            rel="noreferrer" 
                            onClick={() => setNavOpen(false)} >
                                <li className='md:text-xl transition duration-300 hover:text-red-500'>Resume</li>
                        </a>
                        <Link
                            to='/contact'
                            onClick={() => setNavOpen(false)}
                        >
                            <li className='md:text-xl transition duration-300 hover:text-red-500'>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;