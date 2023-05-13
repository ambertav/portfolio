import { Form } from "react-router-dom";

function Contact () {
    return (
        <>
        <h3>Contact</h3>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <label>
                Message
                <input type="text" name="message" />
            </label>
            <input type="submit" value="Send Message" />
        </form>
        </>
    );
}


export default Contact;