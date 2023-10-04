import React, { useState } from "react";

const SavedResources = () => {
  const [savedResources, setSavedResources] = useState([
    { id: 1, title: "Article 1", link: "https://example.com/article1" },
    { id: 2, title: "Video 1", link: "https://example.com/video1" }
  ]);

  return (
    <div>
      <h2>Saved Resources</h2>
      <ul>
        {savedResources.map((resource) => (
          <li key={resource.id}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedResources;
