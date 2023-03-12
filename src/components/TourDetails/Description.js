import React, { useState } from "react";

function Description({ description }) {
  
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 150;

  function toggleDescription() {
    setExpanded((prevState) => !prevState);
  }

  function getDisplayText() {
    return expanded ? description : description.slice(0, MAX_LENGTH);
  }

  return (
    <div className="Tour-info">
      <p>{getDisplayText()}</p>
      {description.length > MAX_LENGTH && (
        <button onClick={toggleDescription}>
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

export default Description;
