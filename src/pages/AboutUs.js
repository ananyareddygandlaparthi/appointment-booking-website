
import React from 'react';
import Footer from '../components/Footer';
import userimage from '../components/userimage.png';

const AboutUs = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>About Us</h1>
      <p>
        Our mission is to provide easy access to healthcare by enabling patients to
        book appointments seamlessly with doctors.
      </p>
      <p>
        Our team is dedicated to making healthcare more accessible and improving
        patient care through technology.
      </p>
      
      <img src={userimage} alt="Our Team" style={{ width: '300px', height: 'auto', margin: '20px 0' ,borderRadius:"10px"}} />

      <Footer />
    </div>
  );
};

export default AboutUs;
