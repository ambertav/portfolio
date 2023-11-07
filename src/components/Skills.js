import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

function Skills (props) {

    const [ tooltipContent, settooltipContent ] = useState('');

    return (
        <>
            <Tooltip anchorSelect='.anchorElement' place={props.direction}>{tooltipContent}</Tooltip>
            <img 
                onMouseOver={(evt) => settooltipContent(`${evt.target.alt}`)} 
                onMouseOut={() => settooltipContent('')} 
                src={require(`../assets/icons/${props.skill.toLowerCase()}.png`)} 
                alt={props.skill.replace('-', '.')}
                className='icons anchorElement mr-6 md:mr-4' 
            />
            <div className='text-right'>{props.skill.replace('-', '.')}</div>
        </>
    );
}


export default Skills;