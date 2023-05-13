function Header () {
    return (
        <div className='flex flex-col justify-center items-center py-6 mb-6 border-b-2'>
            <img src={require('../profile.png')} alt="Amber Taveras profile picture" className='profile' />
            <h1 className='text-3xl font-semibold'>Amber Taveras</h1>
            <h2 className='text-xl'>Software Engineer</h2>
        </div>
    );
}


export default Header;