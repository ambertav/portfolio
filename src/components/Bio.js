function Bio (props) {

    let bio = '';

    if (props.bioLength === 'long') {
        bio = 'this is the long bio';
    } else if (props.bioLength === 'medium') {
        bio = 'this is the medium bio';
    } else {
        bio = 'this is the short bio';
    }

    return (
        <div>
            <h1>{ bio }</h1>
            <div>
                <h2>Featured Technical Skills</h2>
                {Object.entries(props.skills).map((set) => {
                    return (
                        <ul>
                            <h4>{set[0]}</h4>
                            {set[1].map((skill) => {
                                return (
                                    <li>{skill}</li>
                                )
                            })}
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}


export default Bio;