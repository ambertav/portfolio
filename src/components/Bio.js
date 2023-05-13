function Bio (props) {

    return (
        <div>
            <div className='bio'>
                {Object.keys(props.bio).map((b) => {
                    if (b === props.bioLength) {
                        return <h2>{props.bio[b]}</h2>
                    }
                })}
            </div>
        </div>
    );
}


export default Bio;