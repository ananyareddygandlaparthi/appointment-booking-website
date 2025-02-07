import React from 'react';
import LoginForm from './LoginForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#333', fontSize: '40px', margin: '20px 0' }}>
        Medical Appointment Booking Website
      </h1>
      <LoginForm />
      <Footer />
    </div>
  );
};


export default Home;

