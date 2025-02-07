
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorProfile.css';
import doctorImage from '../components/userimage.png';
import Footer from '../components/Footer';

const doctors = {
  jane: {
    name: 'Dr. Jane Smith',
    qualifications: 'MBBS, MD - General Medicine',
    experience: '10 years',
    phone: '987-654-3210',
    picture: doctorImage,
  },
  john: {
    name: 'Dr. John Doe',
    qualifications: 'MBBS, MD - Pediatrics',
    experience: '8 years',
    phone: '123-456-7890',
    picture: doctorImage,
  },
};

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedDoctor = doctors[id];

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleBookAppointment = () => {
    navigate('/appointments');
  };

  if (!selectedDoctor) return <p>Doctor not found.</p>;

  return (
    <div className="doctor-profile">
      <div className="profile-picture">
        <img src={selectedDoctor.picture} alt="Doctor" />
      </div>
      <div className="profile-details">
        <h1>Doctor Profile</h1>
        <p>Name: {selectedDoctor.name}</p>
        <p>Qualifications: {selectedDoctor.qualifications}</p>
        <p>Experience: {selectedDoctor.experience}</p>
        <p>Phone number: {selectedDoctor.phone}</p>

        <div className="profile-inputs">
          <label>
            Choose Date:
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </label>

          <label>
            Choose Location:
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All</option>
              <option value="Location 1">Location 1</option>
              <option value="Location 2">Location 2</option>
            </select>
          </label>

          <button
            onClick={handleBookAppointment}
            style={{
              height: "35px",
              width: "200px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px"
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
