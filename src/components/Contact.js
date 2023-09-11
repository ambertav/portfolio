import { useState } from 'react';

function Contact (props) {

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
            <h3 className='font-semibold text-2xl pt-6 mb-3 mt-6'>Contact</h3>
            <form onSubmit={handleSubmit} method='POST' name="contact" data-netlify="true" className='form'>
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name:</label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={name}
                    />
                <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={message}
                    ></textarea>
                <input type="submit" value="Send Message" className='btn-primary mb-3'/>
            </form>
        </>
    );
}


export default Contact;