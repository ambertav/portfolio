import { Link } from 'react-router-dom';

function Navigation () {

    return (
        <nav class='border-pink-200 bg-pink-100'>
            <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6'>
                <span class='text-2xl font-semibold hover:font-bold'>Amber Taveras</span>
            <div class='menu hidden w-full md:block md:w-auto'>
            <ul class='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'>
                <Link to='/'>
                    <li class='hover:font-semibold'>About</li>
                </Link>
                <Link to='/projects'>
                    <li class='hover:font-semibold'>Projects</li>
                </Link>
                <Link to='/resume'>
                    <li class='hover:font-semibold'>Resume</li>
                </Link>
            </ul>
            </div>
            </div>
        </nav>
    );
}


export default Navigation;