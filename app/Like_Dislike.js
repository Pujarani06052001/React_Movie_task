import React, { useState } from 'react';

const LikeButton = () => {
  const [rating, setRating] = useState(0);

  const handleLike = () => {
    setRating(rating + 1);
  };

  const handleDislike = () => {
    setRating(rating - 1);
  };

  return (
    <div>
        <div className="box5">
              <button onClick={handleLike}><img src="Icon - Like (1).png"/></button>

        </div>
        
        <div className="box6">
            <p4>{rating}</p4>
        </div>
        
        <div className="box7">
              <button onClick={handleDislike}><img src="Icon - Like (2).png"/></button>

    
        </div>

    </div>
  );
};

export default LikeButton;
