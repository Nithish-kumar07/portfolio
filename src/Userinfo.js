import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const UserData = { name, email, mobile };

    axios
      .post('http://localhost:5000/Userinformation', UserData)
      .then((response) => {
        console.log('Data submitted successfully:', response.data);
        setName('');
        setEmail('');
        setMobile('');
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"  // Use email type for the email field
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">Submit</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default User;
