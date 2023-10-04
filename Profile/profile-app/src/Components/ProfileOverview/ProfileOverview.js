import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileOverview = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Assume a user ID is available from the authentication system
        const userId = getUserId(); // Replace with your logic to get the user ID

        const response = await axios.get(`http://127.0.0.1:5000/profile/${userId}`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const getUserId = () => {
    // Replace with your logic to get the user ID
    return "user123";
  };

  return (
    <div className="profile-overview">
      <h2>Profile Overview</h2>
      {profileData ? (
        <div>
          <div>
            <strong>Full Name:</strong> {profileData.fullName}
          </div>
          <div>
            <strong>Email:</strong> {profileData.email}
          </div>
          {/* Add more profile information here */}
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default ProfileOverview;
