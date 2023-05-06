import { useState } from 'react';

import Bio from '../components/Bio';

function About () {
    const [ bioLength, setBioLength ] = useState('short');

    return (
        <div>
            <div>
                Set Bio Length
                    <ul>
                        <li>Short</li>
                        <li>Medium</li>
                        <li>Long</li>
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