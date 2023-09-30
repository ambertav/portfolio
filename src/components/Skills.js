import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

function Skills (props) {

    const [ tooltipContent, settooltipContent ] = useState('');

    function handleMouseOver (evt) {
        settooltipContent(`${evt.target.alt}`);
    }

    return (
        <div className='flex justify-center items-center pt-6 mb-12'>
            <ul className='flex justify-evenly flex-wrap w-full'>
                {props.skills.map((s, index) => {
                    return (
                        <li className='p-6 m-4 mx-10 w-full flex md:justify-evenly items-center shadow-2xl text-xl font-bold md:w-1/3 lg:w-1/4 transition delay-200 duration-500 ease-in-out hover:bg-pink-100 hover:text-red-400' key={index}>
                            <Tooltip anchorSelect='.my-anchor-element' place="top">
                                    {tooltipContent}
                            </Tooltip>
                            <img onMouseOver={handleMouseOver} src={require(`../icons/${s.toLowerCase()}.png`)} alt={s.replace('-', '.')} className='icons my-anchor-element mr-16 md:mr-8' />
                            <li>
                                {s.replace('-', '.')}
                            </li>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default Skills;