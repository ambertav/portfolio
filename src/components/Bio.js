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
        </div>
    )
}


export default Bio;