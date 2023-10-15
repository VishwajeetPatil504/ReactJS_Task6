import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Follow Me:</p>
      {/* Replace '#' with your actual social media links */}
      <a href="#">Facebook</a> | 
      <a href="#">Twitter</a> | 
      <a href="#">LinkedIn</a>
    </div>
  );
}

export default Contact;
