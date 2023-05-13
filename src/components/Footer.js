import Connect from './Connect';

function Footer () {

    const year = new Date().getFullYear()

    return (
    <footer className='w-full py-6 bg-gray-200 justify-center'>
        <Connect />
        <div>
            <p className='pt-6'>Copyright &copy; {year} All Rights Reserved</p>
            <p>Amber Taveras</p>
        </div>
    </footer>
    )
}


export default Footer;