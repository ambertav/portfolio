function Header () {
    return (
        <div class='flex flex-col justify-center items-center py-6 mb-6 border-b-2'>
            <img src={require('../profile.png')} alt="Amber Taveras profile picture" class='profile' />
            <h1 class='text-3xl font-semibold'>Amber Taveras</h1>
            <h2 class='text-xl'>Software Engineer</h2>
        </div>
    );
}


export default Header;