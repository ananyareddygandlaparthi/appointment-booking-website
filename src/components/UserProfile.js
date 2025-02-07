
import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import userImage from './userimage.png';
import Footer from './Footer';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [consultedDoctors, setConsultedDoctors] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser({
        ...storedUser,
        picture: userImage,
      });
      setConsultedDoctors(storedUser.consultedDoctors || '');
      setMedicalHistory(storedUser.medicalHistory || '');
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  const updateUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/updateUser/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          consultedDoctors,
          medicalHistory
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Profile updated successfully!');
        const updatedUser = { ...user, consultedDoctors, medicalHistory };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
      } else {
        alert(`Error: ${data.message || 'Failed to update profile.'}`);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleEdit = () => {
    updateUser();
  };

  return (
    <div className="user-profile">
      <div className="profile-picture">
        <img src={user.picture || userImage} alt="User" />
      </div>

      <div className="profile-details">
        <h1>User Profile</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Age:</strong> {user.age || 'Not Provided'}</p>
        <p><strong>Patient ID:</strong> {user.patientID || 'Not Provided'}</p>

        <div className="profile-inputs">
          <h2>Consulted Doctors</h2>
          <textarea
            value={consultedDoctors}
            onChange={(e) => setConsultedDoctors(e.target.value)}
            placeholder="Enter consulted doctors"
            rows="4"
          />

          <h2>Medical History</h2>
          <textarea
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            placeholder="Enter medical history"
            rows="6"
          />
        </div>

        <button
          onClick={handleEdit}
          className="user-edit"
          style={{
            height: "35px",
            width: "200px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
            marginTop: "20px"
          }}
        >
          Update Profile
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
