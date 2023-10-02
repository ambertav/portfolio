function Bio (props) {
    return (
        <span className='h-6 md:h-8 overflow-hidden mt-12'>
            <ul className='block animate-text-slide md:text-2xl text-red-500'>
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





