import { useEffect, useState } from 'react';

function Bio (props) {
    const [ animatedText, setAnimatedText ] = useState('');
    const [ currentIndex, setCurrentIndex ] = useState(0);
    
    useEffect(() => {
        const delay = 40; // Default delay for regular characters
        const periodDelay = 800; // Delay after a period

        if (currentIndex < props.bio.length) {
            const char = props.bio[currentIndex];

            const animationFrame = requestAnimationFrame(() => {
                setAnimatedText((prevText) => prevText + char);

                setTimeout(() => {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }, char === '.' ? periodDelay : delay);
            });

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [ currentIndex, props.bio ]);

    return <span className="typewriter w-4/5 mt-5 text-base md:text-xl"> { animatedText }</span>;
}


export default Bio;





