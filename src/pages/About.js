import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Connect from '../components/Connect';
import Project from '../components/Project';
import Contact from '../components/Contact';

function About (props) {

    const navigate = useNavigate();

    const [ bioLength, setBioLength ] = useState('long');
    const [ featuredProjects ] = useState(
        props.data.projects.filter((p) => {
            return p.featured === true;
        })
    );

    function handleClick (evt) {
        evt.preventDefault();
        setBioLength(evt.target.textContent.toLowerCase());
    }

    return (
        <div>
            <Header />
            <div className='flex flex-col items-center mx-auto p-6 mt-5'>
                <h2 id='bio'>Set Bio Length</h2>
                    <ul className='flex flex-row mx-4 space-x-2.5'>
                        <button className={bioLength === 'short' ? 'btn-primary ring-2 ring-black ring-opacity-75' : 'btn-primary'} onClick={handleClick}>Short</button>
                        <button className={bioLength === 'medium' ? 'btn-primary ring-2 ring-black ring-opacity-75' : 'btn-primary'} onClick={handleClick}>Medium</button>
                        <button className={bioLength === 'long' ? 'btn-primary ring-2 ring-black ring-opacity-75' : 'btn-primary'} onClick={handleClick}>Long</button>
                    </ul>
            </div>
            <Bio bioLength={bioLength} skills={props.data.skills} bio={props.data.bio} />
            <h3 className='font-semibold text-lg mt-6' id='skills'>Technical Skills</h3>
            <Skills skills={props.data.skills} />
            <h3 className='font-semibold text-lg pt-6 my-3'>Connect with Amber</h3>
            <Connect />
            <h3 className='font-semibold text-lg pt-6 mb-3 mt-6'>Featured Projects</h3>
            <div className='flex justify-center items-start'>
                <Project projects={featuredProjects} />
            </div>
            <button className='btn-primary justify-center items-center mb-4' onClick={() => navigate('/projects')}>View More Projects</button>
            <div className='flex flex-col items-center mt-3' id='contact'>
                <Contact />
            </div>
        </div>
    );
}


export default About;