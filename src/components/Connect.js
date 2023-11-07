import { Tooltip } from 'react-tooltip';

function Connect () {
    return (
        <ul className='flex justify-center py-10 font-bold text-xl'>
            <li className='mx-6'>
                <Tooltip anchorSelect='.github' place="left">Github</Tooltip>
                <a href="https://github.com/ambertav/" target="_blank" rel="noreferrer"><img src={require('../assets/icons/github.png')} alt="github" className='icons github duration-200 hover:animate-pulse' /></a>
            </li>
            <li className='mx-6'>
                <Tooltip anchorSelect='.linkedin' place="right">LinkedIn</Tooltip>
                <a href="https://www.linkedin.com/in/ambertaveras/" target="_blank" rel="noreferrer"><img src={require('../assets/icons/linkedin.png')} alt="linkedin" className='icons linkedin hover:animate-pulse' /></a>
            </li>
        </ul>
    );
}


export default Connect;