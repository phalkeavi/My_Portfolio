import React from 'react';
import './About.css';
import profileImage from './image.png';


export default function About () {
    return (
        <section id="About"> <h2> About Me </h2>
            <img 
        src={profileImage} 
        alt="My Profile" 
        style={{ width: '200px', borderRadius: '50%', marginTop: '20px' }} 
      />
       
        <p> "Organized and detail-oriented Web Developer skilled in HTML, CSS, JavaScript, React.js, and MySQL. Passionate about building user-friendly applications, problem-solving, and collaborating in development teams. Eager to apply technical skills in an entry-level role."</p>
        
        
        <hr />
        </section>
    
);
}