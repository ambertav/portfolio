function Footer () {

    function scrollUp () {
        const currentPosition = window.scrollY;
        if (currentPosition > 0) {
          window.requestAnimationFrame(scrollUp);
          window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }

    return (
    <footer className='w-full flex justify-center py-10'>
        <button onClick={scrollUp} className='btn-primary w-14 rounded-full shadow-xl text-3xl animate-bounce'>&#8593;</button>
    </footer>
    );
}


export default Footer;