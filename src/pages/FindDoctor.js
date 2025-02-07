

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FindDoctor.css';


const FindDoctor = () => {
  const [searchInput, setSearchInput] = useState('');
  const doctors = [
    { id: 'jane', name: 'Dr. Jane Smith', title: 'Dermatologist', description: 'Specializes in skin care' },
    { id: 'john', name: 'Dr. John Doe', title: 'Pediatrician', description: 'Experienced in child health care' },
  ];


  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchInput.toLowerCase()) ||
    doctor.title.toLowerCase().includes(searchInput.toLowerCase()) ||
    doctor.description.toLowerCase().includes(searchInput.toLowerCase())
  );


  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };


  return (
    <div className="find-doctor">
      <h1>Top Doctors At Your Service</h1>


      <div className="search-bar">
        <input
          type="text"
          placeholder="Search By: doctors, diseases, treatment, symptoms"
          className="search-input"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>


      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Link key={doctor.id} to={`/doctor-profile/${doctor.id}`} className="doctor-card">
              <div className="doctor-info">
                <img src={doctor.image || 'default-image.png'} alt={doctor.name} className="doctor-image" />
                <div className="doctor-details">
                  <h2>{doctor.name}</h2>
                  <p>{doctor.title}</p>
                  <p className="doctor-description">{doctor.description}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No doctors found matching your search.</p>
        )}
      </div>
    </div>
  );
};


export default FindDoctor;


