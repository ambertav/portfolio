import { useEffect } from 'react';

import Header from '../components/Header';
import Skills from '../components/Skills';
import Connect from '../components/Connect';

function About (props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


    return (
        <div>
            <Header bio={props.data.bio} />
            <h3 className='font-semibold text-3xl md:text-4xl mt-14 mb-4'>Technical Skills</h3>
            <div className='flex flex-col justify-center items-center'>
                {Object.keys(props.data.skills).map((category) => (
                <div className='w-4/5' key={category}>
                    <h2 className='capitalize font-semibold text-lg md:text-2xl text-left mb-4 md:mb-2 mt-6 text-zinc-400'>{category}</h2>
                    <ul className='flex flex-row flex-wrap justify-evenly w-full'>
                    { props.data.skills[category].map((skill, index) => <Skills skill={skill} key={index} /> )}
                    </ul>
                </div>
                ))}
            </div>
            <h3 className='font-semibold text-3xl md:text-4xl mt-20 border-t-2 mx-10 lg:mx-16 pt-10 mb-4' id='connect'>Connect with Amber</h3>
            <Connect />
        </div>
    );
}


export default About;