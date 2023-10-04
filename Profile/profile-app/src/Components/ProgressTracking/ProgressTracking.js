import React, { useState } from "react";

const ProgressTracking = () => {
  const [completedAssessments, setCompletedAssessments] = useState([
    { id: 1, name: "Assessment 1", dateCompleted: "2023-10-05" },
    { id: 2, name: "Assessment 2", dateCompleted: "2023-10-06" }
  ]);

  return (
    <div>
      <h2>Progress Tracking</h2>
      <ul>
        {completedAssessments.map((assessment) => (
          <li key={assessment.id}>
            {assessment.name} - Completed on {assessment.dateCompleted}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracking;
