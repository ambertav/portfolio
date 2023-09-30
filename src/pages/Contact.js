import { useState, useEffect } from 'react';

import ContactForm from '../components/ContactForm';
import Modal from '../components/Modal';



function Contact () {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const [ modalOpen, setModalOpen ] = useState(false);

    return (
        <>
            <section className='border-b-2 text-left mx-10 lg:mx-16'>
                <h1 className='mt-10 md:ml-10 ml-6 font-semibold text-3xl p-3'>Contact</h1>
            </section>
            <div className='flex flex-col items-center mt-3' id='contact'>
                <ContactForm setModalOpen={setModalOpen} />
                {modalOpen ? <Modal setModalOpen={setModalOpen} /> : ''}
            </div>
        </>
    )
}


export default Contact;