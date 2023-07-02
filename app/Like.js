import React, { useState } from 'react';


function LikeButton() {
  const [Count, setCount] = useState(0);
  const handleLikeClick = () => {
    setCount(Count + 1);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      <p>Like count: {Count}</p>
    </div>
  );
}

export default LikeButton;

