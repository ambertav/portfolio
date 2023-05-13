import { useState } from 'react';

function Contact (props) {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formState;

    function handleChange (evt) {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value
        });
    }

    return (
        <>
            <h3>Contact</h3>
            <form>
                <label>
                    Name:
                    <input 
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={name}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        type="text"
                        name="message"
                        onChange={handleChange}
                        value={message}
                    />
                </label>
                <input type="submit" value="Send Message" />
            </form>
        </>
    );
}


export default Contact;