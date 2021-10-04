import React, {useState} from 'react';
import './Contact.css';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        const data = {
            email,
            name,
            message
        };
        if (!email.includes('@') || !email.includes('.')) {
            console.log("Please use a valid email address.");
            return;
        }
        if (name === '') {
            console.log('Please include your name.');
            return;
        }
        if (message === '') {
            console.log('Please include a message.');
            return;
        }

        console.log(data);

    }

    return (
        <div id="contact">
            <div>
            <h2>I'd love to hear from you!</h2>
            <div className="emailForm">
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Your Email" required />
                <br />
                <input onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Your Name" required />
                <br />
                <textarea onChange={(e) => {setMessage(e.target.value)}} rows="10" placeholder="Your Message" required />
                <br />
                <button onClick={handleClick}>
                    Send
                </button>
            </div>
            </div>
            
        </div>
    )
}
