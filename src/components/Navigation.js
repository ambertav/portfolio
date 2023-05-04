import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <nav>
            <ul>
                <Link to='/projects'>
                    <li>Projects</li>
                </Link>
                <li>Resume</li>
                <li>About</li>
            </ul>
        </nav>
    );
}


export default Navigation;