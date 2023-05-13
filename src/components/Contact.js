import { useState } from 'react';

function Contact (props) {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formState;

    return (
        <>
            <h3>Contact</h3>
            <form>
                <label>
                    Name:
                    <input 
                        type="text"
                        name="name"
                        value={name}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={email}
                    />
                </label>
                <label>
                    Message:
                    <input
                        type="text"
                        name="message"
                        value={message}
                    />
                </label>
                <input type="submit" value="Send Message" />
            </form>
        </>
    );
}


export default Contact;