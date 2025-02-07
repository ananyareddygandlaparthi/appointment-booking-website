
import React from 'react';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions, concerns, or feedback, feel free to reach out to us. Our team is here to help!</p>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Our Office</h2>
        <p>Medical Appointment Booking Inc.</p>
        <p>1234 Health Ave, Wellness City, HC 56789</p>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Contact Details</h2>
        <p><strong>Email:</strong> support@medicalbooking.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
      </div>

       <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h2>Send Us a Message</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Name:
              <input type="text" name="name" style={{ width: '100%', padding: '8px', margin: '5px 0' }} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input type="email" name="email" style={{ width: '100%', padding: '8px', margin: '5px 0' }} required />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Message:
              <textarea name="message" rows="5" style={{ width: '100%', padding: '8px', margin: '5px 0' }} required></textarea>
            </label>
            </div>
          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </div>
    <div style={{ marginTop: '20px' }}>
        <h2>Connect With Us</h2>
        <p>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;



