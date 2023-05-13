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

    function handleChange (evt) {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value
        });
    }

    function handleSubmit (evt) {
        evt.preventDefault();
        setFormState(getClearFormState());
    }

    return (
        <>
            <h3>Contact</h3>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={name}
                    />
                <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        onChange={handleChange}
                        value={message}
                    />
                <input type="submit" value="Send Message" />
            </form>
        </>
    );
}


export default Contact;