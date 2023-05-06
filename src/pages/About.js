import { useState } from 'react';

import Bio from '../components/Bio';

function About () {
    const [ bioLength, setBioLength ] = useState('long');

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
            <Bio bioLength={bioLength} />
            <h1>Here are my tech skills</h1>
            <h1>Here are the links to my github and linkedin</h1>
            <h1>Here are my featured projects</h1>
        </div>
    );
}


export default About;