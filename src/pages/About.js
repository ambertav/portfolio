import { useState } from 'react';

import Bio from '../components/Bio';
import Project from '../components/Project';

function About (props) {

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
            <div class='flex flex-col items-center mx-auto p-6'>
                <h2>Set Bio Length</h2>
                    <ul class='flex flex-row mx-4 space-x-2.5'>
                        <button class='btn-primary' onClick={handleClick}>Short</button>
                        <button class='btn-primary' onClick={handleClick}>Medium</button>
                        <button class='btn-primary' onClick={handleClick}>Long</button>
                    </ul>
            </div>
            <Bio bioLength={bioLength} skills={props.data.skills} bio={props.data.bio} />
            <h3>Featured Projects</h3>
            <Project projects={featuredProjects} />
        </div>
    );
}


export default About;