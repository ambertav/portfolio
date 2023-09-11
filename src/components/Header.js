import Bio from './Bio';

function Header (props) {
    return (
        <>
        <div className='flex flex-col justify-center items-center border-b-2 h-screen md:h-[95vh] pb-10 lg:pb-20'>
            <img src={require('../profile.png')} alt="Amber Taveras profile" className='profile' />
            <h1 className='text-3xl md:text-5xl font-semibold p-2'>Amber Taveras</h1>
            <h2 className='text-xl md:text-3xl p-2'>Software Engineer</h2>
        {<Bio bio={props.bio} /> }
        </div>
        </>
    );
}


export default Header;