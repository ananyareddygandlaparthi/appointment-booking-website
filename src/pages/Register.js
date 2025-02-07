
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    age: "",
    patientID: "",
    consultedDoctors: "",
    medicalHistory: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const registrationData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      age: parseInt(formData.age),
      patientID: formData.patientID,
      consultedDoctors: formData.consultedDoctors,
      medicalHistory: formData.medicalHistory
    };

    console.log("Sending registration data:", registrationData);
  
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registrationData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          age: "",
          patientID: "",
          consultedDoctors: "",
          medicalHistory: ""
        });
      } else {
        alert(`Error: ${data.message || "Failed to register"}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
};

  const formStyle = {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    width: "100%",
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Phone number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="0"
            max="150"
            style={inputStyle}
          />
        </div>
        <div>
          <label>Patient ID:</label>
          <input
            type="text"
            name="patientID"
            value={formData.patientID}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Consulted Doctors:</label>
          <input
            type="text"
            name="consultedDoctors"
            value={formData.consultedDoctors}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="Enter doctor names separated by commas"
          />
        </div>
        <div>
          <label>Medical History:</label>
          <textarea
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            required
            style={textareaStyle}
            placeholder="Please provide your medical history"
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;