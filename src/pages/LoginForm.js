


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SimpleLoginForm = () => {
  const [formData, setFormData] = useState({ email: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/userprofile');
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };

  return(
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', paddingTop: '50px' }}>
          <div style={{ textAlign: 'left', padding: '30px', backgroundColor: '#D3D3D3', width: '40%', borderRadius: '10px' }}>
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', marginBottom: '20px', height: '30px', borderRadius: '5px', border: 'none' }}
            />
            <label>Phone:</label>
            <br />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ width: '100%', marginBottom: '20px', height: '30px', borderRadius: '5px', border: 'none' }}
            />
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', marginBottom: '20px', height: '30px', borderRadius: '5px', border: 'none' }}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button
              type="submit"
              style={{
                fontSize: '20px',
                width: '50%',
                height: '35px',
                borderRadius: '10px',
                justifyContent: 'center',
                display: 'flex',
                margin: '0 auto',
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black'
              }}
            >
              Login
            </button>
          </div>
        </form>
  );
};

export default SimpleLoginForm;
