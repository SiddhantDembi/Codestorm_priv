import React, { useState } from "react";

const AssessmentResults = () => {
  const dummyAssessmentResults = {
    interests: "Technology, Travel, Photography",
    strengths: "Analytical thinking, Teamwork, Communication",
    personalityTraits: "Introverted, Logical, Detail-oriented",
    values: "Work-life balance, Growth, Helping others"
  };

  const [assessmentResults, setAssessmentResults] = useState(dummyAssessmentResults);

  const handleSaveResults = () => {
    // Implement your logic to save assessment results
    console.log("Assessment results saved:", assessmentResults);
  };

  return (
    <div>
      <h2>Assessment Results</h2>
      <div>
        <label htmlFor="interests">Interests:</label>
        <span>{assessmentResults.interests}</span>
      </div>
      <div>
        <label htmlFor="strengths">Strengths:</label>
        <span>{assessmentResults.strengths}</span>
      </div>
      <div>
        <label htmlFor="personalityTraits">Personality Traits:</label>
        <span>{assessmentResults.personalityTraits}</span>
      </div>
      <div>
        <label htmlFor="values">Values:</label>
        <span>{assessmentResults.values}</span>
      </div>
      <button onClick={handleSaveResults}>Save Assessment Results</button>
    </div>
  );
};

export default AssessmentResults;
