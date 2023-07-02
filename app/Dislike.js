import React, { useState} from 'react';

function DislikeButton() {
  const [Count, setCount] = useState(0);

  const handleDislikeClick = () => {
    setCount(Count + 1);
  };

  return (
    <div>
      <button onClick={handleDislikeClick}>Dislike</button>
      <p>Dislike count: {Count}</p>
    </div>
  );
}

export default DislikeButton;

