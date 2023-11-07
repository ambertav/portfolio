function Bio (props) {
    return (
        <span className='h-8 md:h-10 overflow-hidden mt-16 md:mt-12'>
            <ul className='block animate-text-slide text-2xl md:text-3xl text-red-500'>
                {props.bio.map((sentence) => {
                    return (
                        <li>{sentence}</li>
                    );
                })}
                <li aria-hidden='true'>{props.bio[0]}</li>
            </ul>
        </span>
    );
}


export default Bio;





