import Connect from './Connect';

function Footer () {

    const year = new Date().getFullYear()

    return (
    <footer class='relative bottom-0 w-full py-6 bg-gray-100 justify-center'>
        <Connect />
        <div>
            <p class='pt-6'>Copyright &copy; {year} All Rights Reserved</p>
        </div>
    </footer>
    )
}


export default Footer;