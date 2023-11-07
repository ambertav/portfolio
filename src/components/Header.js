import Bio from './Bio';

function Header (props) {
    return (
        <div className='flex justify-center items-center h-[50vh] md:h-[65vh] lg:h-[70vh] md:mx-10 lg:mx-16'>
                <div className='flex flex-col font-bold md:text-right'>
                    <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold md:mb-12'>Amber Taveras</h1>
                    <h2 className='text-xl md:text-3xl lg:text-4xl font-bold md:mb-12 mt-4'>Full Stack Software Engineer</h2>
                    {<Bio bio={props.bio} />}
                </div>
        </div>
    );
}


export default Header;