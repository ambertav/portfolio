import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <nav>
            <ul>
                <Link to='/projects'>
                    <li>Projects</li>
                </Link>
                <Link to='/resume'>
                    <li>Resume</li>
                </Link>
                <li>About</li>
            </ul>
        </nav>
    );
}


export default Navigation;