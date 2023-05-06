import Connect from './Connect';

function Footer () {

    const year = new Date().getFullYear()

    return (
    <footer>
        <div>
            <span>Copyright &copy; {year} All Rights Reserved</span>
        </div>
        <Connect />
    </footer>
    )
}


export default Footer;