import { useEffect } from 'react';

import Header from '../components/Header';
import Skills from '../components/Skills';

function About (props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


    return (
        <div>
            <Header bio={props.data.bio} />
            <h3 className='font-semibold text-2xl mt-12' id='skills'>Technical Skills</h3>
            <Skills skills={props.data.skills} />
        </div>
    );
}


export default About;