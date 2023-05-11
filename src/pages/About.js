import { useState } from 'react';

import Header from '../components/Header';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Connect from '../components/Connect';
import Project from '../components/Project';
import { useNavigate } from 'react-router-dom';

function About (props) {

    const navigate = useNavigate();

    const [ bioLength, setBioLength ] = useState('long');
    const [ featuredProjects, setFeaturedProjects ] = useState(
        props.data.projects.filter((p) => {
            if (p.featured === true) {
                return p;
            }}
        )
    );

    function handleClick (evt) {
        evt.preventDefault();
        setBioLength(evt.target.textContent.toLowerCase());
    }

    return (
        <div class='max-w-screen-xl'>
            <Header />
            <div class='flex flex-col items-center mx-auto p-6'>
                <h2>Set Bio Length</h2>
                    <ul class='flex flex-row mx-4 space-x-2.5'>
                        <button class='btn-primary' onClick={handleClick}>Short</button>
                        <button class='btn-primary' onClick={handleClick}>Medium</button>
                        <button class='btn-primary' onClick={handleClick}>Long</button>
                    </ul>
            </div>
            <Bio bioLength={bioLength} skills={props.data.skills} bio={props.data.bio} />
            <h3 class='font-semibold text-lg pt-1'>Top Technical Skills</h3>
            <Skills skills={props.data.skills} />
            <Connect />
            <h3 class='font-semibold text-lg'>Featured Projects</h3>
            <div class='flex justify-evenly items-center flex-wrap'>
                <Project projects={featuredProjects} />
            </div>
            <button class='btn-primary justify-center items-center mb-4' onClick={() => navigate('/projects')}>View More Projects</button>
        </div>
    );
}


export default About;