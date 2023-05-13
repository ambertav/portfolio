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
    }

    return (
        <>
            <h3>Contact</h3>
            <form onSubmit={handleSubmit} data-netlify="true" name="contact">
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
                <input type="submit" value="Send Message" />
            </form>
        </>
    );
}


export default Contact;