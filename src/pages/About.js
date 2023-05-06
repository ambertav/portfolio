import { useState, useEffect } from 'react';

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
        <div>
            <div>
                Set Bio Length
                    <ul>
                        <button onClick={handleClick}>Short</button>
                        <button onClick={handleClick}>Medium</button>
                        <button onClick={handleClick}>Long</button>
                    </ul>
            </div>
            <Bio bioLength={bioLength} skills={props.data.skills} bio={props.data.bio} />
            <h3>Featured Projects</h3>
            <Project projects={featuredProjects} />
        </div>
    );
}


export default About;