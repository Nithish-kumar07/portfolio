import React, { useState } from 'react';
import './contact.css'; 
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    axios.defaults.withCredentials = true;

  
  const handleSubmit = (e) => {
    
    e.preventDefault(); 

    const UserData = { name, email, mobile, subject, message };

    axios.post('http://localhost:5000/user', UserData)
      .then((response) => {
        console.log('Data submitted successfully:', response.data);
        setSuccess('Data Submitted Successfuly');
        setName('');
        setEmail('');
        setMobile('');
        setSubject('');
        setMessage('');
        setTimeout(() => setSuccess(''), 3000);
      })
      
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="head"> Contact <span className="me">Me</span></h2>
      {success && <p className = 'success-message'>{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="input-box">
          <input 
            type="number" 
            placeholder="Mobile Number" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            required
          />
          <input 
            type="text" 
            placeholder="Email Subject" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            required
          />
        </div>
        <textarea 
          cols="30" 
          rows="10" 
          placeholder="Your Message"
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div>
          <input type="submit" value="Send Message" className="ntb"/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
