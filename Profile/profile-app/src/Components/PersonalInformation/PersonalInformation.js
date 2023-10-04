import React, { useState } from "react";

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    contactInfo: "123-456-7890",
  });

  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label htmlFor="fullName">Full Name: </label>
        <span>{formData.fullName}</span>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <span>{formData.email}</span>
      </div>

      {/* gender */}
      <div>
        <label htmlFor="gender">Gender: </label>
        <span>{formData.gender}</span>
      </div>

      {/* dateOfBirth */}
      <div>
        <label htmlFor="dateOfBirth">Date of Birth: </label>
        <span>{formData.dateOfBirth}</span>
      </div>

      {/* contact Information */}
      <div>
        <label htmlFor="contactInfo">Contact Information: </label>
        <span>{formData.contactInfo}</span>
      </div>
    </div>
  );
};

export default PersonalInformation;
