import React, { useState } from "react";

const Recommendations = () => {
  const dummyRecommendations =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const [recommendations, setRecommendations] = useState(dummyRecommendations);

  const handleSaveRecommendations = () => {
    // Implement your logic to save recommendations
    console.log("Recommendations saved:", recommendations);
  };

  return (
    <div>
      <h2>Recommendations</h2>
      <div>
        <label htmlFor="recommendations">Recommendations:</label>
        <div>{recommendations}</div>
      </div>
      <button onClick={handleSaveRecommendations}>Save Recommendations</button>
    </div>
  );
};

export default Recommendations;
