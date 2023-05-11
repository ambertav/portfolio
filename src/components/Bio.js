import Connect from './Connect';

function Bio (props) {

    return (
        <div>
            <div class='bio'>
                {Object.keys(props.bio).map((b) => {
                    if (b === props.bioLength) {
                        return <h2>{props.bio[b]}</h2>
                    }
                })}
            </div>
            <div>
                <h3 class='font-semibold text-lg'>Top Technical Skills</h3>
                {Object.entries(props.skills).map((set, index) => {
                    return (
                        <ul key={index}>
                            <h4>{set[0]}</h4>
                            {set[1].map((skill, index) => {
                                return (
                                    <li key={index}>{skill}</li>
                                );
                            })}
                        </ul>
                    )
                })}
            </div>
            <Connect />
        </div>
    );
}


export default Bio;