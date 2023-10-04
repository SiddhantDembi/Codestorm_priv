import React from "react";
import PersonalInformation from "../PersonalInformation/PersonalInformation";  // Adjust the path
import AssessmentResults from "../AssessmentResults/AssessmentResults";  // Adjust the path
import Recommendations from "../Recommendations/Recommendations";  // Adjust the path
import ProfileOverview from "../ProfileOverview/ProfileOverview";  // Adjust the path
import ProgressTracking from "../ProgressTracking/ProgressTracking";  // Adjust the path
import SavedResources from "../SavedResources/SavedResources";  // Adjust the path

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <PersonalInformation />
      <AssessmentResults />
      <Recommendations />
      <ProgressTracking />
      {/* <SavedResources /> */}
      {/* <ProfileOverview /> */}
    </div>
  );
};

export default UserProfile;
