import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

function Skills (props) {

    const [ tooltipContent, settooltipContent ] = useState('');

    function handleMouseOver (evt) {
        settooltipContent(`${evt.target.alt}`);
    }

    return (
        <li className='p-4 mx-4 mb-4 md:my-8 w-full flex md:justify-evenly items-center rounded-md shadow-lg text-lg font-bold md:w-1/3 lg:w-1/4 transition delay-200 duration-500 ease-in-out hover:bg-pink-100 hover:text-red-400'>
            <Tooltip anchorSelect='.anchorElement' place="top">{tooltipContent}</Tooltip>
            <img 
                onMouseOver={handleMouseOver} 
                onMouseOut={() => settooltipContent('')} 
                src={require(`../assets/icons/${props.skill.toLowerCase()}.png`)} 
                alt={props.skill.replace('-', '.')} className='icons anchorElement mr-10 md:mr-4' 
            />
            <li>{props.skill.replace('-', '.')}</li>
        </li>
    );
}


export default Skills;