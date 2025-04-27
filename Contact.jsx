import React from 'react';
import './Contact.css'; 

export default function Contact () {
    return (
        <section id="contact">
            <h2>
                Contact Me
            </h2>
            <form>
                <input type="text" placeholder=" Enter your Name" /> <br /> 
                <input email="email" placeholder="Enter your Email" /> <br />
                <textarea placeholder=" Give me Feedback" ></textarea><br />
                <button type ="submit" >Send</button>
            </form>
        </section>
    );
}