import { useState } from 'react';

function ContactForm (props) {

    function getClearFormState () {
        return ({
            name: '',
            email: '',
            message: ''
        });
    }

    const [ formState, setFormState ] = useState(getClearFormState());

    const { name, email, message } = formState;

    function encode ({ name, email, message }) {
        return `form-name=contact&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;
    }

    function handleChange (evt) {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value
        });
    }

    async function handleSubmit (evt) {
        evt.preventDefault();
        await fetch ('/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formState)
        });
        setFormState(getClearFormState());
        props.setModalOpen(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit} method='POST' name="contact" data-netlify="true" className='form'>
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label htmlFor="name">Name:</label>
                        <input 
                            id="name"
                            type="text"
                            name="name"
                            placeholder='Name'
                            onChange={handleChange}
                            value={name}
                        />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder='Email'
                            onChange={handleChange}
                            value={email}
                        />
                </div>
                <div className='flex flex-col md:flex-row md:justify-items-start md:mr-8'>
                    <label htmlFor="message" className='font-semibold md:text-lg mr-3 ps-0'>Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Ask me anything...'
                            onChange={handleChange}
                            value={message}
                        ></textarea>
                </div>
                <input type="submit" value="Send Message" className='btn-primary px-8 mt-10 md:text-lg'/>
            </form>
        </>
    );
}


export default ContactForm;