import Connect from './Connect';

function Footer () {

    const year = new Date().getFullYear()

    return (
    <footer class='w-full py-6 bg-gray-200 justify-center'>
        <Connect />
        <div>
            <p class='pt-6'>Copyright &copy; {year} All Rights Reserved</p>
            <p>Amber Taveras</p>
        </div>
    </footer>
    )
}


export default Footer;