import React, { useState } from "react";
import "./Appointments.css";

const Appointments = () => {
  const [selectedTime, setSelectedTime] = useState("AM");
  const [timeSlots, setTimeSlots] = useState({
    location1: [
      { time: "10:00 - 10:15", available: true },
      { time: "10:15 - 10:30", available: true },
      { time: "6:00 - 6:15", available: true },
      { time: "6:15 - 6:30", available: true },
    ],
    location2: [
      { time: "11:15 - 11:30", available: true },
      { time: "11:30 - 11:45", available: true },
      { time: "7:30 - 7:45", available: true },
      { time: "7:45 - 8:00", available: true },
    ],
  });

  const handleTimeToggle = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async (location, index) => {
    const slot = timeSlots[location][index];

    if (!slot.available) {
      alert("This time slot is already booked!");
      return;
    }

    const newSlots = { ...timeSlots };
    newSlots[location][index].available = false;
    setTimeSlots(newSlots);

    try {
      const response = await fetch("http://localhost:3000/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: "doctorId",
          patientId: "patientId",
          date: "2024-11-15",
          time: slot.time,
        }),
      });

      const data = await response.json();
      if (response.status === 201) {
        alert("Appointment booked successfully!");
      } else {
        alert(data.message || "Failed to book appointment!");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Appointment Booked!");
    }
  };

  return (
    <div className="appointments-container">
      <h1>Appointments</h1>

      <button className="date-picker-button">Date Chosen</button>

      <div className="time-toggle-container">
        <button
          className={`time-toggle-button ${selectedTime === "AM" ? "active" : ""}`}
          onClick={() => handleTimeToggle("AM")}
        >
          AM
        </button>
        <button
          className={`time-toggle-button ${selectedTime === "PM" ? "active" : ""}`}
          onClick={() => handleTimeToggle("PM")}
        >
          PM
        </button>
      </div>

      <div className="location-section">
        <div className="location-title">Location 1</div>
        <div className="appointment-time-slots">
          {timeSlots.location1.map((slot, index) => (
            <button
              key={index}
              className={`time-slot ${slot.available ? "available" : ""}`}
              onClick={() => handleBooking("location1", index)}
              disabled={!slot.available}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      <div className="location-section">
        <div className="location-title">Location 2</div>
        <div className="appointment-time-slots">
          {timeSlots.location2.map((slot, index) => (
            <button
              key={index}
              className={`time-slot ${slot.available ? "available" : ""}`}
              onClick={() => handleBooking("location2", index)}
              disabled={!slot.available}
            >
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      <div className="appointment-footer">
        Appointments may be subject to change or cancellation.
      </div>
    </div>
  );
};

export default Appointments;
