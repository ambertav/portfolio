import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>About</li>
                </Link>
                <Link to='/projects'>
                    <li>Projects</li>
                </Link>
                <Link to='/resume'>
                    <li>Resume</li>
                </Link>
            </ul>
        </nav>
    );
}


export default Navigation;