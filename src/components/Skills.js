import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

function Skills (props) {

    const [ tooltipContent, settooltipContent ] = useState('');

    function handleMouseOver (evt) {
        settooltipContent(`${evt.target.alt}`);
    }

    return (
        <div className='flex justify-center items-center pt-6 mb-12'>
            <ul className='flex justify-center items-center flex-wrap w-3/5'>
                {props.skills.map((s, index) => {
                    return (
                        <li className='p-3' key={index}>
                            <Tooltip anchorSelect='.my-anchor-element' place="top">
                                    {tooltipContent}
                            </Tooltip>
                            <img onMouseOver={handleMouseOver} src={require(`../icons/${s.toLowerCase()}.png`)} alt={s.replace('-', '.')} className='icons my-anchor-element' />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default Skills;