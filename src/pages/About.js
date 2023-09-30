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
            <h3 className='font-semibold text-2xl md:text-3xl mt-20' id='skills'>Technical Skills</h3>
            <Skills skills={props.data.skills} />
            <h3 className='font-semibold text-2xl md:text-3xl mt-20 border-t-2 mx-10 lg:mx-16 pt-10' id='connect'>Connect with Amber</h3>
            <Connect />
        </div>
    );
}


export default About;